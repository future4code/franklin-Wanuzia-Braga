import { Response, Request } from "express";
import app from "./app";
import connection from "./connection";

//endpoints USER
app.get("/users", async (req:Request, res:Response) => {
    try{
       const result =  await connection("TodoListUser")
        res.send(result)

    }catch(error){
        console.log(error)
        res.send(error)
    }
})
app.post("/user", async (req:Request, res:Response) => {
    const {name, nickname, email} = req.body;
    try{
        await connection("TodoListUser").insert({
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
        })
        //não está retornando esse erro. 
        // Retorna o erro do catch quando algum dos campos não foi preenchido.
        // if(!name || !nickname || !email){
        //     throw new Error
        //     res.send("Preencha todos os campos")
        // }
        res.status(201).send(`Usuário ${req.body.nickname} cadastrado com sucesso!`)

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
})

app.get("/user/:id", async (req:Request, res:Response) => {
    try{
        const result = await connection("TodoListUser")
        .where({
            id: req.params.id
        })
        // if(!req.params.id){
        //     res.send("id não encontrado")
        // }
        console.log(result)
        res.send(result)

    }catch(error){
        console.log(error)
        res.status(500).send("Ocorreu um erro inesperado.")
    }
})

//não está retornando erro em caso de algum valor enviado vazio
app.put("/user/edit/:id", async (req:Request, res:Response) => {
    try{
        await connection("TodoListUser").update({
            name:req.body.name,
            nickname:req.body.nickname,
            email:req.body.email
        }).where({
            id: req.params.id
        })
        res.send("Dados atualizados com sucesso!")

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
})

//endpoints TASKS
//error: field 'creator_uder_id' doesn't have a default value
app.post("/task", async (req:Request, res:Response) => {
    const {title, description, limit_date} = req.body
    const id = req.query.id
    try{
        await connection("TodoListTask").insert({
            id: Date.now().toString(),
            title: title,
            description: description,
            limit_date:limit_date
        }).where({
            creator_user_id: id
        })
        res.status(201).send("Success!")

    }catch(error){
        console.log(error)
        res.send("Error...")
    }
})