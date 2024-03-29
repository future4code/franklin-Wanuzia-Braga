import app from "./app"
import createUser from "./endpoints/createUser";
import { deleteUser } from "./endpoints/deleteUser";
import { acessoAdmin } from "./endpoints/userProfileAdmin";
import { login } from "./endpoints/login";
import { getById } from "./endpoints/getUserById";


app.post("/user", createUser);
app.post("/user/login", login);
app.get("/user/profile", acessoAdmin);
app.delete("/user/:id", deleteUser);
app.get("/user", getById)