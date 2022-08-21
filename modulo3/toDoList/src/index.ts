import { Response, Request } from "express";
import app from "./app";
import connection from "./connection"

// esse edpoint não está funcionando nesse arquivo. No arquivo app funciona. 
app.get("/", (req:Request, res:Response) => {
    res.status(200).send({message: "Servidor da Lista de Tarefas no ar."})
})