import { Response, Request } from "express";
import connection from "../../connection";

const getUserById =  async (req:Request, res:Response) => {
    try{
        const result = await connection("TodoListUser")
        .select("*")
        .where({
            id: req.params.id
        })
        // não está entrando no if para retornar o erro. Retornando array vazio.
        // if(!req.params.id){
        //     res.send("id não encontrado")
        // }
        console.log(result)
        res.send(result)

    }catch(error){
        console.log(error)
        res.status(500).send("Ocorreu um erro inesperado.")
    }
};

export default getUserById;