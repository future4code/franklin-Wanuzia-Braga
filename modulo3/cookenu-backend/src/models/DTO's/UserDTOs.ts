export interface ISignupInputDTO {
    name: string,
    email: string,
    password: string
}
export interface ISignupOutputDTO {
    message:string,
    token:string
}
export interface ILoginInputDTO {
    email: string,
    password: string
}

export interface IGetUsersInputDTO {
    token: string | undefined,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface IGetUsersInputDBDTO {
    search: string, 
    order: string, 
    sort: string, 
    limit: number,
    offset: number
}

export interface IGetUsersOutputDTO {
    id: string,
    name: string,
    email: string
}

export interface IDeleteUserInputDTO {
    token: string | undefined,
    idToDelete: string
}

export interface IEditUserInputDTO {
    token: string | undefined
    idToEdit: string,
    name: string,
    email: string,
    password: string
}