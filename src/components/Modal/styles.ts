import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    scale: 0;
  }

  to {
    scale: 1;
  }
`;

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s;
`;

export const ModalBody = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  animation: ${scaleIn} 0.2s;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    strong {
      font-size: 1.5rem;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }
`;
