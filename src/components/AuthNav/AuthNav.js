import { NavLink } from 'react-router-dom';
import { Menu } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Menu>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Menu>
  );
};
