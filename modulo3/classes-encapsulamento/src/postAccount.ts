import { Request, Response } from 'express';
import { AccountController } from './AccountsController';
import { Transaction } from './Transaction';

/* como criar essa instancia? */
const postAccount = (req:Request, res:Response) => {

const {cpf, name, age, date, description, value} = req.body

const novaTransacao:Transaction = {
    description:description,
    value:value,
    date:date,
};
   try {
       const novaConta:AccountController = {
           cpf:cpf,
           name:name,
           age:age,
           description:description,
           value:value,
           date:date,
           newTransaction:novaTransacao,
            newAccounts:
  


           
       }

        res.send({Contas: novaConta})

    }catch(error){
        console.log(error)
        res.send(error)
    }
};

export default postAccount;
/*
*/ 
 