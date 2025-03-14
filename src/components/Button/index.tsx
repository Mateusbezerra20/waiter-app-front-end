import { ComponentProps } from "react";
import { Container } from "./styles";
import { Loader } from "../Loader";

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  isLoading?: boolean;
}

export function Button({
  label,
  disabled,
  variant,
  isLoading,
  onClick,
}: ButtonProps) {
  return (
    <Container
      disabled={disabled}
      variant={variant || "primary"}
      onClick={onClick}
    >
      <span>{label}</span>
      {isLoading && <Loader size={4} />}
    </Container>
  );
}
