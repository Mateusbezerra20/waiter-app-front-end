import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    color: #333333;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 16px;
  width: 352px;
  height: 123px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  margin: 24px 32px 48px;
  overflow: hidden;

  img {
    width: 158px;
    height: 123px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  span {
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;
  }

  strong {
    font-size: 16px;
    line-height: 120%;
    font-weight: 600px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    height: fit-content;
    width: 50%;
  }
`;
