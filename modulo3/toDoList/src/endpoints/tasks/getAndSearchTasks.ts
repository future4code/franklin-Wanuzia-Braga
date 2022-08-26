import { Response, Request } from "express";
import connection from "../../connection";

const gestTasks = async (req:Request, res:Response) => {
    let {name} = req.query
    console.log(name)
    try{
        if(!name) {
            name = ""
        };
       const result =  await connection("TodoListTask")
        .select('*')
        .from('TodoListTask as t')
        .where('t.title',  'LIKE',  `%${name}%`)        
        
        res.send(result)

    }catch(error){
        console.log(error)
        res.send(error)
    }
};

export default gestTasks;
