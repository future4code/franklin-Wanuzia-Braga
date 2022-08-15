import { Count } from "./Tipos";


export const clientsList:Count[] = [
    {
        id:1,
        client: {
                name:"Ana Luiza",
                cpf:"598.956.598-56",
                birthDate:"25/04/1985",
                balance:100
        },
        extract: [
        {
                clientId:1,
                value:100,
                date:new Date,
                description:"depósito",     
        }

]
    },
    {
        id:2,
        client: {
                name:"Monteiro Lobato",
                cpf:"598.955.578-41",
                birthDate:"18/04/1882",
                balance:500
    },
    extract: [
    {
            clientId:2,
            value:500,
            date:new Date,
            description:"depósito",     
    }

]
},
{
        id:3,
        client: {
                name:"Agatha Christie",
                cpf:"548.926.198-36",
                birthDate:"15/09/1890",
                balance:700
    },
    extract: [
    {
            clientId:3,
            value:700,
            date:new Date,
            description:"depósito",     
    }

]
},
{
        id:4,
        client: {
                name:"Marcus Garvey",
                cpf:"458.986.198-83",
                birthDate:"17/08/1887",
                balance:1000
    },
    extract: [
    {
            clientId:4,
            value:1000,
            date:new Date,
            description:"depósito",     
    }

]
},

]
