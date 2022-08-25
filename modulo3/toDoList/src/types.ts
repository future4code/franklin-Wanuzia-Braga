export type User = {
    id:string,
    name:string,
    nickname:string,
    email:string
}

export type Task = {
    id:string,
    title:string,
    description:string,
    status: string,
    limit_date: Date,
    creator_user_id:string  
}

export type ResponsibleUserTask = {
    task_id:string,
    responsible_user_id:string
}