import React from 'react';
import { Div, Container } from './style';


export default function Accept(props){

  function to () {
    props.setAccept(false)
  }

  return(
    <Div>
      
      <Container>
        <div style={{width: '60%', margin: '0 auto', marginTop: '9vh'}}>
          <h2 style={{borderRadius: '20px', background: '#09D135', flexDirection: 'column', padding: '10px', textAlign: 'center'}}>CERTA RESPOSTA! :)</h2>
          <div style={{display: 'flex', justifyContent: 'center', alignItens: 'center', flexDirection: 'column'}}>
            <div style={{ background: '#09D135', display: 'flex', justifyContent: 'center', alignItens: 'center', flexDirection: 'column', marginTop: '1vh', borderRadius: '20px', padding: '10px', textAlign: 'center'}}>
              <h3 style={{marginTop: '1vh', borderRadius: '20px'}}>PARABÉNS!</h3>
              <p style={{marginTop: '1vh'}}>{`${props.nickname}, você está com: R$ ${props.ganhos}`}</p>
              <p style={{marginTop: '1vh'}}>{`Próxima pergunta valerá: ${props.acertar}`}</p>
            </div>
              <button onClick={to} style={{marginTop: '1vh',
              height: '6vh',
              border: 'none',
              background: '#fff',
              borderRadius: '25px',
              cursor: 'pointer',
              color: '#09D135',
              fontSize: '20px',
              fontWeight: 'bold'}}>Próxima pergunta</button>
          </div>
        </div>
      </Container>
    </Div>
  )
}