import React, { useState } from 'react';
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
import { LoginContainer } from './login-styles';

export const Login: React.FC = observer(({ history }: any) => {
  const store = useStore();
  if (store.user.isSignedIn) history.push('/');

  return <LoginContainer style={{ paddingTop: '200px' }}>Login</LoginContainer>;
});
