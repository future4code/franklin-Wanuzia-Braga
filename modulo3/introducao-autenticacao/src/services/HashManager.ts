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

/*

A função hash pega os rounds das variáveis de ambiente;
Gera o salt;
Cria o hash com o salt gerado.

A função compare compara um hash com a string que supostamente o gerou.
Exemplo simplificado :
const hashManager = new HashManager()

const teste = async () => {
    const senha:string = "123abc";
    const senhaTentativa:string = "12345";

    const hash = await hashManager.hash(senha);
    console.log(hash)
    const senhaCorreta = await hashManager.compare(senhaTentativa, hash)
    console.log("Senha correta: ", senhaCorreta)
}
teste()
*/