import React, { useEffect, useState } from "react";
import axios from "axios";

const Lista = () => {
   const [listaUsuarios, setListaUsuarios] = useState([])
   
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
    })}

    const ListaDeUsuarios =  listaUsuarios.length > 0 ?  listaUsuarios.map((usuario) => {
        return <p key={usuario.id}>{usuario.name}</p>
       }) : "Sem usuários cadastrados"
       
     useEffect(exibeListaDeUsuarios, [])

   return(
      <div>
         <h1>Usuários</h1>
        {ListaDeUsuarios}
         {/* <input value={inputUser} onChange={handleInputUser}/><button onClick={exibeListaDeUsuarios}>Procurar Usuário</button> */}
      </div>
   )
}

export default Lista