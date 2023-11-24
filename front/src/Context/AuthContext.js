import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';
const Context = createContext();

//componente que exporta todos os contextos da aplicação

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleLogout, handleSignUp
  } = useAuth();
  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout, handleSignUp }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
