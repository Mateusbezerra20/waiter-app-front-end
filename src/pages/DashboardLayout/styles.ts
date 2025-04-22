import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.main`
  width: 100%;
  justify-self: stretch;
  padding: 0rem 2.5rem 0rem 8.75rem;
`;

export const Menu = styled.div`
  position: fixed;
  width: 6.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  margin-right: 36px;
`;

export const Navigation = styled.nav``;

export const Logo = styled.span`
  width: 100%;
  height: 6.75rem;

  font-size: 1.5rem;
  font-weight: 100;
  color: #666666;

  display: flex;
  justify-content: center;
  align-items: center;

  strong {
    font-weight: 800;
  }
`;

export const ExitButton = styled.button`
  width: 6.75rem;
  height: 6.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #666666;
  background: none;
  border: none;

  :hover {
    color: #d73035;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 140%;
  }
`;
