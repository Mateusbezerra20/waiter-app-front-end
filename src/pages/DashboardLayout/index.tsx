import { Outlet } from "react-router-dom";

import {
  Container,
  Content,
  ExitButton,
  Logo,
  Menu,
  Navigation,
} from "./styles";
import { NavItem } from "./Components/NavItem";
import { pagesIcons } from "../../components/icons/pageIconsMaps";
import { LogoutConfirmModal } from "../../components/LogoutConfirmModal";
import { useState } from "react";

export function DashboardLayout() {
  const [isLogoutConfirmModalOpen, setIsLogoutConfirmModalOpen] =
    useState(false);
  const ExitIcon = pagesIcons.logoff;

  function openLogoutConfirmModal() {
    setIsLogoutConfirmModalOpen(true);
  }

  function closeLogoutConfirmModal() {
    setIsLogoutConfirmModalOpen(false);
  }

  return (
    <>
      {isLogoutConfirmModalOpen && (
        <LogoutConfirmModal onClose={closeLogoutConfirmModal} />
      )}
      <Container>
        <Menu>
          <Logo>
            <strong>W</strong>A
          </Logo>
          <Navigation>
            <NavItem icon="home" name="Home" to="/" />
            <NavItem icon="order" name="Histórico" to="/orders" />
            <NavItem icon="menu" name="Cardápio" to="/menu" />
            <NavItem icon="users" name="Usuários" to="/users" />
          </Navigation>
          <Navigation>
            <NavItem icon="profile" name="Meu Perfil" to="profile" />
            <ExitButton onClick={openLogoutConfirmModal}>
              <ExitIcon />
              <span>Sair</span>
            </ExitButton>
          </Navigation>
        </Menu>

        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
