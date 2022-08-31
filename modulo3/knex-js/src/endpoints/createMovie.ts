import {Request, Response} from 'express';
import connection from '../connection';

//inserir filme na tabela Filmes
const NewMovie = async (
    id: string,
    nome: string,
    sinopse: string,
    data_lancamento: Date,
    playingLimitDate: Date
  ) => {
    await connection
      .insert({
        id: id,
        nome: nome,
        sinopse: sinopse,
        data_lancamento: data_lancamento,
        playing_limit_date: playingLimitDate,
      })
      .into("Filmes");
  };
  
  const createMovie = async (req: Request, res: Response) => {
    try {
      await NewMovie(
        req.body.id,
        req.body.nome,
        req.body.sinopse,
        req.body.data_lancamento,
        req.body.playingLimitDate
      );
  
      res.status(200).send({
        message: "Success"
      });
    } catch (err) {
      res.status(400).send({
        message: err,
      });
    }
  };

  export default createMovie;