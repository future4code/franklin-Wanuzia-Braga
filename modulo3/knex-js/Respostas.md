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

### Exercício 1 => query builders

#### A)

- Função que recebe um **salário** e um **id** e realiza a atualização do salário do ator em questão:

~~~javascript
const updateActor = async (id: string, salary: number): Promise<Actor> => {
  await connection("Actor")
    .update({
      salary: salary,
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