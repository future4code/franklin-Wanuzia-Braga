import { IFollowInputDBDTO } from "../models/DTO's/UserDTOs";
import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Cookenu_Users";

    public static TABLE_FOLLOWERS = "Followers"

    public findByEmail = async (email: string) => {
        const usersDB: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })

        return usersDB[0]
    }

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }
    
    public findById = async (id: string) => {
        const usersDB: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where( 'id', '=', `${id}`)

        return usersDB[0]
    }
    public deleteUser = async (id: string) => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .delete()
            .where({ id })
    }
    public followUser = async (input:IFollowInputDBDTO) => {
        const followers:IFollowInputDBDTO = {
            id_followed: input.id_followed,
            id_follower: input.id_follower,
        }
        await BaseDatabase
        .connection(UserDatabase.TABLE_FOLLOWERS)
        .insert(followers)
    }
    public unFollowUser = async (input:IFollowInputDBDTO) => {
        const followers:IFollowInputDBDTO = {
            id_followed: input.id_followed,
            id_follower: input.id_follower,
        }
        await BaseDatabase
        .connection(UserDatabase.TABLE_FOLLOWERS)
        .delete()
        .where('id_followed', '=', `${followers.id_followed}`)
        .andWhere('id_follower', '=', `${followers.id_follower}`)
    }
    public findFollowersById = async (input: IFollowInputDBDTO) => {
        const followers:IFollowInputDBDTO = {
            id_followed: input.id_followed,
            id_follower: input.id_follower,
        }
        const existFollowers: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_FOLLOWERS)
            .select()
            .where('id_followed', '=', `${followers.id_followed}`)
            .andWhere('id_follower', '=', `${followers.id_follower}`)

        return existFollowers[0]
    };
    public deleteUserFromFollowers = async (id:string) => {
        const existFollowers: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_FOLLOWERS)
            .select()
            .where('id_followed', '=', `${id}`)
            .orWhere('id_follower', '=', `${id}`)

    };
}