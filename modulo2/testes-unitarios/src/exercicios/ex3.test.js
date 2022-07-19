import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para array [2, 3, 8, 8]", () => {
    const ehduplicado = checaItensDuplicados([2, 3, 8, 8]);
    expect(ehduplicado).toEqual(true);
});

it("retorna true para array [25, 13, 58, 19, 13]", () => {
    const ehduplicado = checaItensDuplicados([25, 13, 58, 19, 13]);
    expect(ehduplicado).toEqual(true);
});

it("retorna true para array [-25.2, 13, 0.51, 0.5, 19, 0.51, 13, -25.2]", () => {
    const ehduplicado = checaItensDuplicados([-25.2, 13, 0.51, 0.5, 19, 0.51, 13, -25.2]);
    expect(ehduplicado).toEqual(true);
});

//A função está falhando neste teste:
it("retorna true para array [Soja, jiló, kilo, soja]", () => {
    const ehduplicado = checaItensDuplicados(["Soja", "jiló", "kilo", "soja"]);
    expect(ehduplicado).toEqual(true);
});
});
