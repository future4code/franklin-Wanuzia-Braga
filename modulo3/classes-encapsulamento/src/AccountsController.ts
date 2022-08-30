import { Bank } from "./Bank";
import { Transaction } from "./Transaction";
import { UserAccount } from "./UserAccount";

export class AccountController {
    private cpf:string;
    private name: string;
    private age: number;
    private description:string;
    private value:number;
    private date: string;
    private newTransaction = new Transaction();
    private newAccounts = new UserAccount();
    private accounts = new Bank;

    constructor() {
        this.accounts.addAccount(this.newAccounts);
    }

    public adiciona():void {
        const account = this.newAccounts.createUserAccount (
          this.cpf,
          this.name,
          this.age
        );
      
        this.newTransaction.createTransaction(
            this.description,
            this.value,
            this.date
        );
        this.accounts.addAccount(account)
        this.atualizaBalance()
    }

    private atualizaBalance(): number {
        const balance:number = this.newAccounts.getBalance() + this.value;
      return  this.newAccounts.setbalance(balance);
    }
}
