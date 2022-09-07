
type Transaction = {
            clientId:number,
            value:number,
            date:Date,
            description:string
    
 }


export type Count = {
    id:number,
    client: {
        name:string,
        cpf:string,
        birthDate:string,
        balance:number
    },
    extract: Transaction[]
 
}
