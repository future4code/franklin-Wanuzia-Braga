import * as bcrypt from "bcryptjs"

export class HashManager {
    public hash = async (password:string):Promise<string> => {
        const rounds = Number("12");
        const salt = await  bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(password, salt);
        return result

    }
    public compare = async (password:string, hash:string):Promise<boolean> => {
        const result = bcrypt.compare(password, hash);
        return result
    }
}