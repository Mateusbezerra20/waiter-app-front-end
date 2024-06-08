import { Outlet } from 'react-router-dom';

import { Container, ExitButton, Logo, Menu, Navigation } from './styles';
import { NavItem } from './Components/NavItem';
import { pagesIcons } from '../../components/icons/pageIconsMaps';

export function DashboardLayout() {

  const ExitIcon = pagesIcons.logoff;

  return (
    <Container>
      <Menu>
        <Logo><strong>W</strong>A</Logo>
        <Navigation>
          <NavItem icon="home" name="Home" to="/"/>
          <NavItem icon="order" name="Histórico" to="/orders" />
          <NavItem icon="menu" name="Cardápio" to="/menu" />
          <NavItem icon="users" name="Usuários" to="/users" />
        </Navigation>
        <Navigation>
          <NavItem icon="profile" name="Meu Perfil" to="profile" />
          <ExitButton>
            <ExitIcon />
            <span>Sair</span>
          </ExitButton>
        </Navigation>
      </Menu>

      <main>
        <Outlet />
      </main>
    </Container>
  );
}
