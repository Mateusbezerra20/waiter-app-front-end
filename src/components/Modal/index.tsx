import { ModalBody, Overlay } from "./styles";
import CloseIcon from "../../assets/images/close-icon.svg";
import { ReactNode } from "react";

interface ModalProps {
  title: string;
  handleClose: () => void;
  children: ReactNode;
}

export function Modal({ title, handleClose, children }: ModalProps) {
  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>{title}</strong>

          <button type="button" onClick={handleClose}>
            <img src={CloseIcon} alt="Fechar detalhes" />
          </button>
        </header>

        {children}
      </ModalBody>
    </Overlay>
  );
}
