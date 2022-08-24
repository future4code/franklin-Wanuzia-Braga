import { Response, Request } from "express";
import connection from "../../connection";

const getUserById =  async (req:Request, res:Response) => {
    try{
        const result = await connection("TodoListUser")
        .where({
            id: req.params.id
        })
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