import { useContext } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Warning } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";

interface LogoutConfirmModalProps {
  onClose: () => void;
}

export function LogoutConfirmModal({ onClose }: LogoutConfirmModalProps) {
  const { signout } = useContext(AuthContext);

  return (
    <Modal title="Sair" handleClose={onClose}>
      <Warning>Tem certeza de que deseja sair?</Warning>
      <Button label="Sair" onClick={signout} />
    </Modal>
  );
}
