export type authenticationData = {
    id:string
    role:UserRole
}

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

/* payload são os dados que queremos armazenar, 
nesse caso queremos armazenar apenas o id do usuário.
*/