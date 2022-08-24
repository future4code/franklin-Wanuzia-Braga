import app from "./app";
import createTask from "./endpoints/tasks/createTask";
import createUser from "./endpoints/user/createUser";
import editUser from "./endpoints/user/editUser";
import getAllUsers from "./endpoints/user/getAllUsers";
import getUserById from "./endpoints/user/getUserById";

app.get("/users", getAllUsers);
app.post("/user", createUser);
app.get("/user/:id", getUserById);
app.put("/user/edit/:id", editUser);
app.post("/task",createTask);
