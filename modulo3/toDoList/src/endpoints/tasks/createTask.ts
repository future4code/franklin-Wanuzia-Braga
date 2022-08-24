import { Response, Request } from "express";
import connection from "../../connection";

//error: field 'creator_uder_id' doesn't have a default value
const createTask = async (req:Request, res:Response) => {
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
};

export default createTask;