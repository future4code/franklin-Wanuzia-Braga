import { Request, Response } from "express";
import app from "./app"
import { createUser } from "./endpoints/createUser";

app.get("/teste", (re:Request, res:Response) => {
    res.send("Rota funcionando")
});
app.post("/user", createUser);