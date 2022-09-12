import { Response, Request } from "express";
import connection from "../../connection";

//não está retornando erro em caso de algum valor enviado vazio

const editUser =  async (req:Request, res:Response) => {
    try{
        await connection("TodoListUser").update({
            name:req.body.name,
            nickname:req.body.nickname,
            email:req.body.email
        }).where({
            id: req.params.id
        })
        res.send("Dados atualizados com sucesso!")

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
};

export default editUser;