import { Response, Request } from "express";
import connection from "../../connection";

const createUser = async (req:Request, res:Response) => {
    try{
        const {name, nickname, email} = req.body;
        const  query = connection('TodoListUser')
        if(name === null|| nickname === null || email === null){
            return res.status(400).json({ message: 'Informe dados do usuário.', name:name === null, nickname:nickname === null, email:email === null})
        }else{
            query
            .insert({
                id: Date.now().toString(),
                name: name,
                nickname: nickname,
                email: email
        }) 
        const result = await query
        res.status(201).send(`Usuário ${req.body.nickname} cadastrado com sucesso!`);
        return result
        };
               
       
    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred. Make sure all fields are filled.");
    }
};

export default createUser;
