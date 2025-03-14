import styled from "styled-components";

export const Container = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;

  label {
    font-size: 14px;
    line-height: 200%;
    font-weight: 500;
  }

  input {
    border: solid 1px;
    border-color: ${({ hasError }) => (hasError ? "#D73035" : "#CCC")};
    border-radius: 8px;
    padding: 16px 14px;
    font-size: 14px;
    font-weight: 500;
    outline: none;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 200%;
      color: #d73035;
    }
  }
`;
