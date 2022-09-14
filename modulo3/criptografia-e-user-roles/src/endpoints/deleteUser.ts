import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import { UserRole } from "../types";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const data = new Authenticator().compare(token);
    const user = await new UserDatabase().getUserById(data.id);
    //verifica se o usuário pode acessar esse endpoint:
    if (data.role !== UserRole.ADMIN) {
      res.statusCode = 403;
      res.send("Usuário não autorizado.");
    }

    const id = req.params.id;
    const idDeletar = await new UserDatabase().getUserById(id)
    if(!idDeletar){
        return res.send("Id não localizado.")
    }
    await new UserDatabase().deleteUser(id);
    res.status(200).send("Usuário deletado com sucesso")

  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).send({ message: error.message });
    }

    res.status(500).send({ message: "Erro inesperado" });
  }
};
