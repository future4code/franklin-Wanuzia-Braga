## Exercício 1

- Query que cria uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira:

```sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
)
```

### A)
- Uma chave estrangeira é uma referência a outras tabelas dentro de uma tabela.

### B)
- cria uma avaliação para cada filme
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito bom!",
    7,
		"004"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"002"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Muito bom!",
    7,
		"003"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"004",
    "Muito bom!",
    7,
		"008"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"005",
    "Muito bom!",
    7,
		"009"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"006",
    "Muito bom!",
    7,
		"010"
);
```

### C)

- Tenta criar uma avaliação para um filme que não existe (ou seja, um id inválido):
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"007",
    "Muito bom!",
    7,
		"011"
);
```
- Resultado da query:

***SQL Error [1452] [23000]: Cannot add or update a child row: a foreign key constraint fails (`franklin-wanuzia-braga`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))***

- O resultado deu erro pois não encontrou um id correspondente ao informado na table Fimes.

### D)
- Altera a tabela de filmes para que ela não tenha mais uma coluna chamada rating:
```sql
ALTER TABLE Filmes DROP COLUMN rating;
```
- Na minha table esta coluna não existia, por isso deu erro no sql.

## Exercício 2
```sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

### A) 
- A tabela acima é caracterizada por uma relação N:M, ou seja, cada chave estrangeira pode ter várias referências a mais de um outro elemento. Neste caso, um filme pode ter vários atores, e cada ator pode estar em vários filmes.

## B)
- Cria várias relações na tabela:
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("002", "001");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003", "003");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004", "004");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("008", "007");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("009", "1661172322769");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("010", "1661219830287");
```

### C)
- Tenta criar uma relação com um filme ou um ator inexistente:
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("011", "1661219830287");
```

- ***SQL Error [1452] [23000]: Cannot add or update a child row: a foreign key constraint fails (`franklin-wanuzia-braga`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))***

### D)
- Tenta apagar um ator que possua uma relação nessa tabela:
```sql
DELETE FROM Actor WHERE name = "Tony Ramos";
```
- Resultado:
```sql
SQL Error [1451] [23000]: Cannot delete or update a parent row: a foreign key constraint fails (`franklin-wanuzia-braga`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

## Exercício 3
```sql
SELECT * FROM Filmes 
INNER JOIN Rating ON Filmes.id = Rating.movie_id;

```
### A)
- A query acima autiliza o operador ON para fazer uma comparação e trazer os resultados de duas tabelas, mostrando a relação/campos das mesmas, de acordo com a chave estrangeira.

### B)
- Query que retorna somente o _nome_, _id_ e _nota de avaliação_ dos filmes que já foram avaliados:
```sql
SELECT m.id as movie_id, r.rate as rating FROM Filmes f
INNER JOIN Rating r ON f.id = r.movie_id;

```
- Resultado:

movie_id|rating|
-------|------|
002     |   7.0|
003     |   7.0|
004     |   7.0|
008     |   7.0|
009     |   7.0|
010     |   7.0|

