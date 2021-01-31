import React, { useState, useEffect } from 'react';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Styles
import { LoginContainer } from './login-styles';
import { userService } from '../../services/userService';
import { Link } from 'react-router-dom';

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
      userMsgStore.clearAlert();
      console.error(err.msg);
    }
  };
  return (
    <LoginContainer style={{ paddingTop: '200px' }}>
      <form onSubmit={handleSubmit} action="">
        Login
        <input onChange={handleInput} name="email" type="text" />
        <input onChange={handleInput} name="password" type="password" />
        <button>Login</button>
        <p>dont have go here</p>
        <Link to="/signup">Signup</Link>
      </form>
    </LoginContainer>
  );
});
