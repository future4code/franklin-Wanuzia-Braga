import { tornaMaiuscula } from "./ex3";

describe("Torna primeira letra de cada palavra da frase em maiúscula", () => {
    it("retorna frase com a primeira letra de cada palavra maiúscula", () => {
    const configura = tornaMaiuscula("amo chocolate");
    expect(configura).toEqual("Amo Chocolate");
});
});
