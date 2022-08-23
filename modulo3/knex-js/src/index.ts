import {Request, Response} from 'express';
import app from './app';
import connection from './connection';
import { Actor } from './types';


app.get("/actors", async (req:Request, res:Response) => {
    try {
    //  const result = await connection.raw(`select id, name from Actor`)
    
    //query builder
    const result = await connection("Actor")
    console.log(result);
    res.send(result)
    }catch(error) {
        console.log(error)
    }
})

const getActorById = async (id: string): Promise<Actor> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}
// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});
// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()
// Ou então podemos chamá-la dentro de um endpoint
app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    res.send(await getActorById(id))
  } catch(error) {
	console.log(error)
    res.status(500).send("Unexpected error")
  }
})
//Dessa formna o retorno está sendo vazio no postaman
// app.get("/actors/:name", async (req:Request, res:Response) => {
//   try { 
//       const result = await connection.raw(`
//       SELECT * FROM Actor WHERE name = "${req.params.name}"
//     `);
//     // return result
//     res.status(200).send(result)
// }catch(error){
//     res.send(error)
//     console.log(error)
// }
//   })

const searchActor = async (name: string): Promise<Actor> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0]
  }
  //o retorno está sendo vazio no postman. Why??? Porque nome não é chave primaria?
  app.get("/actors/:name", async (req: Request, res: Response) => {
    try {
      const name:string = req.params.name
      res.send(await searchActor(name))
    } catch(error) {
      console.log(error)
      res.status(500).send("Unexpected error")
    }
  });
  (async () => {
    console.log(await searchActor("Taís Araújo") )
  })()
//Retorna corretamente o objeto do ator selecionado por nome
  app.get("/actorsByName/:name", async (req:Request, res:Response) => {
    const name = req.params.name
    try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `);
    const response = result[0][0];
    res.status(200).send(response)
    }catch(error) {
        console.log(error)
    }
})
  
  //o retorno no Postman está sendo vazio. No console a resposta vem corretamente.
  const countActors = async (gender: string): Promise<number> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };
  app.get("/actors/:gender", async (req: Request, res: Response) => {
      const gender:string = req.params.gender
      const resposta:number = await countActors(gender)
      try {
      res.status(200).send(resposta)
    } catch(error) {
      console.log(error)
      res.status(500).send("Unexpected error")
    }
  });
  (async () => {
    console.log(await countActors("male") )
  })()
// No exemplo abaixo,retorna JSON no Postman:
app.get("/actorsNumberByGender/:gender", async (req:Request, res:Response) => {
    try{
       const [result] =  await connection("Actor")
        .select()
        .count()
        .where({
            gender: req.params.gender
        })
            res.status(200).send(result)
    }catch(error) {
        console.log(error)
        res.status(500).send("An unexpected error ocurred")
    }
})
// requisição raw de getByGender, retorna JSON--- não aceita propriedade count do objeto na resposta.: 
app.get("/actorsByGender/:gender", async (req:Request, res:Response) => {
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
})

//Neste formato não consigo enviar uma mensagem de sucesso como resposta na requisição de post.
  const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender
      })
      .into("Actor");
  };
  app.post("/actor",async (req:Request, res:Response) => {
      try{
        const {name, salary, dateOfBirth, gender} = req.body
        const id = ` ${Date.now().toString()}`
        res.status(201).send(await createActor(id, name, salary, dateOfBirth, gender))
        console.log("Success!")
      }catch(error){
        res.send(error)
      }
  })
  //Neste exemplo, há resposta de sucesso na requisição:
  app.post("/actor/create", async (req:Request, res:Response):Promise<void> => {
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
})

app.put("/actor/:id", async (req:Request, res:Response) => {
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
})

//não reconhece os ids gerados automaticamente, apenas o inseridos manualmente
app.delete("/actor/:id", async (req:Request, res:Response) => {
    const id:string = req.params.id
    try{
       const linhasDeletadas = await connection("Actor")
        .delete()
        .where({
            id: id
        })
        // if(linhasDeletadas === 0){
        //     throw new Error
        // }
        res.send("Success!")
    
    }catch(error){
    console.log(error)
    res.status(500).send('Erro no delete')
    }
    })
//só retorna o objeto
app.get("/mediaSalarial/:gender", async (req:Request, res:Response) => {
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
})
//inserir filme na tabela Filmes
const createMovie = async (
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
  
  app.post("/movie", async (req: Request, res: Response) => {
    try {
      await createMovie(
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
  });

  //get all movies
  app.get("/movies", async (req:Request, res:Response) => {
    try {
    const result = await connection("Filmes")
    console.log(result);
    res.send(result)
    }catch(error) {
        console.log(error)
    }
})

// app.get("/movie/search", async (req: Request, res: Response) => {
//     try {
//       const movies = await connection(req.query.query as string);
  
//       res.status(200).send({
//         movies: movies,
//       });
//     } catch (err) {
//       res.status(400).send({
//         message: err
//       });
//     }
//   });