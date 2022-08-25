import { Response, Request } from "express";
import connection from "../../connection";

const getTaskById =  async (req:Request, res:Response) => {
    const id = req.params.id
    try{
        const result = await connection.raw(`
        SELECT 
            tlt.id as task_id, 
            tlt.title,
            tlt.description,
            tlt.limit_date,
            tlt.status,
            tlt.creator_user_id,
            tlu.nickname as creator
        FROM TodoListTask tlt  
        LEFT JOIN TodoListUser tlu  ON tlt.creator_user_id = "${id}"
        `);
        const dados = result
        res.status(200).send(dados)
    }catch(error){
        console.log(error)
        res.status(500).send("Ocorreu um erro inesperado.")
    }
};
/* 
O retorno está sendo com 'null' na coluna do creator. 
No banco de dados o retorno é correto, mas no postman não.
*/

export default getTaskById;

