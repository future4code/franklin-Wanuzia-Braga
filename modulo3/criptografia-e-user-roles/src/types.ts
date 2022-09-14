export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type authenticationData = {
    id:string,
    role:UserRole
}
