export interface ICreateRecipeInputDTO {
    token: string | undefined,
    title: string,
    description: string,
}

export interface IRecipeMessageOutputDTO {
    message:string,
}

export interface IGetRecipeByIdInputDTO {
    token: string | undefined,
    id:string,
}

export interface IGetrecipeByIdOutputDTO {
    id: string,
    title: string,
    description: string,
    createdAt: Date,
}

export interface IDeleteRecipeInputDTO {
    token: string | undefined,
    idToDelete: string
}

export interface IEditRecipeInputDTO {
    token: string | undefined
    idToEdit: string,
    title: string,
    description: string,
}

export interface IEditrecipeInputDBDTO {
    idToEdit: string,
    title: string,
    description: string,
}