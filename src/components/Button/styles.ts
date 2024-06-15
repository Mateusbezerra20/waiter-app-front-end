import styled, { css } from 'styled-components';

export const Container = styled.button<{ variant: string }>`
  width: 100%;
  background: #D73035;
  border: 0;
  border-radius: 48px;
  color: #fff;
  padding: 12px 24px;

  ${({ variant }) => variant === 'secondary' ? css`
    color: #D73035;
    background: transparent;
    padding: 12px 0px;
  ` : ''}

  :disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;
