import styled from "styled-components";

export const Content = styled.div`
  margin-top: 3rem;
  width: 26rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  span {
    font-size: 1rem;
    font-weight: medium;
    line-height: 1.5;
    color: #666666;
  }
`;

export const CategoryInfo = styled.div`
  padding: 0.8rem;
  background: white;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 75px;

  color: #333;
  font-size: 0.8rem;
  line-height: 1.5;

  strong {
    font-size: 1.12rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 3rem;

  button {
    width: fit-content;
  }
`;
