
export type Client = {
        id:number,
        name:string,
        cpf:string,
        birthDate:string,
        balance:number
}

export const clientsList:Client[] = [
    {
            id:1,
            name:"Ana Luiza",
            cpf:"598.956.598-56",
            birthDate:"25/04/1985",
            balance:100
        },
 
    {
            id:2,
            name:"Monteiro Lobato",
            cpf:"598.955.578-41",
            birthDate:"18/04/1882",
            balance:500
        },
    {
            id:3,
            name:"Agatha Christie",
            cpf:"548.926.198-36",
            birthDate:"15/09/1890",
            balance:700       
    },
    {
            id:4,
            name:"Marcus Garvey",
            cpf:"458.986.198-83",
            birthDate:"17/08/1887",
            balance:1000
        
    }
]