-- Exercício 1

ALTER TABLE Actor DROP COLUMN salary;;
-- A) O comando acima apaga/deleta a coluna salário da tabela ator;

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- B) O comando acima altera o nome da coluna gender para sex e alterao tipo de dado para string com limite de 6 caracteres;

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- C) A query acima altera o tipo da coluna gender de ENUM para string com até 255 caracteres.

DESCRIBE Actor

-- D) A query abaixo altera a coluna gender para aceitar strings de até 100 caracteres:
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Exercício 2
-- A) query que atualiza o nome e a data de nascimento do ator com o id 003:

UPDATE Actor 
SET 
	name = "MOACYR FRANCO",
	birth_date = "1936-10-05"
WHERE id = "003"


-- B) query que atualize o nome da atriz Juliana Paes para JULIANA PAES e depois volta ao nome anterior:

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

-- C) query que atualiza todas as informações do ator com o id 003:
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "1936-10-05",
salary = 600000,
gender = "male"
WHERE id = "003";

-- D) query que tenta atualizar um dado (id) da tabela que não existe:
UPDATE Actor
SET 
name = "Marieta Severo",
birth_date = "1946-11-02",
salary = 600000,
gender = "male"
WHERE id = "013";

-- Resultado do comando:
--   O comando não apresentou mensagem de erro, embora informa que 0 linhas tenham sido atualizadas, nem adicionou a nova informação na tabela, como pode ser verificado a seguir:

001	Tony Ramos	400000.0	1948-08-25	male	Ituiutaba
002	Glória Pires	1200000.0	1963-08-23	female	Ituiutaba
003	Moacyr Franco	600000.0	1936-10-05	male	
004	Antônio Fagundes	400000.0	1949-04-18	male	
005	Juliana Paes	719333.0	1979-03-26	female	
006	Jhonny Depp	540000000	1963-06-09	male	Ituiutaba
007	Taís Araújo	1200000.0	1978-11-25	female	Ituiutaba

SELECT * FROM Actor a 

-- Exercício 3
-- A) query que apague a atriz com o nome Juliana Paes

DELETE FROM Actor WHERE name = "Juliana Paes";

-- B) query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000


-- Exercício 4
-- A) Query que pegue o maior salário de todos os atores e atrizes:
	
	SELECT MAX(salary) FROM Actor
	
-- 	RESPOSTA: 1200000.0
	
-- B) Query que pega o menor salário das atrizes:
	SELECT MIN(salary) FROM Actor WHERE gender = "female"
	
-- Resposta: 1200000.0 (o maior salário na table é o menor entre as mulheres - que recebem o mesmo valor, neste caso, como pode ser observado na tabela abaixo):

001	Tony Ramos	400000.0	1948-08-25	male	Ituiutaba
002	Glória Pires	1200000.0	1963-08-23	female	Ituiutaba
003	Moacyr Franco	600000.0	1936-10-05	male	
004	Antônio Fagundes	400000.0	1949-04-18	male	
007	Taís Araújo	1200000.0	1978-11-25	female	Ituiutaba

-- C) query que pegue a quantidade de atrizes:
	
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- D) query que pegue a soma de todos os salários:
SELECT SUM(salary) FROM Actor;

-- Exercício 5
-- A) 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

-- O operador GROUP BY permite agrupar os dados em relação a alguma coluna da tabela. 
-- Na query acima  retorna a quantidade de atores e atrizes na tabela agrupados por genero 
-- Resposta: --
COUNT(*)|gender|
--------+------+
       3|male  |
       2|female|
-- B) query que retorna somente o id e o nome dos atores em ordem decrescente alfabética:
SELECT id, name FROM Actor
ORDER BY name DESC;

-- Resposta: 
id |name            |
---+----------------+
001|Tony Ramos      |
007|Taís Araújo     |
003|Moacyr Franco   |
002|Glória Pires    |
004|Antônio Fagundes|

-- C)  query que retorne todos os atores ordenados pelo salário:
SELECT * FROM Actor
ORDER BY salary;

-- Resultado: 

id |name            |salary   |birth_date|gender|hometown |
---+----------------+---------+----------+------+---------+
001|Tony Ramos      | 400000.0|1948-08-25|male  |Ituiutaba|
004|Antônio Fagundes| 400000.0|1949-04-18|male  |         |
003|Moacyr Franco   | 600000.0|1936-10-05|male  |         |
002|Glória Pires    |1200000.0|1963-08-23|female|Ituiutaba|
007|Taís Araújo     |1200000.0|1978-11-25|female|Ituiutaba|

-- D) query que retorne os atores com os três maiores salarios:
-- Error - access denied for user...
USE `franklin-wanuzia-braga`
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- Resultado:

id |name         |salary   |birth_date|gender|hometown |
---+-------------+---------+----------+------+---------+
002|Glória Pires |1200000.0|1963-08-23|female|Ituiutaba|
007|Taís Araújo  |1200000.0|1978-11-25|female|Ituiutaba|
003|Moacyr Franco| 600000.0|1936-10-05|male  |         |

-- E) query que retorne a média de salário por gênero:
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
-- Resultado:

AVG(salary)      |gender|
-----------------+------+
466666.6666666667|male  |
        1200000.0|female|
        
-- Exercício 6:
-- A) a query abaxio altera a tabela de Filmes e adiciona um novo parâmetro: 
-- playing_limit_date que indica a data limite em que o filme será passado no cinema. 
        
 ALTER TABLE Filmes ADD playing_limit_date DATE;

-- B) A query abaixo altere a tabela de Filmes para que o parâmetro rating possa aceitar valores não inteiros:
USE `franklin-wanuzia-braga`
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

-- C) a query abaixo atualiza dois filmes 
-- de tal forma que temos um que ainda está em cartaz e um que já saiu.
UPDATE Filmes
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
-- 
UPDATE Filmes
SET
	playing_limit_date = "2023-12-31"
WHERE id = "002"
 
-- Resultado:
id |nome                         |sinopse                                                                                                                                                                                                                                                |data_lancamento|avaliacao|playing_limit_date|
---+-----------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------+---------+------------------+
001|Se Eu Fosse Você             |Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. ¶ Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos                                                                                             |     2006-01-06|      7.0|        2020-12-31|
002|Doce de mãe                  |Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, ¶anuncia que vai se casar e não poderá mais morar com ela|     2012-12-27|     10.0|        2023-12-31|
003|Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. ¶A vida de abusos acaba por acarretar sua morte precoce.                                                                       |     2017-11-02|      8.0|                  |
004|Deus é Brasileiro            |Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém ¶no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.                 |     2003-01-31|      9.0|                  |

-- D) Query que deleta filme:
 DELETE FROM Filmes WHERE id = "001"

 -- Tenta atualizar Filme de id deletado:
 UPDATE Filmes
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"

-- Como resultado apenas informa que 0 linhas foram atualizadas.
