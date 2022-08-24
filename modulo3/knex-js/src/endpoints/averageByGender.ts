import {Request, Response} from 'express';
import connection from '../connection';

//só retorna o objeto
const averageByGender = async (req:Request, res:Response) => {
    const gender:string = req.params.gender
    try{
       const result =  await connection("Actor")
        .select()
        .avg("salary as average")
        .where({
            gender: gender
        })
        const media = result[0]
            res.status(200).send(media)
    }catch(error) {
        console.log(error)
        res.status(501).send("An unexpected error ocurred")
    }
};

export default averageByGender;