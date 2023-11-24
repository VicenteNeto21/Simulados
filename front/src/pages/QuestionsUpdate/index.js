import React, { useState } from 'react';
import Header from '../../components/Header';
import { Div } from './styled';
import api from '../../api';
import { useEffect } from 'react';
import history from '../../history';

export default function Update(props) {

  const [statement, setStatement] = useState({});
  const [option1, setOption1] = useState({});
  const [option2, setOption2] = useState({});
  const [option3, setOption3] = useState({});
  const [option4, setOption4] = useState({});
  const [correct, setCorrect] = useState("1");

  async function getData(){
    const {data} = await api.get(`/questions/${props.match.params.id}`)
    console.log(data)
    setStatement(data.statement)
    setOption1(data.options[0])
    setOption2(data.options[1])
    setOption3(data.options[2])
    setOption4(data.options[3])
    if(data.options[0].correct) document.querySelector('.option1').selected = true
    if(data.options[1].correct) document.querySelector('.option2').selected = true
    if(data.options[2].correct) document.querySelector('.option3').selected = true
    if(data.options[3].correct) document.querySelector('.option4').selected = true
  }
  useEffect(() => {
      getData()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      statement,
      user: {id: JSON.parse(localStorage.getItem('id'))},
      status: 1
    };
    const responseQuestionCreated = await api.put(`questions/${props.match.params.id}`, data)
    console.log(responseQuestionCreated.data)
    console.log(option1)
    const dataOptions = [{id: option1.id, option: option1.option, question: responseQuestionCreated.data.id}, 
      {id: option2.id, option: option2.option, question: responseQuestionCreated.data.id},
      {id: option3.id, option: option3.option, question: responseQuestionCreated.data.id},
      {id: option4.id, option: option4.option, question: responseQuestionCreated.data.id}
    ]
    dataOptions.forEach(async option => await api.put(`options/${option.id}`, option))
    history.goBack()
  };
  
  return (
    <div>
      <Div>
        <form style={
          {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            color: 'white',
            width: '100%',
            fontFamily: 'Roboto, sans-serif'
          }
        }
        >
          <label 
          style={
            {
              fontWeight: 'bolder',
              marginBottom: '10px'
          }
          }>Enunciado</label>

          <textarea 
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          style= {
            {
              width: '100%',
              height: '100px',
              border: 'none',
              borderRadius: '5px',
              outline: 'none',
              fontSize: '20px',
              textAlign: 'center'
          }
          }
          />
          <label 
          style={
            {
              fontWeight: 'bolder',
              marginTop: '20px'
          }
          }>Opção 1</label>
          <input 
          value={option1.option}
          onChange={(e) => setOption1({id: option1.id, option: e.target.value})}
          style= {
            {
              width: '100%',
              height: '40px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '10px',
              outline: 'none',
              fontSize: '20px',
              textAlign: 'center'
          }
          }
          />
          <label 
          style={
            {
              fontWeight: 'bolder',
              marginTop: '20px'
          }
          }>Opção 2</label>
          <input 
          value={option2.option}
          onChange={(e) => setOption2({id: option2.id, option: e.target.value})}
          style= {
            {
              width: '100%',
              height: '40px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '10px',
              outline: 'none',
              fontSize: '20px',
              textAlign: 'center'
          }
          }
          />
          <label 
          style={
            {
              fontWeight: 'bolder',
              marginTop: '20px'
          }
          }>Opção 3</label>
          <input 
          value={option3.option}
          onChange={(e) => setOption3({id: option3.id, option: e.target.value})}
          style= {
            {
              width: '100%',
              height: '40px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '10px',
              outline: 'none',
              fontSize: '20px',
              textAlign: 'center'
          }
          }
          />
          <label 
          style={
            {
              fontWeight: 'bolder',
              marginTop: '20px'
          }
          }>Opção 4</label>
          <input 
          value={option4.option}
          onChange={(e) => setOption4({id: option4.id, option: e.target.value})}
          style= {
            {
              width: '100%',
              height: '40px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '10px',
              outline: 'none',
              fontSize: '20px',
              textAlign: 'center'
          }
          }
          />
          <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <button  className='btn btn-primary' type="button" onClick={handleSubmit} 
            style={
              {
                width: '70%',
                height: '40px',
                border: 'none',
                borderRadius: '5px',
                marginTop: '30px',
                fontWeight: 'bold'
            }
            }>Enviar</button>
          </div>
        </form>
      </Div>
    </div>
  )
}
