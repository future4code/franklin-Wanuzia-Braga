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
});