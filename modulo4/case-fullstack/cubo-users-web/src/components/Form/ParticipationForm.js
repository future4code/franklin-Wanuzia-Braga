import React, {useState} from "react";
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import { useApp } from '../../context/AppContext'
import styled from "styled-components";
import media from '../../styles/media'


const TextField1 = styled(TextField)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media ${media.tablet} {
flex-direction: row;
}
`
const ParticipationForm = () => {
    const [form, onChange, clear] = useForm({first_name:'', last_name: '', participation: ''})
    const [isLoading, setIsLoading] = useState(false)
    const {fetchData} = useApp()

    const success = () => {
    clear()
    setIsLoading(false)
    } 
    const error = () => {
        setIsLoading(false)
       }

    const onSubmitForm = (e) => {
        console.log(form)
        e.preventDefault()
         fetchData(form, success, error);   
    }

    return(
           <div>
            <form onSubmit={onSubmitForm}>
             <TextField1 
             name={'first_name'} 
             value={form.first_name}
             onChange={onChange}
             label={'First Name'}
             variant={"outlined"}
             margin={'normal'}
             required
             />
            <TextField1 
             name={'last_name'} 
             value={form.last_name}
             onChange={onChange}
             label={'Last Name'}
             variant={"outlined"}   
             margin={'normal'}
             required
             />
            <TextField1 
             name={'participation'} 
             value={form.participation}
             onChange={onChange}
             label={'Participation'}
             variant={"outlined"}
             margin={'normal'}
             required
             type={'number'}
             />
             <Button
             type={'submit'}
             variant={'contained'}
             color={'primary'}
             margin={'normal'}
             >
                  {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Send</>}</Button>
            </form>
            </div>
             )
}

export default ParticipationForm