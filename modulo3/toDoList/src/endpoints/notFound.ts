import { Response, Request } from "express";

const notFound = async (req:Request, res:Response) => {
        res.status(404).send("Rota não encontrada.");
    }
export default notFound;