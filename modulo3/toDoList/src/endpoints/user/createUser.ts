import { Response, Request } from "express";
import connection from "../../connection";

const createUser = async (req:Request, res:Response) => {
    const {name, nickname, email} = req.body;
    try{
        await connection("TodoListUser").insert({
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
        })
        //não está retornando esse erro. 
        // Retorna o erro do catch quando algum dos campos não foi preenchido.
        // if(!name || !nickname || !email){
        //     throw new Error
        //     res.send("Preencha todos os campos")
        // }
        res.status(201).send(`Usuário ${req.body.nickname} cadastrado com sucesso!`)

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
};

export default createUser;
