import express, { Response, Request } from "express";
import cors from "cors";
import { usersList } from "./usersList";
import { postsList } from "./postsList";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/exercicio1", (request:Request, response:Response) => {
    response.send("Hello from Express").status(201)
})
//Optei por realizar o array de posts fora do array de usuários, pois é o mesmo formato apresentado pelo exemplo da API JSONPlaceholder. Evita ficar um objeto muito complexo.
app.get("/users", (request:Request, response:Response) => {
    response.send(usersList).status(201)
})

app.get("/posts", (request:Request, response:Response) => {
    response.send(postsList).status(201)
})

app.get("/posts/:userId", (request:Request, response:Response) => {
const userId = Number(request.params.userId)
const getPostsUser = postsList.filter((post) => {
    return post.userId === userId 
})
if(!getPostsUser) {
    response.status(404).send({message: "Usuário não encontrado para este ID"})
}
response.status(201).send(getPostsUser)
})

app.delete("/posts/:id", (request:Request, response:Response) => {
    const id = Number(request.params.id)

    const index = postsList.findIndex((i) => i.id === id);
    if(index) {
        postsList.splice(index, 1) 
        // response.send('Ok! Deletado!').status(201)
    }
    if(!index){
        response.send("Erro")
    }
    response.status(200).end()
})

app.get("*", (request:Request, response:Response) => {
    response.status(404).send("Rota não encontrada.")
})

app.listen(3003, () => {
console.log('Server is running in http://localhost:3003')
})