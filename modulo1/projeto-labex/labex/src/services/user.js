import axios from 'axios';
import { BASE_URL } from "../constants/urls";

export const submitCandidate = (body, clear, id) => {
    axios.post(`${BASE_URL}trips/${id}/apply`, body
    )
        .then((response) => {
            alert(`Candidato ${body.name} inscrito com sucesso`);
            console.log(response)
           clear()
        })
        .catch((erro) => {
            alert('Erro ao se inscrever' + erro.message);
            console.log(erro)
        });
};