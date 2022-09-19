import UserDatabase from "../database/UserDatabase"
import { User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    public signup = async (input: any) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.includes('@')) {
            throw new Error("Email inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    };

    public login = async (input:any) => {
        const email = input.email
        const password = input.password

        if(!email || !password) {
            throw new Error("Um ou mais parâmetros estão faltando")
        }
        if (typeof email !== "string" || email.length < 3) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string" || password.length < 3) {
            throw new Error("Parâmetro 'password' inválido")
        }

        const userDB = await new UserDatabase().findByEmail(email)

        if (!userDB) {
            throw new Error("E-mail não cadastrado")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await new HashManager().compare(password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = new Authenticator().generateToken(payload)

        const response = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    };

    public getUsers = async (token:string) => {
            if (!token) {
                throw new Error("Token faltando")
            }
            const payload = await new Authenticator().getTokenPayload(token)
            if (!payload) {
                throw new Error("Token inválido")
            }
            // if(payload.role !== USER_ROLES.ADMIN){
            //     throw new Error("Usuário não autorizado")
            // }
            const users = await new UserDatabase().getAll()
            const userMap = users.map((u) => {
              return {
                   id:u.id,
                   nome:u.name,
                   role:u.role
               }
            })
            return userMap
    };
    public deteleUser = async (input: any) => {
        const token = input.token
        const idToDelete = input.idToDelete

        const payload = new Authenticator().getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Apenas admins podem deletar usuários")
        }

        if (payload.id === idToDelete) {
            throw new Error("Não é possível deletar a própria conta")
        }

        const userDB = await new UserDatabase().findById(idToDelete)

        if (!userDB) {
            throw new Error("Usuário a ser deletado não encontrado")
        }

        await new UserDatabase().deleteUser(idToDelete)

        const response = {
            message: "Usuário deletado com sucesso"
        }

        return response
    }
}
