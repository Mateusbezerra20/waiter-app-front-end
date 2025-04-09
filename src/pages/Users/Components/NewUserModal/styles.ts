import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem 0px 3rem;
  width: 26rem;
`;

export const RadioInputGroup = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input[type="radio"] {
    accent-color: #d73035;
    width: 1.2rem;
    height: 1.2rem;
  }

  span {
    font-size: 0.8rem;
    line-height: 1.5;
    color: #666666;
  }

  span.selected {
    color: #d73035;
  }
`;
