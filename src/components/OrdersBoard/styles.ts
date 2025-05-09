import styled from "styled-components";

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  // Estilização alinhada, muito top
  // Apenas para headers que são filhos diretos de Board
  > header {
    padding: 0.5rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  button {
    width: 100%;
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 8rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    outline: none;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.8rem;
      color: #666;
    }

    // Toda vez que ouver um button acima, dê uma margen-top de 24px
    & + button {
      margin-top: 1.5rem;
    }
  }
`;
