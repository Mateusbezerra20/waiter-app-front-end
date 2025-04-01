import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 408px;
  margin-top: 48px;

  button {
    align-self: flex-end;
    width: fit-content;
    margin-top: 16px;
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
    font-size: 14px;
    line-height: 200%;
    font-weight: 500;
  }
`;
