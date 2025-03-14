import styled from "styled-components";

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }
`;
