import { Request, Response } from "express";
import connection from "../connection";

const getAllActors = async (req:Request, res:Response) => {
    try {
        //  const result = await connection.raw(`select id, name from Actor`)
        
        //query builder
        const result = await connection("Actor")
        console.log(result);
        res.send(result)
        }catch(error) {
            console.log(error)
        }
}

export default getAllActors;