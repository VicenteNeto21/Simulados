import React, { useContext, useState } from 'react';
import { Context } from '../../Context/AuthContext';
import history from '../../history';
import { Div } from './styled';
import simulaE from '../../assets/images/logopretaazul.png';

export default function SignUp() {
  const { handleSignUp } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    await handleSignUp(data);
  };

  const pushLogin = (e) => {
    e.preventDefault();
    history.push('/login');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Div>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            color: 'black',
            width: '300px', // Ajuste da largura do formulário
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img src={simulaE} alt="Logo" style={{ width: '280px' }} />
          </div>

          <label style={{ fontWeight: 'bolder', marginBottom: '5px', color: 'black', textAlign: 'left' }}>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              height: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              outline: 'none',
              fontSize: '14px',
              paddingLeft: '10px',
              marginBottom: '10px',
              padding: '5px', // Padding adicionado
            }}
            placeholder='Nome completo'
          />

          <label style={{ fontWeight: 'bolder', marginBottom: '5px', color: 'black', textAlign: 'left' }}>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              height: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              outline: 'none',
              fontSize: '14px',
              paddingLeft: '10px',
              marginBottom: '10px',
              padding: '5px', // Padding adicionado
            }}
            placeholder='Email'
          />

          <label style={{ fontWeight: 'bolder', marginBottom: '5px', color: 'black', textAlign: 'left' }}>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              height: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              outline: 'none',
              fontSize: '14px',
              paddingLeft: '10px',
              marginBottom: '10px',
              padding: '5px',
            }}
            placeholder='Senha'
          />

          <label style={{ fontWeight: 'bolder', marginBottom: '5px', color: 'black', textAlign: 'left' }}>Confirmação de senha</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            style={{
              width: '100%',
              height: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              outline: 'none',
              fontSize: '14px',
              paddingLeft: '10px',
              marginBottom: '10px',
              padding: '5px',
            }}
            placeholder='Confirme a sua senha'
          />

<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-light"
              style={{
                width: '100%',
                height: '40px',
                border: 'none',
                borderRadius: '5px',
                marginTop: '30px',
                fontWeight: 'bold',
              }}
            >
              Cadastrar
            </button>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={pushLogin}
              className="btn btn-dark"
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '5px',
                border: 'none',
                marginTop: '10px',
                fontWeight: 'bold',
                backgroundColor: '#514AFF'
              }}
            >
              Já tem uma conta? Faça login!
            </button>
          </div>
        </form>
      </Div>
    </div>
  );
}
