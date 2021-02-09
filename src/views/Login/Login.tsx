import React, { useState, useEffect } from 'react';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Styles
import { LoginContainer, ActionsContainer } from './Login.styles';
import { userService } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Input } from '../../aux-cmps/Input/Input';
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';

export const Login: React.FC = observer(({ history }: any) => {
  const { userStore, userMsgStore } = useStore();
  const [userCred, setUserCred] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (userStore.user.isSignedIn) history.push('/');
  }, [history, userStore.user.isSignedIn]);
  const handleInput = (ev: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = ev.currentTarget;
    setUserCred((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      const user = await userService.login(userCred);
      userStore.setUser(user);
    } catch (err) {
      userMsgStore.alert(err);
      setTimeout(() => {
        userMsgStore.clearAlert();
      }, 3000);
      console.error(err.msg);
    }
  };
  return (
    <LoginContainer>
      <form onSubmit={handleSubmit} action="">
        <Text type="h2">Login</Text>
        <Input
          onChange={handleInput}
          placeholder="Email"
          name="email"
          type="text"
        />
        <Input
          onChange={handleInput}
          placeholder="Password"
          name="password"
          type="password"
        />
        <ActionsContainer className="flex align-center col">
          <Button type="submit">Login_</Button>
          <Text type="h4" size="1rem">
            Or
          </Text>
          <Button type="button" bgColor="blueMain" border="transparent">
            Try as a Guest_
          </Button>
          <Text type="p">
            Dont have an account yet?{' '}
            <Link to="/signup">
              <Text type="a">Signup</Text>
            </Link>{' '}
          </Text>
        </ActionsContainer>
      </form>
    </LoginContainer>
  );
});
