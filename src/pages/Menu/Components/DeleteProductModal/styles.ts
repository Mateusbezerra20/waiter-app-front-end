import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  p {
    color: #333333;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 1rem;
  width: 22rem;
  height: 7.7rem;
  border: 1px solid #cccccc;
  border-radius: 8px;
  margin: 1.5rem 2rem 3rem;
  overflow: hidden;

  img {
    width: 9.8rem;
    height: 7.7rem;
    object-fit: cover;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  span {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 500;
  }

  strong {
    font-size: 1rem;
    line-height: 120%;
    font-weight: 600;
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
