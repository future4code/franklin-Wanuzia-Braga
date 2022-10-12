export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private role: USER_ROLES
    ) {}

}