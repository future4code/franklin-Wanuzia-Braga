import { Request, Response } from "express";
import connection from "../connection";
import { Actor } from '../types';

const getActorId = async (id: string): Promise<Actor> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
  // Assim a chamada funciona fora dos endpoints com .then()/.catch
  getActorId("001")
      .then(result => {
          console.log(result)
      })
      .catch(err => {
          console.log(err)
      });
  // Assim a chamada funciona fora dos endpoints com await
  (async () => {
    console.log(await getActorId("001") )
  })()

  // Ou então podemos chamá-la dentro de um endpoint
const getActorById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      res.send(await getActorId(id))
    } catch(error) {
      console.log(error)
      res.status(500).send("Unexpected error")
    }
  }

  export default getActorById;