import { NavLink } from 'react-router-dom';
import { pagesIcons } from '../../../../components/icons/pageIconsMaps';
import { Container } from './styles';

interface NavItemProps {
  icon: string;
  name: string;
  to: string;
}

export function NavItem({ icon, name, to }: NavItemProps) {
  const Icon = pagesIcons[icon as keyof (typeof pagesIcons)];

  return (
    <NavLink to={to} style={{textDecoration: 'none'}}>
      {({ isActive }) => (
        <Container active={isActive}>
          <Icon />
          <span>{ name }</span>
          <div></div>
        </Container>
      )}
    </NavLink>
  );
}
