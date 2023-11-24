import React, { useEffect, useState } from "react";
import api from "../../api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import history from '../../history';


export function SubjectUpdate(props) {
    const [name, setName] = useState("");
    async function getData() {
        const { data } = await api.get(`/subjects/${props.match.params.id}`)
        console.log(data)
        setName(data.name)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name
        };
        await api.put('/subjects/' + props.match.params.id, data)

        history.goBack()

    };
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                <h1 style={{ color: '#000', margin: '10px' }}>Modificar assunto</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={
                    {
                        width: '30%',
                        height: '40px',
                        border: 'none',
                        borderRadius: '5px',
                        marginTop: '10px',
                        outline: 'none',
                        fontSize: '20px',
                        textAlign: 'center',
                        border: '2px solid #ccc'
                    }
                } />
                <button className='btn btn-primary' type="button" onClick={handleSubmit}
                    style={
                        {
                            width: '20%',
                            height: '40px',
                            border: 'none',
                            borderRadius: '5px',
                            marginTop: '30px',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            backgroundColor: '#514AFF'
                        }
                    }>Salvar</button>
            </div>
        </>
    )
}