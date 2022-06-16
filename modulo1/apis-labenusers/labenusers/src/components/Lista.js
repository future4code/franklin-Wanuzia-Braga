import React, { useState } from "react";

const Lista = () => {
   const [listaUsuarios, setListaUsuarios] = useState([])
   const ListaDeUsuarios = listaUsuarios.length > 0 ? listaUsuarios.name : 'Não há usuárioscadastrados'
   
   return(
      <div>
         <h1>Usuários</h1>
         
         {ListaDeUsuarios}
         <button>Procurar Usuário</button>
      </div>
   )
}

export default Lista