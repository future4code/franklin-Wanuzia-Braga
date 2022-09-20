import { BaseDatabase } from "../src/cookenu-backend/BaseDatabase"
import { User, USER_ROLES } from "../src/cookenu-backend/models/User";
import { UserDatabase } from "../src/cookenu-backend/UserDatabase";

describe("Testing Database", () => {
test("should connect to MySql", async () => {
    const [tables] = await BaseDatabase.connection.raw(
        "SHOW TABLES;"
    )
    console.log(tables);
    expect(tables).toBeDefined()

    })
});

test("Should create an user", async () => {
    const user: User = new User (
    "abc-123-456",
    "Wanuzia",
    "wanuzia@email.com",
    "abc123",
    USER_ROLES.ADMIN
    ) 
    const id = user.getId()

    await new UserDatabase().createUser(user)
  
    const userFromDb = await new UserDatabase().findById(id);

    expect(userFromDb).not.toBe(undefined);
    expect(userFromDb).toEqual({
      id: "abc-123-456",
      name: "Wanuzia",
      email: "wanuzia@email.com",
      password: "abc123",
      role: "ADMIN"
    });
    
  });
  afterAll(async () => {
    await new UserDatabase().deleteUser("abc-123-456")
    await BaseDatabase.connection.destroy()
})

