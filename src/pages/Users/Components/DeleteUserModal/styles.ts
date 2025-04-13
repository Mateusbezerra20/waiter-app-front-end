import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 24px converted to rem assuming 16px base font size */
  width: 26rem; /* 416px converted to rem assuming 16px base font size */
  margin: 3rem 0 3rem;

  span {
    align-self: center;
  }

  label {
    color: #666666;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  button {
    width: fit-content;
  }
`;
