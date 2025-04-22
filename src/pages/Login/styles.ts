import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  header {
    margin-top: 13.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1rem;
      font-weight: 500;
    }

    h1 {
      font-size: 2rem;
      font-weight: 100;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 24rem;
  margin-top: 2.5rem;

  button {
    margin-top: 2.5rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
