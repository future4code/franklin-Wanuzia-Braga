
export interface IRecipeDB {
    id: string,
    title: string,
    description: string,
    createdAt: Date,
    userId: string,
    userName: string,
}


export class Recipe {
   constructor (
       private id: string,
       private title: string,
       private description: string,
       private createdAt: Date,
       private userId: string,
       private userName: string
       ) {}

       public getId = () => {
        return this.id
    }

    public getTitle = () => {
        return this.title
    }

    public getDescription = () => {
        return this.description
    }

    public getCreatedAt = () => {
        return this.createdAt
    }
    public getUserId = () => {
        return this.userId
    }

    public getUserName = () => {
        return this.userName
    }

    public setTitle= (newTitle: string) => {
        this.title = newTitle
    }

    public setDescription= (newDescription:string) => {
        this.description = newDescription
    }


       
}
