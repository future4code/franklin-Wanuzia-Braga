## Exercício 1
### A) 
- Concordo com o fato de que usar strings seja melhor que números, porque é possível criar quantidades maiores de combinações, havendo baixa possibilidade de serem criados id's repetidos.
### B) 
- Função para gerar **id** no arquivo './services/idGenerator'.
## Exercício 2
### A) 
- O código apresentado cria uma constante com o nome da table a ser utilizada. A arrow function createUser é assíncrona e recebe por parâmetros os dados do user(id, email, password) e aguarda a resposta da conexão com o banco de dados para inserir os dados recebidos, criando uma instância na tabela User, ou seja, inserido um novo usuário.
### B)
- Query utilizada para criar a tabela User:
```sql
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
### C)
- Função responsável pela criação de usuários no banco de dados, no arquivo './endpoints/createUser'.