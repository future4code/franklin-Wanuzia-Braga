export class User {
    private id:string;
    private name:string;
    private nickname:string;
    private email:string;

    constructor(id:string, name:string, nickname:string, email:string)
    {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.email = email;
    }
    public getId():string {
        return this.id
    }
    public getName():string {
        return this.name
    }
    public getNickname():string {
         return this.nickname
    }
    public getEmail() {
        return this.email
    }
    public setUser(id:string, name:string, nickname:string, email:string):void{
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.email = email;

    }
}