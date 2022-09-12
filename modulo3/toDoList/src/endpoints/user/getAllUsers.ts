import { Response, Request } from "express";
import connection from "../../connection";

const getAllUsers = async (req:Request, res:Response) => {
    let {name} = req.query
    console.log(name)
    try{
        if(!name) {
            name = ""
        };
       const result =  await connection("TodoListUser")
        .select('*')
        .from('TodoListUser as u')
        .where('u.name',  'LIKE',  `%${name}%`)
        
        res.send(result)

    }catch(error){
        console.log(error)
        res.send(error)
    }
};

export default getAllUsers;
