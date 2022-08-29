import { Response, Request } from "express";
import connection from "../../connection";

const setStatus =  async (req:Request, res:Response) => {
    
    try{
        const {id} = req.params;
        const {status} = req.body
        const  query = connection('TodoListTask')
        console.log(id)
        // if(!id){
        //     return res.status(400).send({ message: 'Informe id da tarefa e user_id.', id:id === undefined})
        // };
        // if (id) {
            query
            .update({
                stauts:status
            })
            .from('TodoListTask as t')
            .where('t.id',  '=',  `${id}`)
        // };
        const result = await query
        res.status(200).send({"Status da tarefa atualizado para": result})      
    }catch(error){
        console.log(error)
        res.status(500).send("Ocorreu um erro inesperado.")
    }
};

export default setStatus;