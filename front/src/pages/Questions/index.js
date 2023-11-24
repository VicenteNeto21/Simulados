import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Context } from '../../Context/AuthContext';
import Header from '../../components/Header';
import { DivAccept, DivNotAccept } from './styled';
import api from '../../api';
import LayoutMain from '../../components/LayoutMain';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState({});

  async function getData() {
    const id = JSON.parse(localStorage.getItem('id'));
    try {
      const { data } = await api.get(`/users/${Number(id)}`);
      setUser(data);
      setQuestions(data.questions);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(questions);

  return (
    <>
      <LayoutMain />
      <div>
        <div>
          <DivAccept>
            <div style={{ width: '100%', maxHeight: '40vh' }}>
              <h2 style={{ marginTop: '60px' }}>Lista de Perguntas</h2>
              {questions.map((question) => (
                <div key={question.id}>
                  <div
                    style={{
                      margin: '10px',
                      fontSize: '1.2rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ width: '40%' }}>
                      {question.statement.length > 50
                        ? question.statement.slice(0, 50).concat('...')
                        : question.statement}
                    </span>
                    {question.status.id === 1 && (
                      <span style={{ color: '#000' }}>Em análise</span>
                    )}
                    {question.status.id === 2 && (
                      <span style={{ color: 'green' }}>Aceita</span>
                    )}
                    {question.status.id === 3 && (
                      <span style={{ color: 'red' }}>Não aceita</span>
                    )}
                    <div>
                      {question.status.id === 3 && (
                        <Link
                          to={'/questions-update/' + question.id}
                          style={{
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'blue',
                          }}
                        >
                          <AiFillEdit
                            style={{
                              color: 'blue',
                              cursor: 'pointer',
                              marginLeft: '10px',
                            }}
                            size={25}
                          />
                        </Link>
                      )}
                      <AiFillDelete
                        style={{ color: 'red', cursor: 'pointer' }}
                        size={25}
                        onClick={async () => {
                          try {
                            await api.delete(`/questions/${question.id}`);
                            window.location.reload();
                          } catch (error) {
                            console.error('Error deleting question:', error);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </DivAccept>
          {/* colocar abaixo daqui */}
          <div
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <Link to='/questions-add'>
            <button
              className='btn btn-primary' // Se essa classe não está sendo reconhecida, substitua por estilos locais
              style={{
                height: '40px',
                border: 'none',
                borderRadius: '5px',
                marginTop: '230px',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                backgroundColor: '#514AFF',
                color: '#fff',
                padding: '0 20px',
                cursor: 'pointer',
              }}
            >
              Adicionar Perguntas
            </button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
