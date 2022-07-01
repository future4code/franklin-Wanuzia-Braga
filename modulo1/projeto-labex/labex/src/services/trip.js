import axios from 'axios';
import { BASE_URL } from "../constants/urls";

export const deleteTrip = (id) => {
    const token = localStorage.getItem('token')
    axios.delete(`${BASE_URL}trips/${id}`, {
        headers: {
            ContentType: 'application/JSON',
            auth: token
        }
    }).then((response) => {
        alert('Viagem deletada com sucesso!')
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
}
export const createTrip = (body, clear) => {
    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}trips`, body, {
        headers: {
            ContentType: 'application/json', 
            auth: token
        }
    }
    ).then((response) => {
            alert(`Viagem ${body.name} cadastrada com sucesso`);
           console.log(response)
            clear()
        }).catch((erro) => {
            alert('Erro ao cadastrar' + erro.message);
        });
};
