import {Request, Response} from 'express';
import connection from '../connection';

//exibe mensagem de sucesso mas não deleta 
const deleteActor = async (req:Request, res:Response) => {
    const id:string = req.params.id
    try{
       const linhasDeletadas = await connection("Actor")
        .delete()
        .where({
            id: id
        })
        // if(linhasDeletadas === 0){
        //     throw new Error
        // }
        res.send("Success!")
    
    }catch(error){
    console.log(error)
    res.status(500).send('Erro no delete')
    }
    };

    export default deleteActor;