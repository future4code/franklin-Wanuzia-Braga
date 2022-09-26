import { Character } from "./models/Character";


export const increaseCharacterStrength = (
    character: Character, 
    newStrength: number,
    validator: (input: Character) => boolean): void => {
    if (!validator(character)) {
            throw new Error("Invalid character");
          }
    if(character.strength > newStrength) {
        throw new Error("Invalid new value")
    }
    character.strength = newStrength
}