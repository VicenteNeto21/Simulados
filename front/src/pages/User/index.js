import React, { useState, useEffect } from 'react';
import api from '../../api';
import { FaUserAlt } from 'react-icons/fa';
import history from '../../history';
import LayoutMain from '../../components/LayoutMain';

export default function User() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const id = JSON.parse(localStorage.getItem('id'));

  useEffect(() => {
    async function getData() {
      if (id !== null) {
        const { data } = await api.get(`/users/${Number(id)}`);
        setName(data.name);
        setAvatar(data.avatar);
        setEmail(data.email);
      }
    }
    getData();
  }, [id]);

  async function send(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email
    };

    await api.put(`users/${JSON.parse(localStorage.getItem('id'))}`, data);

    history.push('/');
  }

  async function deleteAccount(e) {
    e.preventDefault();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    await api.delete(`users/${id}`);
    history.push('/login');
  }

  return (
    <>
      <LayoutMain />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
        <form style={{ width: '90%', maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
              <img
                src={avatar ? `http://localhost:5555/images/${avatar}` : require('../../assets/images/useravatar.png')}
                alt="avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vh' }}>
          <input
              style={{ width: '100%', height: '40px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Nome"
            />
            <input
              style={{ width: '100%', height: '40px', padding: '5px', marginTop: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="E-mail"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3vh' }}>
            <button className="btn btn-primary" style={{ width: '45%', height: '40px', borderRadius: '5px', marginRight: '10px', backgroundColor: '#514AFF' }} onClick={send}>
              Salvar
            </button>
            <button className="btn btn-danger" style={{ width: '45%', height: '40px', borderRadius: '5px' }} onClick={deleteAccount}>
              Excluir conta
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
