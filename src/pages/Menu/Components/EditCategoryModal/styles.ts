import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 25rem;
  margin-top: 3rem;

  button {
    align-self: flex-end;
    width: fit-content;
    margin-top: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 100%;
`;

export const EmojiInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  span {
    font-size: 0.8rem;
    line-height: 200%;
    font-weight: 500;
  }
`;
