import { Response, Request } from "express";
import connection from "../../connection";

const createUser = async (req:Request, res:Response) => {
    const {name, nickname, email} = req.body;
    try{
        if(!name || !nickname || !email){
            res.statusCode = 422
           
            throw new Error("Preencha todos os campos")
        }
        await connection("TodoListUser").insert({
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
     
    })        
        res.status(201).send(`Usuário ${req.body.nickname} cadastrado com sucesso!`)

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
};

export default createUser;
