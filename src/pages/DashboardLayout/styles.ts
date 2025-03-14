import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.main`
  width: 100%;
  justify-self: stretch;
  padding-left: 108px;
`;

export const Menu = styled.div`
  position: fixed;
  width: 108px;
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
  height: 108px;

  font-size: 24px;
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
  width: 108px;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #666666;
  background: none;
  border: none;

  :hover {
    color: #d73035;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }
`;
