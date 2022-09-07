# Knex 
## Respostas Exercícios
### Exercício 1 => raw

#### A)

- Quando usamos o __raw__ o retorno da requisição traz todos os detalhes da tabela. Usamos o result[0][0] para delimitar apenas ao conteúdo da tabela, primeira posição, no formato json.

#### B)

-  Função que busca um ator pelo **nome**:

~~~javascript
const searchActor = async (name: string): Promise<Actor> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result [0][0]
}
 app.get("/actors/:name", async (req: Request, res: Response) => {
    try {
      const name:string = req.params.name
      res.send(await searchActor(name))
    } catch(error) {
      console.log(error)
      res.status(500).send("Unexpected error")
    }
  });
~~~

#### C)

- Função que recebe um **gender** e retorna a quantidade de itens da tabela Actor com esse **gender**.

~~~javascript
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};
~~~

### Exercício 2 => query builders

#### A)

- Função que recebe um **salário** e um **id** e realiza a atualização do salário do ator em questão:

~~~javascript
const updateActor = async (id: string, salary: number): Promise<Actor> => {
  await connection("Actor")
    .update({
      salary: salary
    })
    .where("id", id);
};
~~~

#### B)

- Função que recebe um **id** e deleta um ator da tabela:

~~~javascript
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
~~~

#### C)

- Função que recebe um **gender** e devolve a média dos salários de atrizes ou atores desse **gender**:

~~~javascript
const avgSalary = async (gender: string): Promise<number> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
~~~

### Exercício 3 => endpoints

### A)
- Pega ator/atriz por id:

~~~javascript
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~

### B)

- Quantidade de ator/atriz por gênero:

~~~javascript

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~
### Exercício 4 => endpoints

### A)
- Atualizar salário com id:

~~~javascript
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~

### B)

- Deletar ator/atriz da tabela por id:

~~~javascript
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~


## Exercício 5

- Criar filme na tabela

~~~javascript

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
      message: err.message,
    });
  }
});
~~~

## Exercício 6
- Pegar todos os filmes da tabela

~~~javascript

const getAllMovies = async (): Promise<Movie> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};

app.post("/movie/:id", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~

## Exercício 7
- Busca filme por termo:

~~~javascript

app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovie(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
~~~