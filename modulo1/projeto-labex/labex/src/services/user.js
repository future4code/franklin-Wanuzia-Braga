import axios from 'axios';
import { BASE_URL } from "../constants/urls";

export const submitCandidate = (body, id) => {
    axios.post(`${BASE_URL}trips/${id}/apply`, body
    )
        .then((response) => {
            alert(`Candidato ${body.name} inscrito com sucesso`);
            console.log(response.request.responseURL)
          
        })
        .catch((erro) => {
            alert('Erro ao se inscrever' + erro.message);
            console.log(erro)
        });
};

// export const login = (body) => {
//   axios.post(`${BASE_URL}login`, body
//     ).then((response) => {
//         localStorage.setItem('token', response.data.token)
//         alert('logado')
       
//     }).catch((error) => {
//         alert('Deu erro ao logar! ' + error.response.data.message)
//     })       
// }
export const decideCandidate = (id, candidateId, body, setState) => {
    axios.put(`${BASE_URL}trips/${id}/candidates/${candidateId}/decide`, body, {
            headers: {
                ContentType: 'application/json',
                auth: localStorage.getItem('token')
            }
    }).then((resp) => {
        console.log(resp.data)
        setState()
   
    }).catch((error) => {
        alert('Deu errado!')
        console.log(error)
    })
}
