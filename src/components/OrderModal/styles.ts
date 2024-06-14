import styled from 'styled-components';

export const StatusContainer = styled.div`
  small {
    font-size: 14px;
    opacity: 0.8;
  }

  div {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }
    }

    .quantity {
      font-size: 14px;
      color: #666;
      display: block;
      min-width: 20px;
      margin-left: 12px;
    }

    .product-details {
      margin-left: 4px;
      strong {
        display: block;
      }
      span {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

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
    padding: 12px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .secondary {
    width: 100%;
    padding: 12px 24px;
    color: #d73035;
    background: transparent;
    border: 0;
    margin-top: 14px;
  }
`;
