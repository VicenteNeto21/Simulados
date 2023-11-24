import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../history';

// componente que define como é feito o cadastro e logout da aplicação

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      api.defaults.headers.Authorization = `${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin(dataLogin) {
      const { data: { accessToken, id, name } } = await api.post('/users/login', dataLogin)
      api.defaults.headers.Authorization = `${accessToken}`;
      localStorage.setItem('id', JSON.stringify(id));
      localStorage.setItem('token', JSON.stringify(accessToken));
      localStorage.setItem('name', JSON.stringify(name));
      setAuthenticated(true);
      history.push('/');


  }
  async function handleSignUp(dataSignUp) {
    try {
      const { data: { accessToken, user, name } } = await api.post('/users', dataSignUp)
      api.defaults.headers.Authorization = `${accessToken}`;
      console.log(user.id)
      localStorage.setItem('name', JSON.stringify(name));
      localStorage.setItem('token', JSON.stringify(accessToken));
      localStorage.setItem('id', JSON.stringify(user.id));
      setAuthenticated(true);
      history.push('/');
    } catch (error) {
      console.log(error)
    }


  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout, handleSignUp };
}