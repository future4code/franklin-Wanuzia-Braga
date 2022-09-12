import { authenticationData } from "../types";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export default class Authenticator {
    generateToken = (payload:authenticationData) => {
        const token = jwt.sign(payload, process.env.JWT_KEY as string, 
            { 
                expiresIn: "5h"
            })
            return token
    }
    compare = (token:string) => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as authenticationData
        return data
    }
}