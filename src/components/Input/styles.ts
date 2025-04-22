import styled from "styled-components";

export const Container = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;

  label {
    font-size: 0.8rem;
    line-height: 200%;
    font-weight: 500;
  }

  input {
    border: solid 1px;
    border-color: ${({ hasError }) => (hasError ? "#D73035" : "#CCC")};
    border-radius: 8px;
    padding: 1rem 0.8rem;
    font-size: 0.8rem;
    font-weight: 500;
    outline: none;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 1.25rem;
      height: 1.25rem;
    }

    span {
      font-size: 0.8rem;
      font-weight: 500;
      line-height: 200%;
      color: #d73035;
    }
  }
`;
