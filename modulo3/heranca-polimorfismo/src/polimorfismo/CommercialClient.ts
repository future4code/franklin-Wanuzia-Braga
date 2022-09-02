import { Client } from "./Client";
import { Commerce } from "./Commerce";

export class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
    public setConsumedEnergy(consumo:number, mes:string):string {
      this.consumedEnergy = consumo
      return `O consumo do mês de ${mes} foi de ${consumo}`
    }
  }