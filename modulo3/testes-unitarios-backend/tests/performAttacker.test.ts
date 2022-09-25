import { Character } from "../src/models/Character";
import { performAttack } from "../src/performAttack";

describe("Testing performAttacker function", () => {
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        });
        const attacker: Character = {
            name: "Storm",
            life: 1500,
            defense: 200,
            strength: 600,
        };
        const defender: Character = {
            name: "Ciclop",
            life: 1500,
            defense: 400,
            strength: 800,
        };
        performAttack(attacker, defender, validatorMock)

        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2)
    });
    test("Should return invalid character error", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return false
        });
        const attacker: Character = {
            name: "",
            life: 1500,
            defense: 200,
            strength: 600,
        };
        const defender: Character = {
            name: "Ciclope",
            life: 1500,
            defense: 400,
            strength: 800,
        };

        try{
            performAttack(attacker, defender, validatorMock)  
        }catch(err:any) {
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1)
        } 
    })
})









/*Vamos criar mock da função validateCharacter. */
// test("Creating Mocks", () => {
//     const validatorMock = jest.fn(() => {
// 			return true
// 		});
// });
// test("Creating Mocks", () => {
//     const validatorMock = jest.fn(() => {
// 			return false
// 		});
// });
//==========================================
//treino de teste
// test("Showing jest.fn", () => {
// 	const mock = jest.fn(() => {
// 		const attacker = {
// 				name: "Astrodev",
// 				age: 29
// 		}
// 		return attacker
// 	})
// })

