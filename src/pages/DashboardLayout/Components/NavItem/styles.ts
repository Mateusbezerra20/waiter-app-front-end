import styled from "styled-components";

export const Container = styled.div<{ active: boolean }>`
  width: 108px;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #666666;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    color: #D73035;
  `}

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  div {
    width: 12px;
    height: 2px;
    background-color: #d73035;
    border-radius: 4px;
    transition: width 100ms;

    ${({ active }) => !active && "width: 0px;"}
  }
`;
