import styled from "styled-components";

export const Content = styled.div`
  margin-top: 48px;
  width: 416px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  span {
    font-size: 16px;
    font-weight: medium;
    line-height: 1.5;
    color: #666666;
  }
`;

export const CategoryInfo = styled.div`
  padding: 14px;
  background: white;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 75px;

  color: #333;
  font-size: 14px;
  line-height: 1.5;

  strong {
    font-size: 18px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 48px;

  button {
    width: fit-content;
  }
`;
