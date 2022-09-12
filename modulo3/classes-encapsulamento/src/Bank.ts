import { UserAccount } from './UserAccount';

export class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAccounts():readonly UserAccount[]{
        return this.accounts;
    }
    public addAccount(newAccount:UserAccount) {
       this.accounts.push(newAccount);
    }
  }