import { ChangeEvent, useContext, useState } from "react";
import { z } from "zod";
import { toast } from "react-toastify";

import { api } from "../../../../utils/api";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { useErrors } from "../../../../hooks/useErrors";
import { IUser } from "../../../../entities/User";

import { Actions, Form, RadioInputGroup, RadioOption } from "./styles";
import { AuthContext } from "../../../../contexts/AuthContext";

interface EditUserModalProps {
  user: IUser;
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

export function EditUserModal({
  user,
  onClose,
  onSuccess,
}: EditUserModalProps) {
  const [selectedRole, setSelectedRole] = useState(user.role);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { errors, addError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const { user: logedUser } = useContext(AuthContext);

  const isButtonDisabled =
    (!name || name === user.name || errors.length > 0) &&
    (email === user.email || errors.length > 0) &&
    (!password || errors.length > 0) &&
    selectedRole === user.role;

  function handleRoleChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedRole(event.target.value as "WAITER" | "ADMIN");
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

    if (!value) {
      setPassword(null);
      removeError("password");
    }

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
      await api.put(`/users/${user._id}`, {
        name,
        email,
        password,
        role: selectedRole,
      });

      toast.success("Usuário editado com sucesso!");
      onSuccess();
      onClose();
    } catch {
      setIsLoading(false);
      toast.error("Ocorreu um erro ao editar usuário.");
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
          placeholder="Nova senha"
          value={password ? password : ""}
          onChange={handleChangePassword}
          errorMessage={getErrorMessageByFieldName("password")}
        />

        {user._id !== logedUser?.id ? (
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
        ) : (
          ""
        )}
      </Form>
      <Actions>
        <Button
          label="Salvar Alterações"
          type="button"
          onClick={handleSubmitData}
          disabled={isButtonDisabled}
          isLoading={isLoading}
        />
      </Actions>
    </Modal>
  );
}
