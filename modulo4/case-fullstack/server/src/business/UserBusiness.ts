import { UserDatabase } from "../database/UserDatabase"
import { IUserDB, IUserInsertDTO, User, USER_ROLES } from "../models/User"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    private totalUsers: User[] = [];

    constructor(
        protected userDatabase:UserDatabase,
        protected idGenerator:IdGenerator,

    ) {}

    public registerUser(user: User): void {
        this.totalUsers.push(user)
    }

    public calculateTotalParticipations():number {
        let total:number = 0;
        this.totalUsers.forEach((user) => {
        total += user.getParticipation()
        })
        console.log(`total:${total}`)
        return total;

    }

    public create = async (input:IUserInsertDTO) => {
        const first_name = input.first_name
        const last_name = input.last_name
        const participation = input.participation

        if (!first_name || !last_name || !participation) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (typeof first_name !== "string" || first_name.length < 3) {
            throw new Error("Parâmetro 'First Name' inválido")
        }

        if (typeof last_name !== "string" || last_name.length < 3) {
            throw new Error("Parâmetro 'Last Name' inválido")
        }
        const totalParticipations = 100;
        const participationsUsers = this.calculateTotalParticipations()
        const totalParticipationsAvaliables = totalParticipations - participationsUsers
        if (typeof participation !== "number" || participation > totalParticipationsAvaliables || participation > totalParticipations) {
            throw new Error("Total de participações atingido ou valor informado é superior ao disponível no momento.")
        }

        const id = this.idGenerator.generate()
        const user = new User(
            id,
            first_name,
            last_name,
            participation,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)
        this.registerUser(user)

        const response:IUserInsertDTO = await this.getUserById(user.getId())

        return response
    };
    
    public getAllUsers = async () => {
        const usersDB = await this.userDatabase.getAll();

        return usersDB
    }

    public getUserById = async (id:string) => {
         const userDB = await this.userDatabase.findById(id)

        if (!userDB) {
            throw new Error("Usuário não encontrado")
        }
            const userResponse: IUserInsertDTO = {
                first_name: userDB.first_name,
                last_name: userDB.last_name,
                participation: userDB.participation
            }

            return userResponse
    };
    public deleteUser = async (idToDelete:string) => {
        
        const userDB = await this.userDatabase.findById(idToDelete)

        if (!userDB) {
            throw new Error("Usuário a ser deletado não encontrado")
        }

        await this.userDatabase.deleteUser(userDB.id);
        this.deleteUserFromList(userDB.id)
        const response = {
            message: "Usuário deletado com sucesso"
        }

        return response
    };
    public deleteUserFromList(id: string): void {
        let registrationIndex = undefined;
    
        for (let i = 0; i < this.totalUsers.length; i++) {
          if (this.totalUsers[i].getId() === id) {
            registrationIndex = i;
          }
        }
    
        if (registrationIndex !== undefined) {
          this.totalUsers.splice(registrationIndex, 1);
        }
      }
}