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

// export interface IGetUserProfileInputDTO {
//     token: string | undefined
// }

export interface IGetUserByIdInputDTO {
    token: string | undefined, 
    idProfile: string

}

export interface IGetUserProfileOutputDTO {
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

export interface IFollowInputDBDTO {
    id_followed: string,
    id_follower: string
}
export interface IFollowInputDTO {
    token: string | undefined,
    id_followed: string
}