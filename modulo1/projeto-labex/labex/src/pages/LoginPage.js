import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackgroundHome } from '../components/BackgroundHome';
import { LoginForm } from "../components/LoginForm";
import { goToAdminTripsList } from "../routes/coordinator";
import useForm from "../hooks/useForm";
import axios from "axios";

const LoginContainer = styled.div`
display: flex;
width: screen;
`

export const LoginPage = () => {
    const navigate = useNavigate()
    const {form, onChange} = useForm({email:'', password:''})

    const onSubmitLogin = (e) => {
        e.preventDefault()
      axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wanuzia-braga-franklin/login`, form
        ).then((response) => {
            localStorage.setItem('token', response.data.token)
            goToAdminTripsList(navigate)

        }).catch((error) => {
            alert('Deu erro ao logar! ' + error.response.data.message)
        })       
    }

    return (
        <LoginContainer>
            <BackgroundHome />
            <LoginForm
                onSubmit={onSubmitLogin}
                nameMail='email'
                valueEmail={form.email}
                onChangeEmail={onChange}
                valuePassword={form.password}
                namePass='password'
                onChangePassword={onChange} 
            />
        </LoginContainer>
    )
}

