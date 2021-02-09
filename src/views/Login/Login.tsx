import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Services
import { userService } from '../../services/userService';
// Styles
import { LoginContainer, ActionsContainer } from './Login.styles';
// Cmps
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
      }, 4000);
      console.error(err.msg);
    }
  };
  const handleSubmitGuest = async () => {
    try {
      const user = await userService.login({
        email: 'guest@guest.com',
        password: 'guest',
      });
      userStore.setUser(user);
    } catch (err) {
      userMsgStore.alert(err);
      setTimeout(() => {
        userMsgStore.clearAlert();
      }, 4000);
      console.error(err.msg);
    }
  };
  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <div
          className="form-inner flex col space-evenly w100 h100"
          data-augmented-ui="tl-2-clip-y tr-2-clip-y br-2-clip-x bl-2-clip-x border"
        >
          <Text type="h2">Login</Text>
          <Input
            onChange={handleInput}
            placeholder="Email"
            name="email"
            type="email"
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
            <Button
              onClick={handleSubmitGuest}
              type="button"
              bgColor="blueMain"
              border="transparent"
            >
              Try as a Guest_
            </Button>
            <div>
              <Text type="p">Dont have an account yet? </Text>
              <Link to="/signup">
                <Text type="a">Signup</Text>
              </Link>{' '}
            </div>
          </ActionsContainer>
        </div>
      </form>
      <form className="shadow-form">
        <div
          className="form-inner flex col space-evenly w100 h100"
          data-augmented-ui="tl-2-clip-y tr-2-clip-y br-2-clip-x bl-2-clip-x border"
        >
          <Text type="h2">Login</Text>
          <Input onChange={() => {}} name="shadow" type="shadow" />
          <Input onChange={() => {}} name="shadow" type="shadow" />
          <ActionsContainer className="flex align-center col">
            <Button>Login_</Button>
            <Text type="h4" size="1rem">
              Or
            </Text>
            <Button type="button" bgColor="blueMain" border="transparent">
              Try as a Guest_
            </Button>
            <div>
              <Text type="p">Dont have an account yet? </Text>
              <Link to="/signup">
                <Text type="a">Signup</Text>
              </Link>{' '}
            </div>
          </ActionsContainer>
        </div>
      </form>
    </LoginContainer>
  );
});
