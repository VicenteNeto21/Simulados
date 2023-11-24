import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Div } from './styled';
import api from '../../api';
import history from '../../history';

export default function Home() {
  const [statement, setStatement] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correct, setCorrect] = useState("1");
  const [subject, setSubject] = useState('');
  const [type, setType] = useState('ABCD');
  const [subjectOpt, setSubjectOpt] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      statement,
      user: { id: JSON.parse(localStorage.getItem('id')) },
      subject: { id: Number(subject) },
      status: { id: 1 },
      type
    };
    console.log(localStorage.getItem('token'))
    const responseQuestionCreated = await api.post('/questions', data)
    console.log(responseQuestionCreated.data)
    const dataOptions = [{ option: option1, question: responseQuestionCreated.data.id },
    { option: option2, question: responseQuestionCreated.data.id },
    { option: option3, question: responseQuestionCreated.data.id },
    { option: option4, question: responseQuestionCreated.data.id }
    ]
    console.log(dataOptions)
    if (type === 'ABCD') {
      dataOptions.forEach(async option => await api.post('/options', option))
    }
    history.goBack()

  };
  async function getDataSub() {
    const { data } = await api.get(`/subjects`)
    if (data[0]) setSubject(data[0].id)
    console.log(data)
    setSubjectOpt(data)
  }
  useEffect(() => {
    getDataSub()
  }, [])
  return (
    <div>
      <Div>
        <form style={
          {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            color: 'black',
            width: '100%',
            fontFamily: 'Roboto, sans-serif'
          }
        }
        >
          <label
            style={
              {
                fontWeight: 'bolder',
                marginBottom: '10px',
                color: 'black'
              }
            }>Enunciado</label>

          <textarea
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
            style={
              {
                width: '100%',
                height: '100px',
                border: 'none',
                borderRadius: '12px',
                outline: 'none',
                fontSize: '20px',
                textAlign: 'center',
                border: '2px solid #ccc'
              }
            }
          />
          {type === 'ABCD' && <>
            <label
              style={
                {
                  fontWeight: 'bolder',
                  marginTop: '20px'
                }
              }>Opção 1</label>
            <input
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              style={
                {
                  width: '100%',
                  height: '40px',
                  border: 'none',
                  borderRadius: '12px',
                  marginTop: '10px',
                  outline: 'none',
                  fontSize: '20px',
                  textAlign: 'center',
                  border: '2px solid #ccc'
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
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              style={
                {
                  width: '100%',
                  height: '40px',
                  border: 'none',
                  borderRadius: '12px',
                  marginTop: '10px',
                  outline: 'none',
                  fontSize: '20px',
                  textAlign: 'center',
                  border: '2px solid #ccc'
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
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              style={
                {
                  width: '100%',
                  height: '40px',
                  border: 'none',
                  borderRadius: '12px',
                  marginTop: '10px',
                  outline: 'none',
                  fontSize: '20px',
                  textAlign: 'center',
                  border: '2px solid #ccc'
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
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              style={
                {
                  width: '100%',
                  height: '40px',
                  border: 'none',
                  borderRadius: '12px',
                  marginTop: '10px',
                  outline: 'none',
                  fontSize: '20px',
                  textAlign: 'center',
                  border: '2px solid #ccc'
                }
              }
            />
          </>}
          <div style={{ display: 'flex', width: '100%', maxWidth: '600px'}}>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label
                style={
                  {
                    fontWeight: 'bolder',
                    marginTop: '20px'
                  }
                }>Assunto</label>
              <select onChange={e => setSubject(e.target.value)} style={{ width: '50%' }}>
                {subjectOpt && subjectOpt.map(((sub, index) => {
                  if (index === 0) {

                    return (
                      <option value={sub.id} selected>{sub.name}</option>
                    )
                  } else {
                    return (
                      <option value={sub.id}>{sub.name}</option>
                    )
                  }
                }))}
              </select>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              <label
                style={
                  {
                    fontWeight: 'bolder',
                    marginTop: '20px'
                  }
                }>Tipo de questão</label>
              <select onChange={e => setType(e.target.value)} style={{ width: '50%' }}>
                <option value={'ABCD'} selected>ABCD</option>
                <option value={'ABERTA'}>ABERTA</option>
                <option value={'V/F'}>V/F</option>
              </select>
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button type="button" onClick={handleSubmit}
              style={
                {
                  width: '20%',
                  height: '40px',
                  border: 'none',
                  borderRadius: '12px',
                  background: '#F0D514',
                  marginTop: '30px',
                  color: '#FFF',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  backgroundColor: '#514AFF'
                }
              }>Criar</button>
          </div>
        </form>
      </Div>
    </div>
  )
}
