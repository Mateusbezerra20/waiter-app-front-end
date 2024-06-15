import { ComponentProps } from 'react';
import { Container } from './styles';

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ label, disabled, variant, onClick }: ButtonProps) {
  return (
    <Container disabled={disabled} variant={ variant || 'primary' } onClick={onClick}>
      <span>{ label }</span>
    </Container>
  );
}
