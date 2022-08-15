import express, { Request, Response } from "express";
import cors from "cors";
import { clientsList } from "./clientsList";
import { validaData } from "./validaData";
import { Count } from "./Tipos";
const app = express();

app.use(express.json());
app.use(cors());

//ok
app.get("/teste", (req:Request, res:Response) => {
res.status(200).send("Rota funcionando! Banco no ar!")
})

//ok - exbindo apenas nomes da lista de clientes
app.get("/clients", (req:Request, res:Response) => {
    const client = clientsList.map((cli) => {
        return cli.client.name
    })
    res.status(200).send(client)
})

app.post("/singUp", (req:Request, res:Response) => {
const clients = clientsList
const {id, name, cpf, birthDate} = req.body
const newCount : Count ={
    id:id,
    client: {name:name,
    cpf:cpf,
    birthDate:birthDate,
    balance: 0
},
    extract:[],
}
if(!validaData(birthDate)) {
    res.status(400).send("Pessoas menores de 18 não podem se cadastrar.")
} else {
    clients.push(newCount)
    res.status(201).send(`Cliente ${name} cadastrado com sucesso`)
}

})

//não retorna na requisição apenas o saldo; retorna objeto inteiro.
app.get("/saldo/:cpf", async (req:Request, res:Response) => {
const cpf = req.params.cpf
const findId = await clientsList.find((client) => {
     if (client.client.cpf === cpf ) {
         return  client.client.balance 
     }
     console.log(cpf)
     return 0
    }
 )
 res.status(200).send(findId)
})




app.listen(3004, () => {
    console.log("LabeBank server is running in http://localhost:3004")
});