import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: #D73035;
  border: 0;
  border-radius: 48px;
  color: #fff;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  :disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;
