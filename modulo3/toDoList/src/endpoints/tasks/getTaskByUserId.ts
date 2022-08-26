import { Response, Request } from "express";
import connection from "../../connection";


/*não está entrando em nenhum if - retorna sempre o Array vazio, 
mesmo quando id é inexistente, vazio ou sem tasks.
Apenas o retorno correto das tasks de um usuário está ocorrendo.
*/
const getTaskByUserId =  async (req:Request, res:Response) => {
    
    try{
        const {id} = req.params;
        const  query = connection('TodoListTask')

        if(!id){
            res.send('Informe id do usuário.')
        };
        if (id) {
            query
            .select('u.nickname', 't.*')
            .from('TodoListUser as u')
            .join('TodoListTask as t', 'u.id', '=', 't.creator_user_id')
            .where('u.id',  '=',  `${id}`)        
        };
        const result = await query
        res.status(200).send({Tarefas: result})
        if(result?.length < 0){
            res.send({message: 'VocÊ não possui tarefas registradas.'})
        };
        
    }catch(error){
        console.log(error)
        res.status(500).send("Ocorreu um erro inesperado.")
    }
};


export default getTaskByUserId;
