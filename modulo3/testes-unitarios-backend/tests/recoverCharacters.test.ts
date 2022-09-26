import { recoverCharacters } from "../src/recoverCharacters";

describe("Testing recoverCharacters function", () => {
    test("Should return recovered life for character[0]", () => {
        const validatorMock = jest.fn(() => {
            return true
        });
        const characters = [
            {
            name: "Storm",
            life: 1300,
            defense: 200,
            strength: 600,
        },
        {
            name: "Ciclop",
            life: 1500,
            defense: 400,
            strength: 800,
        }
    ];
       recoverCharacters(characters, validatorMock)

        expect(characters[0].life).toEqual(1500);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2)
    });
    test("Should return invalid character error", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return false
        });
        const characters = [
            {
            name: "",
            life: 1300,
            defense: 200,
            strength: 600,
        },
        {
            name: "Ciclop",
            life: 1500,
            defense: 400,
            strength: 800,
        }
    ];

        try{
            recoverCharacters(characters, validatorMock)  
        }catch(err:any) {
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1)
        } 
    });
    test("Should return 'invalid parameters' error", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return true
        });
        const characters = [
            {
            name: "Scorpion",
            life: 1300,
            defense: 200,
            strength: 600,
        }]
        try{
            recoverCharacters(characters, validatorMock)
        }catch(error:any) {
            expect(error.message).toBe("Missing parameters");
            expect(validatorMock).not.toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(0);
            expect(validatorMock).toHaveReturnedTimes(0) 
        }
    });

});