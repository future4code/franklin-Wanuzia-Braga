import {Request, Response} from 'express';
import connection from '../connection';


const updateActor = async (req:Request, res:Response) => {
    const salary:number = req.body.salary;
    const id:string = req.params.id
    try{
        await connection("Actor").update({
            salary: salary
        }).where({
            id: id
        })
        res.send('Success!')

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
};

export default updateActor;