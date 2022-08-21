import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { Response, Request } from "express";


const app = express();
const port = process.env.PORT || 3003

app.use(express.json());
app.use(cors());

app.get("/testeList", async (req:Request, res:Response) => {
  const result = await connection.select()
  .from('TodoListUser')
  .innerJoin('id', 'name', 'nickname', 'email')
  .then((result) => {
    return res.status(200).json({result})
  })
  .catch((err) => {
    return res.status(400)
  })
  return res.status(200).send({message:`${result}`})
  
})




const server = app.listen(port, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app