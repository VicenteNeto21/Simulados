import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import history from '../../history';
import { Div, Container } from './style';


export default function Win(props){

  function to () {
    window.location.reload()
  }
  function redirect () {
    history.push('/')
  }
  return(
    <Div>
      
      <Container>
      <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', padding: '10px'}}><AiOutlineClose
        onClick={redirect}
        size={30} style={{        
          color: '#fff',
          backgroundColor: 'transparent', 
          cursor: 'pointer'}}/></div>
        <div style={{width: '60%', margin: '0 auto', marginTop: '3vh'}}>
          <h2 style={{borderRadius: '20px', background: '#cccc00', flexDirection: 'column', padding: '10px', textAlign: 'center'}}>VITÓRIA!</h2>
          <div style={{display: 'flex', justifyContent: 'center', alignItens: 'center', flexDirection: 'column'}}>
            <div style={{ background: '#cccc00', display: 'flex', justifyContent: 'center', alignItens: 'center', flexDirection: 'column', marginTop: '1vh', borderRadius: '20px', padding: '10px', textAlign: 'center'}}>
              <h3 style={{marginTop: '1vh', borderRadius: '20px', textTransform:'uppercase'}}>PARABÉNS {props.nickname}!</h3>
              <p style={{marginTop: '1vh', textTransform:'uppercase'}}>{`Você ganhou o prêmio máximo de R$ 1 milhão de reais`}</p>
            </div>
              <button onClick={to} style={{marginTop: '1vh',
              height: '6vh',
              border: 'none',
              background: '#fff',
              borderRadius: '25px',
              cursor: 'pointer',
              color: '#cccc00',
              fontSize: '20px',
              fontWeight: 'bold'}}>Jogar novamente</button>
          </div>
        </div>
      </Container>
    </Div>
  )
}