import { Employee } from "./Employee";

export class Seller extends Employee{
    static SELLING_COMMISSION:number = 5;
    private salesQuantity:number = 0;

    public getSalesQuantity():number{
        return this.salesQuantity
    }
    public setSalesQuantity(salesQuantity:number):void{
       this.salesQuantity = salesQuantity 
    }
    public calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE + this.salesQuantity*Seller.SELLING_COMMISSION; /* (salário base) + (benefícios) + (quantidade de  venda)*(comissão por vendas)*/
    }
}