import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0; /*Como esse dado é instanciado??*/
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCPF():string{
        return this.cpf;
    }
    public getName():string{
        return this.name;
    }
    public getAge():number{
        return this.age;
    }
    public createUserAccount(cpf: string, name: string, age: number): UserAccount {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        return new UserAccount(cpf, name, age);
    }
    public getBalance():number{
        return this.balance;
    }
    public setbalance(balance:number):number {
       return this.balance = balance;
    }
    // public getTransactions(transactions:Transaction):Transaction {
    //     return this.transactions = transactions;
    // }
    public setTransaction(newTransaction:Transaction):void {
        this.transactions.push(newTransaction)
    }
  }