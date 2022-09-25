import { decreaseCharacterDefense } from "../src/decreaseCharacterDefense";

describe("Testing recoverCharacters function", () => {
    test("Should return recovered life for character[0]", () => {
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
});