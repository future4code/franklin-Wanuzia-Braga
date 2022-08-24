import {Request, Response} from 'express';
import connection from '../connection';

const searchMovie = async (req: Request, res: Response) => {
    try {
      const movies = await connection(req.query.query as string);
  
      res.status(200).send({
        movies: movies,
      });
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
  };

  export default searchMovie;