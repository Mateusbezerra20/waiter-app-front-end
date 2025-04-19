import { z } from "zod";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form, InputWrapper } from "./styles";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useErrors } from "../../hooks/useErrors";
import { api } from "../../utils/api";
import { AuthContext } from "../../contexts/AuthContext";
import { AxiosError } from "axios";

const emailSchema = z.string().email({ message: "E-mail inválido" });
const passwordSchema = z
  .string()
  .min(8, { message: "A senha deve conter ao menos 8 caracteres" })
  .max(14, { message: "A senha pode ter no máximo 14 caracteres" });

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signin } = useContext(AuthContext);
  const { errors, addError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = email && password && errors.length === 0;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.post("/login", { email, password });

      console.log(response.status);

      signin(response.data);
    } catch (err) {
      setIsLoading(false);
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          addError({
            field: "password",
            message: "Senha incorreta. Tente novamente.",
          });
        }

        if (err.response?.status === 404) {
          addError({ field: "email", message: "Usuário não encontrado." });
        }
      } else {
        alert("Falha interna. Tente novamente mais tarde.");
      }
    }
  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setEmail(value);
    const emailValue = emailSchema.safeParse(value);
    if (value && !emailValue.success) {
      const message = emailValue.error.errors[0].message;
      addError({ field: "email", message });
    } else {
      removeError("email");
    }
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPassword(value);
    const parsedPassword = passwordSchema.safeParse(value);
    if (value && !parsedPassword.success) {
      const message = parsedPassword.error.errors[0].message;
      addError({ field: "password", message });
    } else {
      removeError("password");
    }
  }

  return (
    <Container>
      <header>
        <span>Bem vindo(a) ao</span>
        <h1>
          <strong>WAITER</strong>APP
        </h1>
      </header>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            label="E-mail"
            type="email"
            name="email"
            placeholder="Seu e-mail de acesso"
            value={email}
            onChange={handleChangeEmail}
            errorMessage={getErrorMessageByFieldName("email")}
          />
          <Input
            label="Senha"
            name="password"
            placeholder="informe sua senha"
            type="password"
            value={password}
            onChange={handleChangePassword}
            errorMessage={getErrorMessageByFieldName("password")}
          />
        </InputWrapper>
        <Button
          label="Fazer login"
          disabled={!isFormValid}
          isLoading={isLoading}
        />
      </Form>
    </Container>
  );
}
