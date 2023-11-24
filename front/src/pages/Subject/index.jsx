import React, { useEffect, useState } from "react";
import api from "../../api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiFillDelete, AiFillEdit, FaUserAlt } from "react-icons/ai";
import LayoutMain from "../../components/LayoutMain";


export function Subject() {
    const [subjects, setSub] = useState([]);
    async function getData() {
        const id = JSON.parse(localStorage.getItem('id'))
        const { data } = await api.get(`/subjects`)
        setSub(data)
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <LayoutMain />
            <h1 style={{ color: '#000', margin: '2vw' }}>Lista de assuntos</h1>
            <Link to='/subjects-add'>

            </Link>
            {subjects && subjects.map(subject => {
                return (
                    <div key={subject.id} style={{ margin: '10px auto', width: '80%' }}>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <div style={{ margin: '10px auto', color: 'red', fontSize: '1.2rem', display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                            <span style={{ color: '#000' }}>{subject.name}</span>
                            <div>
                                <Link to={'/subjects-update/' + subject.id} style={{ cursor: 'pointer', textDecoration: 'none', color: '#fff' }}>
                                    < AiFillEdit style={{ color: '#514AFF', cursor: 'pointer' }} size={25} />
                                </Link>
                                <AiFillDelete style={{ color: '#F20C63', cursor: 'pointer' }} size={25} onClick={async () => {
                                    await api.delete(`/subjects/${subject.id}`)
                                    window.location.reload()
                                }} />

                            </div>
                        </div>
                        <hr style={{ color: '#000' }} />
                    </div>
                );

            })}

            {/* adiconar o */}
            <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <Link to='/subjects-add'>
                    <button className='btn btn-primary' style={
                        {
                            height: '40px',
                            border: 'none',
                            borderRadius: '5px',
                            marginTop: '30px',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            margin: '2vw',
                            backgroundColor: '#514AFF',
                        }
                    }>Adicionar assunto</button>
                </Link>
            </div>
        </>
    )
}