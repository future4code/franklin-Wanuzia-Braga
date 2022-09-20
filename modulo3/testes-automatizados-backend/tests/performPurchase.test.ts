import { User } from "../src/models/User";
import { performPurchase } from "../src/utils/performPurchase";

describe("Testing performPurchase function", () => {
   test("Testing balance greater than value", () => {
    const user: User = {
        name: "Wanuzia", 
        balance: 500
    }
    const result = performPurchase(user, 100)

    expect(result).toEqual({
        name: "Wanuzia",
        balance: 400
    })
});
test("Testing balance equal than value", () => {
    const user: User = {
        name: "Wanuzia", 
        balance: 200
    }
    const result = performPurchase(user, 200)

    expect(result).toEqual({
        name: "Wanuzia",
        balance: 0
    })
});
test("Testing balance less than value", () => {
    const user: User = {
        name: "Wanuzia", 
        balance: 200
    }
    const result = performPurchase(user, 400)

    expect(result).not.toBeDefined()
});
})


