import { Casino, LOCATION, NACIONALITY, User } from "../src/models/Casino"
import { verifyAge } from "../src/utils/verifyAge";

describe("Testing verifyAge function", () => {
    test("Should return one allowed brazilian", () => {
        const brazilianAllowed: User = {
            name: "Wanuzia",
            age: 30,
            nacionality: NACIONALITY.BRAZILIAN,
        };
        const casino: Casino = {
            name: "Badalajara",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [brazilianAllowed]);
        expect(result.brazilians.allowed).toEqual(["Wanuzia"])
    });

    test("Should return one allowed american", () => {
        const americanAllowed: User = {
            name: "Khenzhero",
            age: 30,
            nacionality: NACIONALITY.AMERICAN,
        };
        const casino: Casino = {
            name: "Las Vegans",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [americanAllowed]);
        expect(result.americans.allowed).toEqual(["Khenzhero"])
    });

    test("Should return two unallowed americans and two unallowed brazilians", () => {
        const americanUnallowed: User = {
            name: "Khenzhero",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };
        const brazilianUnallowed: User = {
            name: "Wanuzia",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };
        const casino: Casino = {
            name: "Las Vegans",
            location: LOCATION.EUA,
        };

        const result = verifyAge(casino, [americanUnallowed, americanUnallowed, brazilianUnallowed, brazilianUnallowed]);
        expect(result.americans.unallowed).toEqual(["Khenzhero", "Khenzhero"]);
        expect(result.brazilians.unallowed).toEqual(["Wanuzia", "Wanuzia"])
    });

    test("Should return two unallowed brazilians and two allowed americans", () => {
        const americanallowed: User = {
            name: "Khenzhero",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
        };
        const brazilianUnallowed: User = {
            name: "Wanuzia",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };
        const casino: Casino = {
            name: "Las Vegans",
            location: LOCATION.EUA,
        };

        const result = verifyAge(casino, [americanallowed, americanallowed, brazilianUnallowed, brazilianUnallowed]);
        expect(result.americans.allowed).toEqual(["Khenzhero", "Khenzhero"]);
        expect(result.brazilians.unallowed).toEqual(["Wanuzia", "Wanuzia"])
    });

})