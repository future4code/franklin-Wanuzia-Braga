import { IUserDB, USER_ROLES } from "../../models/User";


export const users: IUserDB[] = [
    {
        id: "abc-123",
        first_name: "Jojo",
        last_name: "Alencar",
        participation: 35,
        role: USER_ROLES.NORMAL
    },
    {
        id: "def-456",
        first_name: "Lázaro",
        last_name: "Assis",
        participation: 25,
        role: USER_ROLES.NORMAL
    },
    {
        id: "ghi-789",
        first_name: "Clara",
        last_name: "Nunes",
        participation: 30,
        role: USER_ROLES.NORMAL
    }
]