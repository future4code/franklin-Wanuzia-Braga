export class Transaction {
   private description: string;
   private value: number;
   private  date: string;
   /*como fica a configuração do tipo Date?? 
   E como associar a Transaction a um UserAccount??*/
    constructor(description:string, value:number, date:string){
        this.description = description;
        this.value = value;
        this.date = date;
}
    public getDescription():string {
        return this.description;
    }
    public getValue():number {
        return this.value;
    }
    public getDate():string {
        return this.date;
    }
    public createTransaction(description: string, value: number, date: string): Transaction {
        this.date = date;
        this.description = description;
        this.value = value;
        return new Transaction(description, value, date);
    }
}



    
