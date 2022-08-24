import {Request, Response} from 'express';
import connection from '../connection';

const createActor=  async (req:Request, res:Response):Promise<void> => {
    const {name, salary, dateOfBirth, gender} = req.body
    try{
        await connection("Actor")
        .insert({
            id: Date.now().toString(),
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender
        })
            res.status(201).send("Success!")
    }catch(error) {
        console.log(error)
        res.status(500).send("An unexpected error ocurred")
    }
};

export default createActor;



//Neste formato não consigo enviar uma mensagem de sucesso como resposta na requisição de post.
// const createActor = async (
//     id: string,
//     name: string,
//     salary: number,
//     dateOfBirth: Date,
//     gender: string
//   ): Promise<void> => {
//     await connection
//       .insert({
//         id: id,
//         name: name,
//         salary: salary,
//         birth_date: dateOfBirth,
//         gender: gender
//       })
//       .into("Actor");
//   };
//   app.post("/actor",async (req:Request, res:Response) => {
//       try{
//         const {name, salary, dateOfBirth, gender} = req.body
//         const id = ` ${Date.now().toString()}`
//         res.status(201).send(await createActor(id, name, salary, dateOfBirth, gender))
//         console.log("Success!")
//       }catch(error){
//         res.send(error)
//       }
//   })
