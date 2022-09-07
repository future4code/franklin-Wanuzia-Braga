import { Request, Response } from "express";
import app from "./app"
import { createUser } from "./endpoints/createUser";
import { getUserById } from "./endpoints/getUserById";
import { login } from "./endpoints/login";

app.get("/teste", (re:Request, res:Response) => {
    res.send("Rota funcionando")
});
app.post("/user", createUser);
app.post("/user/login", login);
app.get("/user/profile", getUserById)