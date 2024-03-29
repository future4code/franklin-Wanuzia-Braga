import app from "./app"
import { createUser } from "./endpoints/createUser";
import { acessoAdmin } from "./endpoints/getUserById";
import { login } from "./endpoints/login";


app.post("/user", createUser);
app.post("/user/login", login);
app.get("/user/profile", acessoAdmin);