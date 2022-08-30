import app from "./app";
import { Request, Response } from 'express';
import { UserAccount } from './UserAccount';
import { Transaction } from "./Transaction";
/* Respostas:*/
/* Exercício 1
A) O constructor serve para criar instancias para uma classe.
Para iniciar o constructor/chamá-lo, utilizamos a palavra reservada 'new' + nome-da-classe a ser instanciada.
*/
/* B) Cria instância da class UserAccount abaixo. 
O construtor foi chamado apenas uma vez.*/
const newUser = new UserAccount('17495869889', 'Maria José', 54);
app.get("/teste", (req:Request, res:Response) => {
    return res.send(newUser)
})
/* C) Para ter acesso às propriedade privadas de uma classe
 é necessário criar getters e setters, métodos públicos.*/

 /* Exercício 2 - Cria class Transaction no arquivo Transaction.ts, getters e setters para classes.
 Instancia classe Transaction abaixo:
 */
const newTransaction = new Transaction('Depósito', 100, '2022-08-29');
/*Tentativa de instanciar a class Bank, criada no exercício 3, arquivo Bank.ts. */
app.post('/createAccount', )