import { validateCharacter } from "../src/validateCharacter";


describe("Testing validateCharacter function", () => {
   
test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  }); 
  test("Should return false for life equal 0", () => {
    const result = validateCharacter({
      name: "Storm",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  }); 
  test("Should return false for strength equal 0", () => {
    const result = validateCharacter({
      name: "Storm",
      life: 150,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  }); 
  test("Should return false for defense equal 0", () => {
    const result = validateCharacter({
      name: "Storm",
      life: 150,
      strength: 100,
      defense: 0,
    });

    expect(result).toBe(false);
  }); 
  test("Should return false for negative values to life || strength || defense", () => {
    const result = validateCharacter({
      name: "Storm",
      life: 150,
      strength: -100,
      defense: 500,
    });

    expect(result).toBe(false);
  }); 
  test("Should return true when are all valid inputs", () => {
    const result = validateCharacter({
      name: "Storm",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  }); 
})
