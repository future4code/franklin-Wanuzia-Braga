import app from "./app"
import { UserController } from "./controller/UserController"



const userController = new UserController()

app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)
app.get("/users/", userController.getUsers)
app.delete("/users/:id", userController.deleteUser)
app.put("/users/:id", userController.editUser)