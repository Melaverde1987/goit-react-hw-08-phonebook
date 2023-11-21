import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Menu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <p className="username">
        Welcome, <b>{user.name}</b>
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Menu>
  );
};
