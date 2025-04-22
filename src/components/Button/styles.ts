import styled, { css } from "styled-components";

export const Container = styled.button<{ variant: string }>`
  display: flex;
  justify-content: center;
  gap: 1.12rem;
  align-items: center;
  width: 100%;
  background: #d73035;
  border: 0;
  border-radius: 3rem;
  color: #fff;
  padding: 0.75rem 1.5rem;
  box-sizing: border-box;

  ${({ variant }) =>
    variant === "secondary"
      ? css`
          color: #d73035;
          background: transparent;
          width: fit-content;
          padding: 0.75rem 0px;
        `
      : ""}

  :disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  span {
    font-size: 1rem;
    font-weight: 600;
  }
`;
