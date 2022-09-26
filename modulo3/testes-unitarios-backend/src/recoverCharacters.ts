import { Character } from "./models/Character"

export const recoverCharacters = (
    characters: Character[],  
    validator: (input: Character) => boolean): Character[] =>{
 if(characters.length < 2 || characters.length > 2) {
     throw new Error ("Missing parameters")
 }
 if (!validator(characters[0]) || !validator(characters[1])) {
    throw new Error("Invalid character");
  }
 characters.forEach((character) => {
return (
    character.life = 1500
)})
return characters
}