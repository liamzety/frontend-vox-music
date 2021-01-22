import React, { useState } from 'react';
import { SignupContainer } from './signup-styles';
import { useStore } from '../../store/StoreContext';
import { useObserver } from 'mobx-react';

export const Signup: React.FC = ({ history }: any) => {
  const store = useStore();
  if (store.user.isSignedIn) history.push('/');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    // imgUrl:''
  });

  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = ev.currentTarget;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return useObserver(() => (
    <SignupContainer style={{ paddingTop: '200px' }}>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log('formData', formData);
        }}
      >
        <input onChange={handleChange} name="name" type="text" />
        <input onChange={handleChange} name="email" type="text" />
        <input onChange={handleChange} name="password" type="password" />
        {/* <input name="imgUrl" type="text" /> */}
        <button>SUBMIT</button>
      </form>
    </SignupContainer>
  ));
};
