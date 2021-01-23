import React from 'react';
import { useLocalObservable } from 'mobx-react';
import { createStore } from './store';

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }: any) => {
  const store = useLocalObservable(createStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
