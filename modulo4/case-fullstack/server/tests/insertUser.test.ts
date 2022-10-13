import { BaseDatabase } from "../src/database/BaseDatabase";
import { IUserInsertDTO, User, USER_ROLES } from "../src/models/User";
import { UserDatabase } from "../src/database/UserDatabase";
import { UserController } from "../src/controller/UserController";
import { UserBusiness } from "../src/business/UserBusiness";
import { IdGenerator } from "../src/services/IdGenerator";

describe("Testing async functions", () => {
test("should connect to MySql", async () => {
    const [tables] = await BaseDatabase.connection.raw(
        "SHOW TABLES;"
    )

    expect(tables).toBeDefined();
    expect(tables).toContainEqual({
        'Tables_in_franklin-wanuzia-braga': 'Cubo_Users'
 })});

test("Should create an user", async () => {
    const user: User = new User (
    "abc-123-456",
    "José",
    "Maria",
    15,
    USER_ROLES.ADMIN
    ) 
    const id = user.getId()

    await new UserDatabase().createUser(user)
  
    const userFromDb = await new UserDatabase().findById(id);

    expect(userFromDb).not.toBe(undefined);
    expect(userFromDb).toEqual({
      id: "abc-123-456",
      first_name: "José",
      last_name: "Maria",
      participation: 15,
      role: "ADMIN"
    });
    
  });
  afterAll(async () => {
    await new UserDatabase().deleteUser("abc-123-456")
    await BaseDatabase.connection.destroy()
  });

  test("should return  1 asssertion", async () => {
      expect.assertions(1)
    try {
        const user: User = new User (
            "abc-123-456",
            "José",
            "Maria",
            15,
            USER_ROLES.ADMIN
    ) 
  
    await new UserDatabase().createUser(user)
    await new UserDatabase().createUser(user)

    } catch (err) {
      expect(err).not.toBe(undefined)
    }
  });


});