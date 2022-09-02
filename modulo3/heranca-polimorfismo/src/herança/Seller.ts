import { Employee } from "./Employee";

export class Seller extends Employee{
    private salesQuantity:number = 0;

    public getSalesQuantity():number{
        return this.salesQuantity
    }
    public setSalesQuantity(salesQuantity:number):void{
       this.salesQuantity = salesQuantity 
    }
}