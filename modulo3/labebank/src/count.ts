type Transactions = {

}

export type Count = {
        id:number,
        clientId:number,
        extract: {
            value:number,
            date:Date,
            description:string,
        }
        balance:number
    }

export const countList:Count[] = [
    {
        id:1,
        clientId:1,
        extract: {
            value:100,
            date:new Date,
            description:"depósito",
        },
        balance:100
},
{
    id:2,
    clientId:2,
    extract: {
        value:500,
        date:new Date,
        description:"depósito",
    },
    balance:500
},
{
    id:3,
    clientId:3,
    extract: {
        value:700,
        date:new Date,
        description:"depósito",
    },
    balance:700
},
{
    id:4,
    clientId:4,
    extract: {
        value:1000,
        date:new Date,
        description:"depósito",
    },
    balance:1000
},
]

