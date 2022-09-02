import { Client } from "./Client";
import { Residence } from "./Residence";

export class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
    public setConsumedEnergy(consumo:number, mes:string):string {
      this.consumedEnergy = consumo
      return `O consumo do mês de ${mes} foi de ${consumo}`
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }