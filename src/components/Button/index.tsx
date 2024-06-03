import { ComponentProps } from 'react';
import { Container } from './styles';

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
}

export function Button({ label, disabled }: ButtonProps) {
  return (
    <Container disabled={disabled}>
      <span>{ label }</span>
    </Container>
  );
}
