import { RecipeDataBase } from "../database/RecipeDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { IDeleteUserInputDTO, IFollowInputDBDTO, IFollowInputDTO, IGetUserByIdInputDTO, IGetUserProfileOutputDTO, ILoginInputDTO, ISignupInputDTO, ISignupOutputDTO } from "../models/DTO's/UserDTOs"
import { User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        protected userDatabase:UserDatabase,
        protected authenticator:Authenticator,
        protected idGenerator:IdGenerator,
        protected hashManager:HashManager
    ) {}
    public signup = async (input:ISignupInputDTO) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || !email || !password) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (typeof name !== "string" || name.length < 3) {
            throw new Error("Parâmetro 'name' inválido")
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

        const userDB = await this.userDatabase.findByEmail(email)

        if (userDB) {
            throw new Error("E-mail já cadastrado")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response:ISignupOutputDTO = {
            message: "Cadastro realizado com sucesso",
            token
        }

        return response
    };
    public login = async (input: ILoginInputDTO) => {
        const email = input.email
        const password = input.password

        if (!email || !password) {
            throw new Error("Um ou mais parâmetros faltando")
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

        const userDB = await this.userDatabase.findByEmail(email)

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

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response:ISignupOutputDTO = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    };
    public getUserProfile = async (token:string) => {

        if(!token) {
            throw new Error("Token inválido ou faltando!")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const id = payload.id 
        const usersDB = await this.userDatabase.findById(id)

            const userResponse: IGetUserProfileOutputDTO = {
                id: usersDB.id,
                name: usersDB.name,
                email: usersDB.email
            }

            return userResponse
    };
    public getUserProfileById = async (input:IGetUserByIdInputDTO) => {
        const token = input.token
        const id = input.idProfile

        if(!token) {
            throw new Error("Token inválido ou faltando!")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const userDB = await this.userDatabase.findById(id)

        if (!userDB) {
            throw new Error("Usuário não encontrado")
        }
            const userResponse: IGetUserProfileOutputDTO = {
                id: userDB.id,
                name: userDB.name,
                email: userDB.email
            }

            return userResponse
    };
    public deleteUser = async (input: IDeleteUserInputDTO) => {
        const token = input.token
        const idToDelete = input.idToDelete

        if (!token) {
            throw new Error("Token faltando")
        }
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Apenas admins podem deletar usuários")
        }

        if (payload.id === idToDelete) {
            throw new Error("Não é possível deletar a própria conta")
        }

        const userDB = await this.userDatabase.findById(idToDelete)

        if (!userDB) {
            throw new Error("Usuário a ser deletado não encontrado")
        }
        
        await new RecipeDataBase().deleteUserRecipes(userDB.id)

        await this.userDatabase.deleteUser(idToDelete)

        const response = {
            message: "Usuário deletado com sucesso"
        }

        return response
    };

    public followUser = async (input: IFollowInputDTO) => {
        const token = input.token
        const id = input.id_followed

        if (!token) {
            throw new Error("Token faltando")
        }
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }
        const userFollowed = await this.userDatabase.findById(id);
        const userFollower = await this.userDatabase.findById(payload.id);

        if (!userFollowed) {
            throw new Error("Usuário a ser seguido não encontrado")
        }

        if (!userFollower) {
            throw new Error("Usuário seguidor não encontrado")
        }

        if (payload.id === userFollowed.id) {
            throw new Error("Não é possível seguir a si mesmo.")
        }
        const followers:IFollowInputDBDTO = {
            id_followed: userFollowed.id,
            id_follower: userFollower.id
        }

        await this.userDatabase.followUser(followers)
        const response = {
            message: "Usuário seguido com sucesso"
        }

        return response
    };

}