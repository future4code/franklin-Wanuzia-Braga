import { Response, Request } from "express";
import connection from "../../connection";


const getTasksByStatus = async (req:Request, res:Response) => {
    let {status} = req.query
    try{
        if(!status) {
            status = ""
        };
        // if(status !== "to_do"){
        //     return res.status(400).json({ message: 'Informe status da tarefa.', status:status === "to_do"})}
       const result =  await connection("TodoListTask")
        .select('*')
        .from('TodoListTask as t')
        .where('t.status',  'LIKE',  `%${status}%`)
        
        res.send({Tasks: result})

    }catch(error){
        console.log(error)
        res.send(error)
    }
};

export default getTasksByStatus;