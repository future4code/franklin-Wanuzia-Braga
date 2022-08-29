import app from "./app";
import notFound from "./endpoints/notFound";
import createTask from "./endpoints/tasks/createTask";
import getTasks from "./endpoints/tasks/getAndSearchTasks";
import getTaskByUserId from "./endpoints/tasks/getTaskByUserId";
import getTaskById from "./endpoints/tasks/getTaskById";
import createUser from "./endpoints/user/createUser";
import editUser from "./endpoints/user/editUser";
import getAllUsers from "./endpoints/user/getAllUsers";
import getUserById from "./endpoints/user/getUserById";
import deleteTask from "./endpoints/tasks/deleteTask";
import deleteUser from "./endpoints/user/deleteUser";
import getTasksByStatus from "./endpoints/tasks/getTasksByStatus";

app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.get("/users/:id/tasks", getTaskByUserId);
app.post("/users", createUser);/*continua não retornando erro da condição if().*/
app.put("/users/:id", editUser);
app.delete("/users/:id", deleteUser);
app.post("/users/:id/tasks",createTask);/* Falta resolver retorno do if e formato da data*/
app.get("/users/:id/tasks/:taskId", getTaskById); /* só está dando match com palavra na posição title.[0] */ 
app.get("/tasks", getTasks);
app.get("/tasks/:status", getTasksByStatus);
app.delete("/users/:id/tasks/:taskId", deleteTask);/*A tarefa não está sendo deletada... */
app.get("*", notFound);
