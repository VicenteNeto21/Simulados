import React, { useContext, useState } from 'react';
import { Context } from '../../Context/AuthContext';
import logopretaazul from '../../assets/images/logopretaazul.png';
import history from '../../history';

export default function Login() {
  const { handleLogin } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      await handleLogin(data);
    } catch (error) {
      setValid(false);
    }
  };

  const pushSignUp = (e) => {
    e.preventDefault();
    history.push('/sign-up');
  };

  function write() {
    setValid(true);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55vh' }}>
      <div style={{ width: '300px', textAlign: 'center' }}>
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <img src={logopretaazul} alt="Logo" style={{ width: '30vh', marginBottom: '20px' }} />
        </div>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            color: 'black',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
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
            onKeyUp={write}
            placeholder="Email"
          />
          {/* Campo de senha */}
          <label style={{ fontWeight: 'bolder', marginBottom: '5px', color: 'black', textAlign: 'left', marginTop: '30px' }}>Senha</label>
          <input
            type="password"
            onKeyUp={write}
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
              padding: '5px', // Padding adicionado
            }}
            placeholder="Senha"
          />

          {!valid && (
            <div style={{ color: 'red', marginTop: '10px' }}>Usuário ou senha inválidos.</div>
          )}
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
              fontWeight: 'bold'
            }}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={pushSignUp}
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
            Cadastrar-se
          </button>
        </form>
      </div>
    </div>
  );
}
