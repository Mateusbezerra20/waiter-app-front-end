import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  header {
    margin-top: 218px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: 500;
    }

    h1 {
      font-size: 32px;
      font-weight: 100;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 384px;
  margin-top: 40px;

  button {
    margin-top: 40px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
