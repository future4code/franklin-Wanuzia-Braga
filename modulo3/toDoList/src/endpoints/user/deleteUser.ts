import { Response, Request } from "express";
import connection from "../../connection";

const deleteUser =  async (req:Request, res:Response) => {
    try{
        await connection("TodoListUser")
        .delete()
        .where({
            id: req.params.id
        })
        res.send("Usuário deletado com sucesso!")

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
};

export default deleteUser;