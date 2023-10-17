import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
import { Button, Text, UserMenuWrap } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <UserMenuWrap>
      <img src={avatar} alt="avatar" />
      <Text>{user}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuWrap>
  );
}
