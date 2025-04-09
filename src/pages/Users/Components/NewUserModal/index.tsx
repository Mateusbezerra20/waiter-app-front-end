import { ChangeEvent, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { Form, RadioInputGroup, RadioOption } from "./styles";
import { z } from "zod";
import { useErrors } from "../../../../hooks/useErrors";
import { api } from "../../../../utils/api";
import { toast } from "react-toastify";

interface NewUserModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const emailSchema = z
  .string()
  .min(1, "Informe seu e-mail")
  .email("E-mail inválido");
const passwordSchema = z
  .string()
  .min(8, { message: "A senha deve conter ao menos 8 caracteres" })
  .max(14, { message: "A senha pode ter no máximo 14 caracteres" });

export function NewUserModal({ onClose, onSuccess }: NewUserModalProps) {
  const [selectedRole, setSelectedRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { errors, addError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isButtonDisabled = !(
    selectedRole &&
    name &&
    email &&
    password &&
    errors.length < 1
  );

  function handleRoleChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedRole(event.target.value);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setEmail(value);

    const verifiedValue = emailSchema.safeParse(value);
    if (verifiedValue.success) {
      removeError("email");
    } else {
      const errorMessage = verifiedValue.error.errors[0].message;
      addError({ field: "email", message: errorMessage });
    }
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPassword(value);

    const verifiedValue = passwordSchema.safeParse(value);
    if (verifiedValue.success) {
      removeError("password");
    } else {
      const errorMessage = verifiedValue.error.errors[0].message;
      addError({ field: "password", message: errorMessage });
    }
  }

  async function handleSubmitData() {
    setIsLoading(true);
    try {
      await api.post("/users", { name, role: selectedRole, email, password });

      toast.success("Usuário cadastrado com sucesso!");
      onSuccess();
      onClose();
    } catch {
      setIsLoading(false);
      toast.error("Ocorreu um erro ao cadastrar usuário.");
    }
  }

  return (
    <Modal title="Novo Usuário" handleClose={onClose}>
      <Form>
        <Input
          name="name"
          label="Nome"
          value={name}
          onChange={handleChangeName}
        />
        <Input
          name="email"
          label="E-Mail"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          errorMessage={getErrorMessageByFieldName("email")}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          value={password}
          onChange={handleChangePassword}
          errorMessage={getErrorMessageByFieldName("password")}
        />
        <RadioInputGroup>
          <RadioOption>
            <input
              type="radio"
              name="role"
              value="ADMIN"
              checked={selectedRole === "ADMIN"}
              onChange={handleRoleChange}
            />
            <span className={selectedRole === "ADMIN" ? "selected" : ""}>
              Admin
            </span>
          </RadioOption>
          <RadioOption>
            <input
              type="radio"
              name="role"
              value="WAITER"
              checked={selectedRole === "WAITER"}
              onChange={handleRoleChange}
            />
            <span className={selectedRole === "WAITER" ? "selected" : ""}>
              Garçom
            </span>
          </RadioOption>
        </RadioInputGroup>
      </Form>
      <Button
        label="Cadastrar usuário"
        onClick={handleSubmitData}
        disabled={isButtonDisabled}
        isLoading={isLoading}
      />
    </Modal>
  );
}
