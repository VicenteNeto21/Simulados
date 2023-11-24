import React from 'react';
import { Div, Container } from './style';
import { AiOutlineClose  } from 'react-icons/ai';
import history from '../../history';


export default function Loser(props){
  function redirect () {
    history.push('/')
  }
  function reload () {
    window.location.reload()
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
        <div style={{width: '60%', margin: '0 auto', marginTop: '9vh'}}>
          <h2 style={{borderRadius: '20px', background: '#E90101', flexDirection: 'column', padding: '10px', textAlign: 'center'}}>RESPOSTA ERRADA</h2>
          <div style={{display: 'flex', justifyContent: 'center', alignItens: 'center', flexDirection: 'column'}}>
            <div style={{ background: '#E90101', display: 'flex', justifyContent: 'center', alignItens: 'center', flexDirection: 'column', marginTop: '1vh', borderRadius: '20px', padding: '10px', textAlign: 'center'}}>
              <h3 style={{marginTop: '1vh', borderRadius: '20px'}}>QUE PENA</h3>
              <p style={{marginTop: '1vh'}}>{`${props.nickname}, você ganhou: R$ ${props.ganhos}`}</p>
              <p style={{marginTop: '1vh'}}>{`Parou na pergunta: ${props.round}`}</p>
            </div>
              <button onClick={reload} style={{marginTop: '1vh',
              height: '6vh',
              border: 'none',
              background: '#fff',
              borderRadius: '25px',
              cursor: 'pointer',
              color: '#E90101',
              fontSize: '20px',
              fontWeight: 'bold'}}>Tentar novamente</button>
          </div>
        </div>
      </Container>
    </Div>
  )
}