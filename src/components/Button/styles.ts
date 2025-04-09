import styled, { css } from "styled-components";

export const Container = styled.button<{ variant: string }>`
  display: flex;
  justify-content: center;
  gap: 18px;
  align-items: center;
  width: 100%;
  background: #d73035;
  border: 0;
  border-radius: 48px;
  color: #fff;
  padding: 12px 24px;
  box-sizing: border-box;

  ${({ variant }) =>
    variant === "secondary"
      ? css`
          color: #d73035;
          background: transparent;
          width: fit-content;
          padding: 12px 0px;
        `
      : ""}

  :disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;
