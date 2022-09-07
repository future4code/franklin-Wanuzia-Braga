import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase"


export class UserDatabase extends BaseDatabase {

    tableName: string = "User";

    public async getUserById(id:string): Promise<User> {
        const result = await this.connection
        .select("*")
        .from(this.tableName)
        .where({ id });

        return result[0]
    }
    public async getUserByEmail(email:string): Promise<User> {
        const result = await this.connection
        .select("*")
        .from(this.tableName)
        .where({ email });

        return result[0]
    }
    public async createUser(newUser:User){
        await this.connection
        .insert({newUser})
        .into(this.tableName)
    }
}