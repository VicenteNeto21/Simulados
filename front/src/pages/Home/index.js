import React from 'react';
import showmilhao from '../../assets/images/showmilhao.png'
import play from '../../assets/images/play.png'
import { Div } from './styled';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/LayoutMain';
import history from '../../history';
import GlobalStyle from '../../globalStyle';

export default function Home() {

  return (
    <>
    <LayoutMain/>
      <Div>
        <div>
        <Link to="/gerar-simulado" style={{textDecoration: 'none'}}>
          <button className='btn btn-primary' type="button" style={{
            width: '300px',
            height: '50px',
            border: 'none',
            borderRadius: '5px',
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#514AFF',
          }}><span>Gerar Simulado</span>
          </button>
          </Link>
        <Link to="/subjects" style={{textDecoration: 'none'}}>
          <button className='btn btn-primary' type="button" style={{
            width: '300px',
            height: '50px',
            border: 'none',
            borderRadius: '5px',
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#514AFF',
          }}><span>Assuntos</span>
          </button>
          </Link>
          <Link to="/questions" style={{textDecoration: 'none'}}>
            <button className='btn btn-primary' type="button" style={{
              width: '300px',
              height: '50px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#514AFF',
            }}>Perguntas</button>
          </Link>

        </div>
      </Div>

    </>
  );
}
