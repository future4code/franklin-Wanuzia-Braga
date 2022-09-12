import { BaseDatabase } from "./BaseDatabase";
import { User } from '../User'

export class UserDatabase extends BaseDatabase {
   tableName:string = "User"

   public async getAllUsers():Promise<User[]> {
       const result = await BaseDatabase.connection
       .select("*")
       .from(this.tableName);

       return result
   }
   public async createUser(newUser:User):Promise<void>{
       await BaseDatabase.connection
       .insert(newUser)
       .into(this.tableName)
   }
   public async getUserByEmail(email:string): Promise<User> {
    const result = await BaseDatabase.connection
    .select("*")
    .from(this.tableName)
    .where({ email });

    return result[0]
}
public async getUserById(id:string): Promise<User> {
    const result = await BaseDatabase.connection
    .select("*")
    .from(this.tableName)
    .where({ id });

    return result[0]
}
}