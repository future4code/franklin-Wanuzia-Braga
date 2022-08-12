import { Client } from "./clientsList";

export type NewCount = {
    id:number,
    client: {
        id:number,
        name:string,
        cpf:string,
        birthDate:string,
        balance:number
    },
    extract: {
        clientId:number,
        transaction: { 
            type:string,
            value:number,
            date:Date,
            description:string
    }
    }
}
//tabela cliente --- 1 saldo
//tabela transacao --- id cliente
//