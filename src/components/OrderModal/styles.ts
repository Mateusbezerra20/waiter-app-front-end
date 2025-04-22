import styled from "styled-components";

export const StatusContainer = styled.div`
  width: 416px;

  small {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  div {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }
    }

    .quantity {
      font-size: 0.8rem;
      color: #666;
      display: block;
      min-width: 0.25rem;
      margin-left: 0.75rem;
    }

    .product-details {
      margin-left: 0.25rem;
      strong {
        display: block;
      }
      span {
        font-size: 0.8rem;
        color: #666;
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    span {
      font-weight: 500;
      font-size: 0.8rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    width: 100%;
    background: #333;
    border: 0;
    border-radius: 48px;
    color: #fff;
    padding: 0.75 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .secondary {
    width: 100%;
    padding: 0.75rem 1.5rem;
    color: #d73035;
    background: transparent;
    border: 0;
    margin-top: 0.8rem;
  }
`;
