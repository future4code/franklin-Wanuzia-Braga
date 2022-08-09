import React from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt-br',ptBR)



const DateInput = (props) => {

    return (
     <DatePicker
        type="date"
        locale="pt-br" 
        dateFormat="dd/MM/yyyy"  
        selected={props.startdate} 
        onChange={props.onChange} 
        value={props.value}
        color='#000000'
        />
    );  
  }

  export default DateInput;