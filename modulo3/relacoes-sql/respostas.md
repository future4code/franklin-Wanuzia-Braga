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
### A)