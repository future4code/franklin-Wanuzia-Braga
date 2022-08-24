import { Response, Request } from "express";
import connection from "../../connection";

const getAllUsers = async (req:Request, res:Response) => {
    try{
       const result =  await connection("TodoListUser")
        res.send(result)

    }catch(error){
        console.log(error)
        res.send(error)
    }
};

export default getAllUsers;
