import { Request, Response } from "express";
import connection from "../connection";

const countByGender = async (req:Request, res:Response) => {
    const gender = req.params.gender
    try {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0];
    res.status(200).send(count)
    }catch(error) {
        console.log(error)
    }
  };

  export default countByGender
// const countActors = async (gender: string): Promise<number> => {
//     const result = await connection.raw(`
//       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
//     `);
//     const count = result[0][0].count;
//     return count;
//   };
//   app.get("/actors/:gender", async (req: Request, res: Response) => {
//     const gender:string = req.params.gender
//     const resposta:number = await countActors(gender)
//     try {
//     res.status(200).send(resposta)
//   } catch(error) {
//     console.log(error)
//     res.status(500).send("Unexpected error")
//   }
// });
// (async () => {
//   console.log(await countActors("male") )
// })()
// No exemplo abaixo,retorna JSON no Postman:
// app.get("/actorsNumberByGender/:gender", async (req:Request, res:Response) => {
//   try{
//      const [result] =  await connection("Actor")
//       .select()
//       .count()
//       .where({
//           gender: req.params.gender
//       })
//           res.status(200).send(result)
//   }catch(error) {
//       console.log(error)
//       res.status(500).send("An unexpected error ocurred")
//   }
// })
// requisição raw de getByGender, retorna JSON--- não aceita propriedade count do objeto na resposta.: 

