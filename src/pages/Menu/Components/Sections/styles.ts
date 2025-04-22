import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0px auto 2rem;
  width: 100%;
`;

export const SectionButton = styled.button<{ active: boolean }>`
  padding: 1rem 2.5rem;
  background-color: transparent;
  border: none;
  color: #666666;
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;

  ${({ active }) =>
    active &&
    css`
      background-color: #fff;
      color: #d73035;
      font-size: 0.8rem;
      font-weight: 600;
    `}
`;
