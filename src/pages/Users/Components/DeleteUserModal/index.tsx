import { toast } from "react-toastify";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { IUser } from "../../../../entities/User";
import { api } from "../../../../utils/api";
import { Actions, UserInfo } from "./styles";
import { useState } from "react";

interface DeleteUserModalProps {
  user: IUser;
  onClose: () => void;
  onSuccess: () => void;
}

export function DeleteUserModal({
  user,
  onClose,
  onSuccess,
}: DeleteUserModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    try {
      await api.delete(`/users/${user._id}`);

      toast.success(`Usuário ${user.name} foi deletado com sucesso!`);
      onSuccess();
      onClose();
    } catch {
      setIsLoading(false);
      toast.error(`Ocorreu um erro ao deletar o usuário.`);
    }
  }

  return (
    <Modal title="Excluir Usuário" handleClose={onClose}>
      <UserInfo>
        <span>Tem certeza que deseja excluir o usuário?</span>
        <Input
          label="Nome"
          name="name"
          value={user.name}
          placeholder="Nome"
          disabled
        />
        <Input
          label="E-mail"
          name="email"
          value={user.email}
          placeholder="E-mail"
          disabled
        />
      </UserInfo>
      <Actions>
        <Button label="Manter Usuário" onClick={onClose} variant="secondary" />
        <Button
          label="Excluir Usuário"
          onClick={handleSubmit}
          isLoading={isLoading}
        />
      </Actions>
    </Modal>
  );
}
