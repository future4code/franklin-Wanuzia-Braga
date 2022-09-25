import { increaseCharacterStrength } from "../src/increaseCharacterStrength";

describe("Testing increaseCharacterStrength function", () => {
    test("Should return new strength for character", () => {
        const validatorMock = jest.fn(() => {
            return true
        });
        const character = 
            {
            name: "Storm",
            life: 1300,
            defense: 200,
            strength: 600,
        };
       increaseCharacterStrength(character, 800, validatorMock)

        expect(character.strength).toEqual(800);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1)
    });
    test("Should return 'invalid character' error", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return false
        });
        const character = 
            {
            name: "",
            life: 1300,
            defense: 200,
            strength: 600,
        };

        try{
            increaseCharacterStrength(character, 700, validatorMock)  
        }catch(err:any) {
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1)
        } 
    });
    test("Should return 'invalid new value' error", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return true
        });
        const character = 
            {
            name: "Scorpion",
            life: 1300,
            defense: 200,
            strength: 600,
        };
        try{
            increaseCharacterStrength(character, 500, validatorMock)
        }catch(error:any) {
            expect(error.message).toBe("Invalid new value");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1) 
        }
    });
});