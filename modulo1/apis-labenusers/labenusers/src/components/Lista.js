import React, { useEffect, useState } from "react";
import axios from "axios";

const Lista = () => {
   const [listaUsuarios, setListaUsuarios] = useState([])
   const [inputNomeUsuario, setInputNomeUsuario] = useState('')

   const handleInputUser = (event) =>{
    setInputNomeUsuario(event.target.value)
}
   const exibeListaDeUsuarios = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'wanuzia-braga-franklin'
      }
    }).then((response) => {
      setListaUsuarios(response.data)
      console.log(response)
    }).catch((error) => {
      console.log(error.code)
    })};
      
    const exibeUsuarioPorNome = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name',
        {
            params:{
                name: inputNomeUsuario
            }
        }, 
        {
            headers: {
                Authorization: 'wanuzia-braga-franklin'
            }
        },
        ).then((response) => {
            setListaUsuarios(response.data)
            setInputNomeUsuario('')
            exibeListaDeUsuarios();
            console.log(inputNomeUsuario)
        }).catch(() => {
            alert(`Usuário ${inputNomeUsuario} não encontrado`)
        })
    }   
    const ListaDeUsuarios =  listaUsuarios.length > 0 ?  listaUsuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>
       }) : "Sem usuários cadastrados"
   
     useEffect(exibeListaDeUsuarios, [])

   return(
      <div>
         <h1>Usuários</h1>
         <input value={inputNomeUsuario} onChange={handleInputUser} placeholder='Insira o nome do usuário'/><button onClick={exibeUsuarioPorNome}>Procurar Usuário</button>
         {ListaDeUsuarios}
     </div>
   )
}

export default Lista