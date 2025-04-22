import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 26rem;
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
