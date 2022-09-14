## Exercício 1
### A)
-  O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê? 
- **round** é o nome dando pela lib do bcryptjs para o também chamado de **cost**. O **cost** (custo - numérico) está relacionado à segurança da senha, sendo o responsável por gerar o **salt** esperado dentro da função hash. Por sua vez, **salt** é uma string aleatória na senha (ou texto), adicionada antes de criar o **hash**.
- Quanto maior o **round**, maior o tempo de execução do algoritmo.A recomendação é utilizar o maior que conseguir para os equipamentos utilizados rodarem no tempo desejado. Durante o curso, vamos usar um cost de 12, por ser o padrão na maioria das libs. Dessa forma, evita-se os ataques chamados **rainbow table**.

## Exercício 2 
### A)
-  Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
- 