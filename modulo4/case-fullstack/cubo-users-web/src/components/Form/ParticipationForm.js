import React, {useState} from "react";
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import { useApp } from '../../context/AppContext'

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
             <TextField 
             name={'first_name'} 
             value={form.first_name}
             onChange={onChange}
             label={'First Name'}
             variant={"outlined"}
             fullWidth
             margin={'normal'}
             required
             />
            <TextField 
             name={'last_name'} 
             value={form.last_name}
             onChange={onChange}
             label={'Last Name'}
             variant={"outlined"}   
             fullWidth
             margin={'normal'}
             required
             />
            <TextField 
             name={'participation'} 
             value={form.participation}
             onChange={onChange}
             label={'Participation'}
             variant={"outlined"}
             fullWidth
             margin={'normal'}
             required
             type={'number'}
             />
             <Button
             type={'submit'}
             fullWidth
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