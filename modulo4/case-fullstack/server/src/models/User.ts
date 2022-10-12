export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(
        private id: string,
        private first_name: string,
        private last_name: string,
        private participation: number,
        private role: USER_ROLES  
    ) {}
    public getId = () => {
        return this.id
    }

    public getFirstName = () => {
        return this.first_name
    }

    public getLastName = () => {
        return this.last_name
    }

    public getParticipation = () => {
        return this.participation
    }

    public getRole = () => {
        return this.role
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setFirstName = (newFiristName: string) => {
        this.first_name = newFiristName
    }

    public setLastName = (newLastName: string) => {
        this.last_name = newLastName
    }

    public setParticipation = (newParticipation: number) => {
        this.participation = newParticipation
    }

    public setRole = (newRole: USER_ROLES) => {
        this.role = newRole
    }
}

export interface IUserDB {
    id: string,
    first_name: string,
    last_name: string,
    participation: number,
    role: USER_ROLES,
}