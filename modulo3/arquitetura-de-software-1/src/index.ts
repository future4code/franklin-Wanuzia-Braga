import app from "./app";
import UserController from "./controller/UserController";


const userController = new UserController()

app.post("/users", userController.signup)
app.post("/users/login", userController.login)
app.get("/users", userController.getall)

