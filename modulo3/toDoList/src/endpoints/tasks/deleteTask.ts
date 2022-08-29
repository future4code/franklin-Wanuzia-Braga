import { Response, Request } from "express";
import connection from "../../connection";

const deleteTask =  async (req:Request, res:Response) => {
    try{
        await connection("TodoListTask")
        .delete()
        .where({
            id: req.params.id
        })
        res.send("Tarefa deletada com sucesso!")

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
};

export default deleteTask;