import express, { Request, response, Response } from "express";
// import { AddressInfo } from "net";
import cors from 'cors';
import { tasks, ToDo } from "./afazeres";

const app = express();
app.use(cors())
app.use(express.json());

app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//exe4 - Funciona!- endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status
app.get("/tasks/:status", (req:Request, res:Response) => {
let status: string | boolean = req.params.status
console.log(status);

if(status === "true") {
    status = true
}else if(status === "false"){
    status = false
}else{
    res.status(404).send("Status inválido")
}
const tasksStatus = tasks.filter((task) => {
    return task.completed === status
})
res.status(200).send({tasksStatus})

})

type newTask = {
        userId:number,
        id:number,
        title:string,
        completed:boolean
    }
//exe5 - Funciona! endpoint de criação de tarefa. A resposta deve retornar o array de afazeres atualizado.
app.post("/creatTask", (req:Request, res:Response) => {
    const {userId, id, title, completed}:newTask = req.body
    const nova:newTask = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }
  tasks.push(nova)
  const findUser:ToDo[] = tasks.filter((task) => {
    return task.userId === userId
})
     res.status(201).send(findUser)
})

//exe6 - Funciona!! - endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa
app.put("/tasksEdit/:id", (req:Request, res:Response) => {
const idTask = Number(req.params.id)

const editTask = tasks.filter((task) => {
    return task.id === idTask
}).map((task) => {
    return task = {
        userId: task.id,
        id: task.id,
        title: task.title,
        completed: !task.completed
    }
})
res.status(200).send(editTask)
})

//exe7 - Funciona mal! Mas devia retornar erro pela não existência do TaskId - endpoint que deleta um determinado afazer de acordo com sua id.
app.delete("/deleteTask/:id", (req:Request, res:Response) => {
    const taskId = Number(req.params.id)

 tasks.filter((task) => {
        if( task.id === taskId){
            res.status(200).send(`Tarefa ${taskId} deletada`)
        }else{
            res.status(404).send("Tarefa não encontrada")
        }
    })
    
})

//exe8 - Funciona!! -endpoint que retorne todos os afazeres de uma determinada id de usuário.
app.get('/tasksUser/:id', (req:Request, res:Response) => {
    const id = Number(req.params.id)
  
    const findTasks = tasks.filter((task) => {
      return task.userId === id
    })
    const retorno = {
        todos: {
            selectedUser: 
                findTasks.map((task) => {
                    task.userId
                    task.id
                    task.title
                    task.completed
                })
            ,
            others:
                tasks.map((task) => {
                    task.userId
                    task.id
                    task.title
                    task.completed
                })
            
        }
    }
    res.status(200).send(findTasks) 
    console.log(retorno)
  })



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
