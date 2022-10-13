import { UserBusiness } from "../src/business/UserBusiness";
import { BaseDatabase } from "../src/database/BaseDatabase";
import { UserDatabase } from "../src/database/UserDatabase";
import { IUserInsertDTO } from "../src/models/User";
import { IdGenerator } from "../src/services/IdGenerator";

  test("should return error while value is bigger than avaliable", async () => {
    expect.assertions(1)
    try{
          const user: IUserInsertDTO = {
            first_name: "José",
            last_name: "Maria",
            participation: 150
        }
   
    const result = await new UserBusiness(new UserDatabase(), new IdGenerator()).create(user)
    const totalParticipe = await new UserBusiness(new UserDatabase(), new IdGenerator()).calculateTotalParticipations()   
    expect(totalParticipe).toBe(0)

    }catch(err){
        expect(err).not.toBe(undefined)

    }
      
    // expect(user.participation).toBe(150)
    // expect(result).toEqual("Total de participações atingido ou valor informado é superior ao disponível no momento.")
});
test("should include value of user participation", async () => {

          const user: IUserInsertDTO = {
            first_name: "José",
            last_name: "Maria",
            participation: 50
        }
   
    const totalParticipe = await new UserBusiness(new UserDatabase(), new IdGenerator()).calculateTotalParticipations()   
    const result = await new UserBusiness(new UserDatabase(), new IdGenerator()).create(user)
    expect(totalParticipe).toBe(0)
    expect(user.participation).toBe(50)

});

afterAll(async () => {
    await new UserDatabase().deleteUser("abc-123-456")
    await BaseDatabase.connection.destroy()
  });