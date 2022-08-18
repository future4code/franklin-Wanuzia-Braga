### Exercício 7
- Queries que respondem as perguntas abaixo:

#### A) 
- Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
```sql
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;
```
#### B)
- Qual a média das avaliações dos filmes?
```sql
SELECT AVG(avaliacao) AS "Média_Avaliações" FROM Filmes;
```
#### C) 
- Qual a quantidade de filmes em cartaz?
```sql
SELECT COUNT(*) FROM Filmes 
WHERE playing_limit_date > CURDATE();
```
#### D) 
- Qual a quantidade de filmes que ainda irão lançar?
```sql
SELECT COUNT(*) FROM Filmes 
WHERE data_lancamento > CURDATE();
```
#### E) 
- Qual a maior nota dos filmes?
```sql
SELECT MAX(avaliacao) FROM Filmes;
```
#### F) 
- Qual a menor nota dos filmes?
```sql
SELECT MIN(avaliacao) FROM Filmes;
```
### Exercício 8
#### A) 
- Query que retorna os nomes de todos os filmes em ordem alfabética:
```sql
SELECT nome AS Filmes FROM Filmes f 
ORDER BY nome ASC;
```
- Resultado:

Filmes                       |
-----------------------------|
Deus é Brasileiro            |
Doce de mãe                  |
Dona Flor e Seus Dois Maridos|

#### B)
- Query que retorna os 2 primeiros filmes em ordem alfabética decrescente:
```sql
SELECT * FROM Filmes f 
ORDER BY nome DESC 
LIMIT 2;
```
#### C) 
- Query que retorna os 2 filmes mais recentes em cartaz:
```sql
SELECT * FROM Filmes
WHERE data_lancamento < CURDATE() 
ORDER BY data_lancamento DESC 
LIMIT 2;
```
#### D) 
- Query que retorna os 2 filmes melhor avaliados:
```sql
SELECT * FROM Filmes 
ORDER BY avaliacao DESC 
LIMIT 2;
```

