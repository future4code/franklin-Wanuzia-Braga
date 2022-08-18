-- Exercício 7 -- Queries que respondem as perguntas abaixo:
-- A) Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;
-- B) Qual a média das avaliações dos filmes?
SELECT AVG(avaliacao) FROM Filmes ;
-- C) Qual a quantidade de filmes em cartaz?
SELECT COUNT(*) FROM Filmes 
WHERE playing_limit_date > CURDATE();
-- D)Qual a quantidade de filmes que ainda irão lançar?
SELECT COUNT(*) FROM Filmes 
WHERE data_lancamento > CURDATE();
-- E) Qual a maior nota dos filmes?
SELECT MAX(avaliacao) FROM Filmes;
-- F)Qual a menor nota dos filmes?
SELECT MIN(avaliacao) FROM Filmes f;

-- Exercício 8:
-- A) Query que retorna todos os filmes em ordem alfabética:
SELECT * FROM Filmes f 
ORDER BY nome ASC;

-- B) Query que retorna os 2 primeiros filmes em ordem alfabética decrescente:
SELECT * FROM Filmes f 
ORDER BY nome DESC 
LIMIT 2;

-- C) Query que retorna os 2 filmes mais recentes em cartaz:
USE `franklin-wanuzia-braga` 
SELECT * FROM Filmes
WHERE data_lancamento < CURDATE() 
ORDER BY data_lancamento DESC 
LIMIT 2;
-- D) Query que retorna os 2 filmes melhor avaliados:
SELECT * FROM Filmes 
ORDER BY avaliacao DESC 
LIMIT 2;


