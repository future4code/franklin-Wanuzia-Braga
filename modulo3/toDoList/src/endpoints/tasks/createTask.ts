import { Response, Request } from "express";
import connection from "../../connection";

const createTask = async (req:Request, res:Response) => {
    const {title, description, limit_date, creator_user_id} = req.body
    try{
        await connection("TodoListTask").insert({
            id: Date.now().toString(),
            title: title,
            description: description,
            limit_date:limit_date,
        // }).where({
            creator_user_id: creator_user_id
        })
        res.status(201).send("Success!")

    }catch(error){
        console.log(error)
        res.send("Error...")
    }
};

export default createTask;