import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context/AuthContext';
import Header from '../../components/Header';
import LayoutMain from '../../components/LayoutMain';
import { Link } from 'react-router-dom';
import api from '../../api';
import { Margin, Resolution, usePDF } from 'react-to-pdf';

export default function Simulated() {
  const { toPDF, targetRef } = usePDF({ filename: 'simulado.pdf', page: { margin: Margin.LARGE }, resolution: Resolution.HIGH, overrides: { pdf: { unit: 'em' } } });
  const [subject, setSubject] = useState('')
  const [subjects, setSubjects] = useState([])
  const [questions, setQuestions] = useState([])
  const [questionsFilter, setQuestionsFilter] = useState([])
  const [questionsSelected, setQuestionsSelected] = useState([])

  const visualizarImpressao = () => {
    toPDF()
  }

  async function getData() {
    const id = JSON.parse(localStorage.getItem('id'))
    const { data } = await api.get(`/questions`)
    setQuestions(data)
    setQuestionsFilter(data)
  }
  async function getSubjects() {
    const { data } = await api.get(`/subjects`)
    setSubjects(data)
  }

  function handleSubject(sub) {
    setSubject(sub)
    const filtered = questions.filter(question => question.subject.id == sub)
    console.log(sub)
    console.log(questions)
    setQuestionsFilter(filtered)
  }
  useEffect(() => {
    getData()
    getSubjects()
  }, []);


  return (

    <div style={{ padding: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
      <LayoutMain />
      <div style={{ display: 'flex', flexDirection: 'column', width: '70%', marginBottom: '1vh', marginTop: '2vh', }}>
        <select
          onChange={e => handleSubject(e.target.value)}
          style={{
            width: '30%',
            marginBottom: '10px',
            borderRadius: '5px',
            padding: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#fff',
            color: '#333',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        >
          <option disabled selected>Selecione o assunto</option>
          {subjects &&
            subjects.map(sub => (
              <option key={sub.id} value={sub.id}>
                {sub.name}
              </option>
            ))}
        </select>

        {/* CAIXA DE MENSAGEM DAS PERGUNTAS */}

        <select
          onChange={e => {
            const cp = [...questionsSelected]
            const exist = cp.filter(q => q.id === JSON.parse(e.target.value).id)
            if (!(exist.length > 0)) {
              cp.push(JSON.parse(e.target.value))
              setQuestionsSelected(cp)
            }
          }}
          style={{
            width: '100%',
            height: '20vh',
            borderRadius: '5px',
            padding: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#fff',
            color: '#333',
            outline: 'none',
            boxSizing: 'border-box',
            overflowY: 'scroll',
            cursor: 'pointer',
          }}
          multiple
        >
          {questionsFilter &&
            questionsFilter.map(sub => (
              <option key={sub.id} value={JSON.stringify(sub)}>
                {sub.statement}
              </option>
            ))}
        </select>

        {/* FIM DA CAIXA DE PERGUNTAS */}



      </div>
      <div style={{ backgroundColor: '#fff', width: '100%' }} ref={targetRef}>
        {questionsSelected.length > 0 &&
          <>
            <h1 style={{ textAlign: 'center' }}>Simulado</h1>
            <p style={{ borderBottom: '1px solid #000', fontSize: '1.5em', fontWeight: '600' }}>Nome: </p>
            {questionsSelected.map((question, index) => {
              if (question.type === 'ABCD') question.options = question.options.sort((a, b) => a.option.at(0).localeCompare(b.option.at(0)))
              return (
                <div key={question.id} style={{ marginBottom: '3vh' }} >
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <div style={{ margin: '10px', fontSize: '1.5em' }}>
                    <span style={{ width: '40%', color: '#000', fontSize: '1.5em', fontWeight: '500' }}>{index + 1 + ')'} {question.statement}</span>
                    {question.type === 'ABCD' && question.options.map(opt => (
                      <div style={{ marginLeft: '2vw' }}>

                        <span style={{ fontSize: '1.3em', fontWeight: '400' }}>{opt.option}</span>
                      </div>
                    ))}
                    {question.type === 'V/F' &&
                      <>
                        <div style={{ marginLeft: '2vw' }}>
                          <span style={{ fontSize: '1.3em', fontWeight: '400' }}>{`( ) Verdadeiro`}</span>
                        </div>
                        <div style={{ marginLeft: '2vw' }}>
                          <span style={{ fontSize: '1.3em', fontWeight: '400' }}>{`( ) Falso`}</span>
                        </div>
                      </>
                    }
                  </div>
                </div>
              );

            })}
          </>
        }
      </div>
      {questionsSelected.length > 0 && <button className="btn btn-dark" style={{ marginTop: '1vh' }} onClick={visualizarImpressao}>
        Baixar simulado em PDF
      </button>}

    </div>

  );
}
