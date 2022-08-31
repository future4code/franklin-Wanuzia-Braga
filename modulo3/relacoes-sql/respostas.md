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

- O resultado deu erro pois não encontrou um id correspondente ao informado na tabela Fimes.

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

# Desafios
## Exercicio 4

### A) 
- Query que retorna todos os filmes e suas avaliações (com essa avaliação existindo ou não). A query retorna somente o **nome**, **id**, **nota do filme** e **comentário**:
```sql
SELECT f.id as movie_id, f.nome, r.rate as rating, r.comment as rating_comment
FROM Filmes f
LEFT JOIN Rating r ON f.id = r.movie_id;
```
- Retorno da query:

movie_id|nome                                        |rating|rating_comment|
--------|--------------------------------------------|------|--------------|
002     |Doce de mãe                                 |   7.0|Muito bom!    |
003     |Dona Flor e Seus Dois Maridos               |   7.0|Muito bom!    |
004     |Deus é Brasileiro                           |   7.0|Muito bom!    |
008     |Filme que não foi criado                    |   7.0|Muito bom!    |
009     |Filme que não foi criado - a revanche       |   7.0|Muito bom!    |
010     |Filme que não foi criado 3 - o retorno final|   7.0|Muito bom!    |

### B)
- Query que retorna todas as relações de elenco, junto com as informações do filme. A  query retorna o **id do filme**, **título do filme** e **id do ator**:
```sql
SELECT f.id as movie_id, f.nome, mc.actor_id FROM Filmes f 
RIGHT JOIN MovieCast mc ON mc.movie_id = f.id;
```
- Retorno da query:

movie_id|nome                                        |actor_id     |
--------|--------------------------------------------|-------------|
002     |Doce de mãe                                 |001          |
003     |Dona Flor e Seus Dois Maridos               |003          |
004     |Deus é Brasileiro                           |004          |
008     |Filme que não foi criado                    |007          |
009     |Filme que não foi criado - a revanche       |1661172322769|
010     |Filme que não foi criado 3 - o retorno final|1661219830287|

### C)
- Query que retorna a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo os que não foram avaliados ainda):
```sql
SELECT AVG(r.rate), f.id, f.nome FROM Filmes f 
LEFT JOIN Rating r ON f.id = r.movie_id
GROUP BY (f.id);
```
- Retorno da query:

AVG(r.rate)|id |nome                                        |
-----------|---|--------------------------------------------|
        7.0|002|Doce de mãe                                 |
        7.0|003|Dona Flor e Seus Dois Maridos               |
        7.0|004|Deus é Brasileiro                           |
        7.0|008|Filme que não foi criado                    |
        7.0|009|Filme que não foi criado - a revanche       |
        7.0|010|Filme que não foi criado 3 - o retorno final|

## Exercício 5
```sql
SELECT * FROM Filmes f 
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

### A)
- Essa query precisa do **JOIN** duas vezes pois está buscando a referência em duas tabelas: a de filmes e de actor, e estabelecendo a interseção entre eles. Observa-se que o retorno é de todos os dados das duas tabelas.

### B)
- Query que retorna o **id** e o **título do filme**, e o **id** e o **nome do ator**:
 ```sql
SELECT f.id as movie_id, f.nome, a.id as actor_id, a.name FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
- Retorno da query:

movie_id|nome                                        |actor_id     |name            |
--------|--------------------------------------------|-------------|----------------|
002     |Doce de mãe                                 |001          |Tony Ramos      |
003     |Dona Flor e Seus Dois Maridos               |003          |Moacyr Franco   |
004     |Deus é Brasileiro                           |004          |Antônio Fagundes|
008     |Filme que não foi criado                    |007          |Taís Araújo     |
009     |Filme que não foi criado - a revanche       |1661172322769|Wanuzia         |
010     |Filme que não foi criado 3 - o retorno final|1661219830287|New Actor       |
### C)
- Ao rodar a query acima deu um erro, pois há uma vírgula, tornando o 'f' uma coluna na tabela Filmes. Por ser inexistente, apresenta o erro: **SQL Error [1054] [42S22]: Unknown column 'f' in 'field list'**

### D) 
- Query que retorna todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário):
```sql
SELECT 
	f.id as movie_id, 
    f.nome, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Filmes f 
LEFT JOIN Rating r on r.movie_id = f.id
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
- Retorno da query:

movie_id|nome                                        |actor_id     |name            |rate|comment   |
--------|--------------------------------------------|-------------|----------------|----|----------|
002     |Doce de mãe                                 |001          |Tony Ramos      | 7.0|Muito bom!|
003     |Dona Flor e Seus Dois Maridos               |003          |Moacyr Franco   | 7.0|Muito bom!|
004     |Deus é Brasileiro                           |004          |Antônio Fagundes| 7.0|Muito bom!|
008     |Filme que não foi criado                    |007          |Taís Araújo     | 7.0|Muito bom!|
009     |Filme que não foi criado - a revanche       |1661172322769|Wanuzia         | 7.0|Muito bom!|
010     |Filme que não foi criado 3 - o retorno final|1661219830287|New Actor       | 7.0|Muito bom!|

## Exercício 6
### A)
- A relação é M:N na tabela Óscar dos filmes: cada chave estrangeira pode ter várias referências a mais de um outro elemento. Neste caso, um filme pode ter vários óscar(Óscar de melhor filme,  Óscar de melhor direção, etc) e cada edição e categoria do oscar pode ser entregue a diferentes filmes.
### B) 
- Query utilizada para criar a tabela Óscar dos filmes:
```sql
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    name_oscar VARCHAR(255) NOT NULL,
	win_date DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
)

ALTER TABLE Oscar 
CHANGE id id INT AUTO_INCREMENT;
```
### C)
- Cria ao menos dois Oscar para cada filme:
```sql
INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Filme", "2022-05-21", "002");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Direção", "2022-05-21", "002");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Fotografia", "2022-05-21", "003");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Cenografia", "2022-05-21", "003");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Direção", "2021-05-21", "004");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Cenografia", "2021-05-21", "004");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Figurino", "2020-05-21", "008");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Filme", "2020-05-21", "008");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Sonoplastia", "2019-05-21", "009");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Iluminação", "2019-05-21", "009");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Roteiro", "2018-05-21", "010");

INSERT INTO Oscar(name_oscar, win_date, movie_id)
VALUES("Melhor Direção", "2017-05-21", "010");
```
### D)
- Query que retorna todos os filmes e seus respectivos óscar:
```sql
SELECT f.id as movie_id, f.nome, o.name_oscar FROM Filmes f 
JOIN Oscar o ON f.id = o.movie_id;
```
- Retorno da query:

movie_id|nome                                        |name_oscar        |
--------|--------------------------------------------|------------------|
002     |Doce de mãe                                 |Melhor Filme      |
002     |Doce de mãe                                 |Melhor Direção    |
003     |Dona Flor e Seus Dois Maridos               |Melhor Fotografia |
003     |Dona Flor e Seus Dois Maridos               |Melhor Cenografia |
004     |Deus é Brasileiro                           |Melhor Direção    |
004     |Deus é Brasileiro                           |Melhor Cenografia |
008     |Filme que não foi criado                    |Melhor Figurino   |
008     |Filme que não foi criado                    |Melhor Filme      |
009     |Filme que não foi criado - a revanche       |Melhor Sonoplastia|
009     |Filme que não foi criado - a revanche       |Melhor Iluminação |
010     |Filme que não foi criado 3 - o retorno final|Melhor Roteiro    |
010     |Filme que não foi criado 3 - o retorno final|Melhor Direção    |