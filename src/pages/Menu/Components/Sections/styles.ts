import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0px auto 32px;
  width: 1216px;
`;

export const SectionButton = styled.button<{ active: boolean }>`
  padding: 16px 40px;
  background-color: transparent;
  border: none;
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  ${({ active }) =>
    active &&
    css`
      background-color: #fff;
      color: #d73035;
      font-size: 14px;
      font-weight: 600;
    `}
`;
