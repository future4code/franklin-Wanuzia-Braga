import { Request, Response } from "express";
import connection from "../connection";


const getActorByName = async (req:Request, res:Response) => {
    console.log('oi')
  try { 
      const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${req.params.name}"
    `);
    // return result
    console.log(result)
    res.status(200).send(result)
    
}catch(error){
    res.send(error)
    console.log(error)
}
  }

  export default getActorByName;


// const searchActor = async (name: string): Promise<Actor> => {
//     const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name = "${name}"
//     `)
//     return result[0][0]
//   }
  //o retorno está sendo vazio no postman. Why??? Por causa da url -- conflito por finais iguais
//   app.get("/actors/:name", async (req: Request, res: Response) => {
//     try {
//       const name:string = req.params.name
//       res.send(await searchActor(name))
//     } catch(error) {
//       console.log(error)
//       res.status(500).send("Unexpected error")
//     }
//   });
//   (async () => {
//     console.log(await searchActor("Taís Araújo") )
//   })()
// //Retorna corretamente o objeto do ator selecionado por nome
//   app.get("/actorsByName/:name", async (req:Request, res:Response) => {
//     const name = req.params.name
//     try {
//     const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//     `);
//     const response = result[0][0];
//     res.status(200).send(response)
//     }catch(error) {
//         console.log(error)
//     }
// })
  