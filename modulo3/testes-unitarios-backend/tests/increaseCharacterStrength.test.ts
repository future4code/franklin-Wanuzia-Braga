import { increaseCharacterStrength } from "../src/increaseCharacterStrength";

describe("Testing recoverCharacters function", () => {
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
});