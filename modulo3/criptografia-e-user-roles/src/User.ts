import { UserRole } from './types'

export class User {
    id:string
    email:string
    password:string
    role:UserRole

    constructor(
        id:string,
        email:string,
        password:string,
        role:UserRole
    ){
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role
    }
}