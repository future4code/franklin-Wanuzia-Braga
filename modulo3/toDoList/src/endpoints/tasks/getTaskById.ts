import { Response, Request } from "express";
import connection from "../../connection";

const getTaskById =  async (req:Request, res:Response) => {
    
    try{
        const {id, taskId} = req.params;
        const  query = connection('TodoListTask')
        console.log(id, taskId)
        if(id === undefined|| taskId === undefined){
            return res.status(400).send({ message: 'Informe id da tarefa e user_id.', id:id === undefined, taskId:taskId === undefined})
        };
        if (id) {
            query
                .select( 't.*', 'u.nickname as user')
                .from('TodoListTask as t')
                .join('TodoListUser as u', 't.creator_user_id', '=', 'u.id')
                .where('t.id',  '=',  `${taskId}`)
        };
        const result = await query
        res.status(200).send({Tarefa: result})

        if(result?.length < 0){
            return res.send({message: 'Tarefa não encontrada.'})
        };
        
    }catch(error){
        console.log(error)
        res.status(500).send("Ocorreu um erro inesperado.")
    }
};

export default getTaskById;
/* 
O retorno da raw abaixo está sendo com 'null' na coluna do nickname. 
No banco de dados o retorno é correto, mas no postman não.
*/
   // const result = await connection.raw(`
        // SELECT 
        //     tlt.id as task_id, 
        //     tlt.title,
        //     tlt.description,
        //     tlt.limit_date,
        //     tlt.status,
        //     tlt.creator_user_id,
        //     tlu.nickname as creator
        // FROM TodoListTask tlt  
        // LEFT JOIN TodoListUser tlu  ON tlt.creator_user_id = "${id}"
        // `);