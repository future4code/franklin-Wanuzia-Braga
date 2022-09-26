import { decreaseCharacterDefense } from "../src/decreaseCharacterDefense";

describe("Testing decreaseCharacterDefense function", () => {
    test("Should return decreased defense for character", () => {
        const validatorMock = jest.fn(() => {
            return true
        });
        const character = 
            {
            name: "Storm",
            life: 1300,
            defense: 400,
            strength: 600,
        };

       decreaseCharacterDefense(character, 300, validatorMock)

        expect(character.defense).toEqual(300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1)
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
            decreaseCharacterDefense(character, 500, validatorMock)
        }catch(error:any) {
            expect(error.message).toBe("Invalid new value");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1) 
        }
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
            decreaseCharacterDefense(character, 100, validatorMock)  
        }catch(err:any) {
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1)
        } 
    });
});