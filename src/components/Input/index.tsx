import { ComponentProps } from 'react';
import { Container } from './styles';
import infoIcon from '../../assets/images/info-icon.svg';

interface InputProps extends ComponentProps<'input'> {
  label: string;
  name: string;
  errorMessage?: string;
}

export function Input({ label, name, placeholder, id, errorMessage, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <Container hasError={!!errorMessage}>
      <label htmlFor={inputId}>{ label }</label>
      <input className={errorMessage && 'has-error'} type='text' id={inputId} placeholder={placeholder} {...props} />
      {errorMessage && (
        <div className="info">
          <img src={infoIcon} alt='Informação'/>
          <span>{errorMessage}</span>
        </div>
      )}
    </Container>
  );
}
