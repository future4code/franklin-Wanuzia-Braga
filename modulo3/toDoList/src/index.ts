import app from "./app";
import createTask from "./endpoints/tasks/createTask";
import getTaskByUserId from "./endpoints/tasks/getTaskByUserId";
import getTaskById from "./endpoints/tasks/getTaskId";
import createUser from "./endpoints/user/createUser";
import editUser from "./endpoints/user/editUser";
import getAllUsers from "./endpoints/user/getAllUsers";
import getUserById from "./endpoints/user/getUserById";

app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.get("/users/:id/tasks", getTaskByUserId);
app.post("/users", createUser);
app.put("/users/:id", editUser);
app.post("/users/:id/tasks",createTask);/* Falta resolver retorno do if e formato da data*/
app.get("/users/:id/tasks/:taskId", getTaskById);
app.get('*');
