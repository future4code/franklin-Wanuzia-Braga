# Aprofundamento SQL - 
## Respostas Exercícios 1 a 6
### Exercício 1

#### A)
``` sql
ALTER TABLE Actor DROP COLUMN salary;;
```
* O comando acima apaga/deleta a coluna salário da tabela ator;

#### B)
``` sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
- O comando acima altera o nome da coluna gender para sex e alterao tipo de dado para string com limite de 6 caracteres;

#### C)
``` sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
- A query acima altera o tipo da coluna gender de ENUM para string com até 255 caracteres.

#### D)

- A query abaixo altera a coluna gender para aceitar strings de até 100 caracteres:
``` sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
### Exercício 2
#### A) 
- Query que atualiza o nome e a data de nascimento do ator com o id 003::
 ``` sql
UPDATE Actor 
SET 
	name = "MOACYR FRANCO",
	birth_date = "1936-10-05"
WHERE id = "003";
```
#### B)  
- Query que atualize o nome da atriz Juliana Paes para JULIANA PAES e depois volta ao nome anterior:
 ``` sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

#### C)   
- Query que atualiza todas as informações do ator com o id 003:
```sql
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "1936-10-05",
salary = 600000,
gender = "male"
WHERE id = "003";
```
#### D)  
- Query que tenta atualizar um dado (id) da tabela que não existe::
```sql
UPDATE Actor
SET 
name = "Marieta Severo",
birth_date = "1946-11-02",
salary = 600000,
gender = "male"
WHERE id = "013";
```
- Resultado: O comando não apresentou mensagem de erro, embora informa que 0 linhas tenham sido atualizadas, nem adicionou a nova informação na tabela.

### Exercício 3

#### A) 
- Essa é a query que apaga a atriz com o nome Juliana Paes:
```sql
DELETE FROM Actor WHERE name = "Juliana Paes";
```
#### B) 
- Essa é a query que apaga todos os atores (do gênero masculino) com o salário maior do que R$1.000.000,00:
```sql
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```

### Exercício 4

#### A) 
- Query que pega o maior salário de todos os atores e atrizes:
```sql
SELECT MAX(salary) FROM Actor;
```
	
#### B) 
- Query que pega o menor salário das atrizes:
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```


#### C) 
- Query que pega a quantidade de atrizes:
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

#### D) 
- Query que pega a soma de todos os salários:
```sql
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
#### A) 
- O  operador **GROUP BY** permite agrupar os dados em relação a alguma coluna da tabela. 
```sql
SELECT COUNT(*) AS "quantidade", gender
FROM Actor
GROUP BY gender
;
```
- Na query acima retorna a quantidade de atores e atrizes na tabela agrupados por gênero:

quantidade | gender |
-------- | ------ |
       3|male  |
       2|female|

#### B) 
-  Query que retorna somente o id e o nome dos atores em ordem decrescente alfabética:
```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

- Resultado:

id | name            |
---|----------------|
001|Tony Ramos      |
007|Taís Araújo     |
003|Moacyr Franco   |
002|Glória Pires    |
004|Antônio Fagundes|

#### C) 
-  Query que retorna todos os atores ordenados pelo salário:
```sql
SELECT * FROM Actor
ORDER BY salary;
```

- Resultado:

id |name            |salary   |birth_date|gender|hometown |
---|----------------|---------|----------|------|---------|
001|Tony Ramos      | 400000.0|1948-08-25|male  |Ituiutaba|
004|Antônio Fagundes| 400000.0|1949-04-18|male  |         |
003|Moacyr Franco   | 600000.0|1936-10-05|male  |         |
002|Glória Pires    |1200000.0|1963-08-23|female|Ituiutaba|
007|Taís Araújo     |1200000.0|1978-11-25|female|Ituiutaba|

#### D) 
-  Query que retorna os atores com os três maiores salarios:
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

- Resultado:

id |name         |salary   |birth_date|gender|hometown |
---|-------------|---------|----------|------|---------|
002|Glória Pires |1200000.0|1963-08-23|female|Ituiutaba|
007|Taís Araújo  |1200000.0|1978-11-25|female|Ituiutaba|
003|Moacyr Franco| 600000.0|1936-10-05|male  |         |

#### E) 
-  Query que retorna a média de salário por gênero:
```sql
SELECT ROUND(AVG(salary)) AS "Média salarial", gender FROM Actor
GROUP BY gender;
```

- Resultado:

Média salarial|gender|
--------------|------|
      466667.0|male  |
     1200000.0|female|

        
### Exercício 6
#### A) 
- A query abaixo altera a tabela de Filmes e adiciona um novo parâmetro: playing_limit_date que indica a data limite em que o filme será passado no cinema:
```sql
 ALTER TABLE Filmes ADD playing_limit_date DATE;
```

#### B) 
- A query abaixo altera a tabela de Filmes para que o parâmetro rating possa aceitar valores não inteiros:
```sql
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
```
#### C) 
- Queries que atualizam dois filmes de tal forma que temos um que ainda está em cartaz e um que já saiu:
```sql
UPDATE Filmes
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Filmes
SET
	playing_limit_date = "2023-12-31"
WHERE id = "002";
```
#### D) 
- Query que deleta filme:
```sql
DELETE FROM Filmes WHERE id = "001"
```
- Tenta atualizar filme de __id__ deletado:
```sql
UPDATE Filmes
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
```
- Como resultado apenas informa que 0 linhas foram atualizadas.