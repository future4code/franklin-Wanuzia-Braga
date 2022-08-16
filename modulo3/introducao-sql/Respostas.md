# Introdução SQL - 
## Respostas Exercícios 1 a 7
### Exercício 1
``` sql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
#### A)
* O type **FLOAT** é utilizado para representar números não inteiros;
* O type **VARCHAR** é utilizado para representar caracteres limitados do tipo 'string';
* O type **DATE** serve para representar e formatar datas.
#### B)
- O método **SHOW DATABASES**  retorna os bancos de dados da conexão.
- O método **SHOW TABLES** retorna as tabelas existentes no banco de dados (DataBase).

#### C)
``` sql
DESCRIBE Actor 
```
- O método **DESCRIBE** retorna os detalhes da tabela: os nomes dos campos(coluns), seus tipos, se podem ou não ser nulos, e se é uma chave.

### Exercício 2
``` sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

#### A) 
- A Query que cria a atriz é:
 ``` sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
```
#### B)  
- A query tenta adicionar um outro elemento a tabela com o mesmo **id** do item anterior '002', o que gerou um **_Erro SQL [1062] [23000]: entrada duplicada '002' para a chave 'PRIMARY'_**. Isso aconteceu pois chaves primárias são únicas, não pode haver duas de mesmo valor pois é o que identifica o objeto (row).

#### C)   
 **_ERROR SQL [1136] A contagem de colunas não corresponde à contagem de valores na linha 1_**
- O erro acontece porque foram informados valores no objetos, mas não declarados como parâmetros na inserção dos novos dados, logo, o sistema acusa que há mais valores que colunas declaradas na inserção do objeto na tabela.
- Para corrigir, basta incluir os campos faltantes, neste caso, data de nascimento e gênero. A query correta fica assim:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
#### D)  
**_Erro SQL [1364] [HY000]: O campo 'nome' não tem um valor padrão_**
- O erro ocorre porque o campo nome não foi informado na inserção do objeto, sendo que, na criação da tabela foi informado que o valor é **NOT NULL** , logo, deve ser informado um valor, o campo não pode ser **NULL**.
- Basta informar a chave _nome_ e o _valor_, ficando assim:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

#### E)  
**_Incorrect date value: '1950' for column 'birth_date' at row 1_**
- A data não foi passada como string, gerando o erro acima. O correto é entre aspas, como abaixo:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
#### F) 
- Abaixo, eis a query que cria mais um ator e mais uma atriz:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"006", 
"Jhonny Depp", 
540000000,
"1963-06-09", 
"male" ),
(
"007",
"Taís Araújo",
1200000,
"1978-11-25",
"female"
);
```
### Exercício 3
```sql
SELECT * FROM Actor; 
```
- Retorna todas as linhas e colunas da tabela.
```sql
SELECT id, salary FROM Actor; 
```
- Retorna apenas colunas de id e salário dos atores.
```sql
SELECT id, name FROM Actor WHERE gender = "male";
```
- Retorna apenas **id** e **nome** de atores do gênero masculino.

#### A) 
- Essa é a Query que retorna todas as informações das atrizes:
```sql
SELECT * FROM Actor a WHERE a.gender = "female";
```
#### B) 
- Essa é a query que retorna o salário do ator com o nome "Tony Ramos":
```sql
SELECT salary FROM Actor WHERE name LIKE "Tony Ramos";
```
#### C)   
- Essa é a query que retorna todas as informações que tenham o gender com o valor "invalid":
```sql
SELECT * FROM Actor a WHERE gender = "invalid";
```
- O retorno é vazio, pois nenhum caso se encaixa na condição.

#### D)   
- Essa query retorna o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000 :
```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```
#### E) 
- A query deu **_Erro SQL [1054] [42S22]: coluna desconhecida 'nome' na 'lista de campos'_**,  pois o nome da coluna é 'name' e não 'nome':
```sql
SELECT id, name from Actor WHERE id = "002";
```
### Exercício 4
```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
#### A) 
- A query acima usa o comparador **LIKE** para comparar strings, usamos a sintaxe **LIKE "A%"**, pois "%" indica uma string genérica, e está precedida da letra 'A' pois signifca que deve começar com tal caracter.
- **OR** é o operador **OU**.
- **AND** é o comparador lógico **'e'**.
- Também utilizamos o comparador maior que **'>'**.

#### B) 
- A seguir, a query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00:
```sql
SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary > 350000;
```
#### C) 
- Abaixo, a query que seleciona os atores que possuam "G" ou "g" em qualquer parte do nome:
```sql
SELECT * FROM Actor 
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

#### D) 
- Query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00:
```sql
SELECT * FROM Actor 
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%A%" OR name LIKE "%a%") 
AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
#### A) 
- A query abaixo cria a tabela Filmes:
```sql
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
```
#### B,C, D e E) 
- Query que cria 4 filmes:
```sql
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
	Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
 	7
),
(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),
(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
),
(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém 
no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
9
);
```
### Exercício 6
#### A) 
- Query que retorna o **id**, **título** e **avaliação** a partir de um **id** específico:
```sql
SELECT id, nome, avaliacao FROM Filmes
WHERE id="003";
```
#### B) 
- Query que retorna um filme a partir de um **nome** específico:
```sql
SELECT * FROM Filmes
WHERE nome="Se Eu Fosse Você";
```
#### C) 
- Query que retorna o **id**, **título** e **sinopse** dos filmes com avaliação mínima de 7:
```sql
SELECT id, nome, sinopse FROM Filmes
WHERE avaliacao >= 7;
```
### Exercício 7
#### A) 
- Query que retorna um filme cujo título contenha a palavra _vida_:
```sql
SELECT * FROM Filmes
WHERE nome LIKE "%vida%" OR nome LIKE "%VIDA%";
```
#### B)
- Query que pesquisa se o termo de busca está contido no título ou na sinopse:
```sql
SELECT * FROM Filmes
WHERE nome LIKE "%vida%" OR  sinopse LIKE "%vida%";
```
#### C) 
- Query que procura por todos os filmes que já foram lançados:
```sql
SELECT * FROM Filmes
WHERE data_lancamento < CURDATE() ;
```
#### D) 
- Query que procura por algum filme que já tenha sido lançado, com o **termo** de busca contido no título ou sinopse e com a avaliação maior do que 7:
```sql
SELECT * FROM Filmes 
WHERE data_lancamento < CURDATE() 
AND (nome LIKE "%vida%" OR  sinopse LIKE "%vida%")
AND avaliacao > 7;
```