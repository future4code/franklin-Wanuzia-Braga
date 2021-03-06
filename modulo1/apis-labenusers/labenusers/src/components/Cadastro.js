import React, { useState } from "react";
import axios from 'axios';

const Cadastro = () => {
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const body = {
                name: inputName,
                email: inputEmail,
            };
    const criaUsuario = () => {
                axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
            {
                headers: {
                    Authorization: 'wanuzia-braga-franklin'
                }
            }
        )
            .then((response) => {
                alert(`Usuário ${inputName} criado com sucesso`);
                setInputName('')
                setInputEmail('');
            })
            .catch(() => {
                alert('Erro ao criar usuário');
            });
    };

    const onChangeInputName = (event) => {
        setInputName(event.target.value);
    };
    const onChangeInputEmail = (event) => {
        setInputEmail(event.target.value)
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <input value={inputName} onChange={onChangeInputName} placeholder='nome'/>
            <input value={inputEmail} onChange={onChangeInputEmail} placeholder='email'/>
            <button onClick={criaUsuario} value='cadastro'>Criar Usuário</button> 
        </div>
    )
    }

export default Cadastro;