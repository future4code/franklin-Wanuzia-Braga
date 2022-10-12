import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Cubo_Users";


    public createUser = async (user: User):Promise<void> => {
        const userDB: IUserDB = {
            id: user.getId(),
            first_name: user.getFirstName(),
            last_name: user.getLastName(),
            participation: user.getParticipation(),
            role: user.getRole()
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }
    
    public findById = async (id: string): Promise<IUserDB> => {
        const usersDB: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where( 'id', '=', `${id}`)

        return usersDB[0]
    }
    public getAll = async (): Promise<IUserDB[]> => {
        const usersList: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select('*')
        return usersList
    }
    public deleteUser = async (id: string): Promise<void> => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .delete()
            .where({ id })
    }
  
}