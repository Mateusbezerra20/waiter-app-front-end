import styled from "styled-components";

export const Container = styled.div<{ active: boolean }>`
  width: 6.75rem;
  height: 6.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #666666;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    color: #D73035;
  `}

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 140%;
  }

  div {
    width: 0.75rem;
    height: 2px;
    background-color: #d73035;
    border-radius: 4px;
    transition: width 100ms;

    ${({ active }) => !active && "width: 0px;"}
  }
`;
