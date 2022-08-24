import {Request, Response} from 'express';
import connection from '../connection';

const getAllMovies = async (req:Request, res:Response) => {
    try {
    const result = await connection("Filmes")
    console.log(result);
    res.send(result)
    }catch(error) {
        console.log(error)
    }
};

export default getAllMovies;