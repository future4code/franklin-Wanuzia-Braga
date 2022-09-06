import {validaData} from "./validaData";

describe("Verifica se função validaData está validando idade do cliente", () => {
    test("deve retornar false para idade de 7 anos", () => {
        expect(validaData("21-05-2015")).toBe(false)
    }),
    test("deve retornar true para idade de 134 anos", () => {
        expect(validaData("25-05-1888")).toBe(true)
    }),
    test("deve retornar true para idade de 18 anos", () => {
        expect(validaData("25-05-2004")).toBe(true)
    })

})