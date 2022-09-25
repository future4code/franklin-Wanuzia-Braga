import { Character } from "./models/Character";


export const decreaseCharacterDefense = (
    character: Character, 
    newDefense: number,
    validator: (input: Character) => boolean): void => {
    if (!validator(character)) {
            throw new Error("Invalid character");
          }
    if(newDefense > character.defense) {
        throw new Error("Invalid new value")
    }
    character.defense = newDefense
}