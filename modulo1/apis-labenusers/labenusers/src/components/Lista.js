import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const ListaUsers = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const BotaoDeletar = styled.button`
margin-left: 10px;
color: black;
background-color: orange;
`
const Lista = () => {
  const [listaUsuarios, setListaUsuarios] = useState([])
  const [inputNomeUsuario, setInputNomeUsuario] = useState('')
  const [usuarioSelecionado, setUsuarioSelecionado] = useState('')

  const handleInputUser = (event) => {
    setInputNomeUsuario(event.target.value)
  }

  const exibeListaDeUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'wanuzia-braga-franklin'
      }
    }).then((response) => {
      setListaUsuarios(response.data)
      // console.log(response)
    }).catch((error) => {
      alert(error.code)
    })
  };

  // const exibeUsuarioPorNome = (name) => {
  //   axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?${name}`,
  //     {
  //       headers: {
  //         Authorization: 'wanuzia-braga-franklin'
  //       }
  //     },
  //     {
  //       params: {
  //         name: inputNomeUsuario
  //       }
  //     },
  //   ).then((response) => {
  //     setUsuarioSelecionado(inputNomeUsuario);
  //     setInputNomeUsuario('');
  //     exibeListaDeUsuarios();
  //    }).catch((err) => {
  //     console.log(err)
  //     alert(`Usuário ${inputNomeUsuario} não encontrado`)
  //   })
  // }

  const deletaUsuario = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'wanuzia-braga-franklin'
      }
    }).then((response) => {
      alert(`Usuário deletado com sucesso`)
      exibeListaDeUsuarios()
    }).catch((err) => {
      alert(err.message)
    })

  }

  const ListaDeUsuarios = listaUsuarios.map((usuario) => {
    return (
      <ListaUsers>
        <p key={usuario.id}>{usuario.name}</p>
        <BotaoDeletar onClick={() => { setUsuarioSelecionado(usuario); deletaUsuario(usuario.id); }}>X</BotaoDeletar>
      </ListaUsers>
    )

  })
  
  useEffect(() => {
    exibeListaDeUsuarios()
  }, [])

  return (
    <div>
      <h1>Usuários</h1>
      {/* <input value={inputNomeUsuario} onChange={handleInputUser} placeholder='Insira o nome do usuário' /> */}
      {/* <button onClick={() => { setUsuarioSelecionado(inputNomeUsuario); exibeUsuarioPorNome(usuarioSelecionado); }}>Procurar Uusário</button> */}
      {ListaDeUsuarios}
    </div>
  )
}

export default Lista