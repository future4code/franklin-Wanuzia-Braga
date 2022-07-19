import { ordenaArray } from "./desafio1";

describe("Organiza array de apenas números em ordem crescente", () => {
    it("retorna array ordenado de [2, 4, 1, 8]", () => {
    const ordena = ordenaArray([2, 4, 1, 8]);
    expect(ordena).toEqual([1, 2, 4, 8]);
});
it("retorna array ordenado de [20, -1, -4, 0, 6]", () => {
    const ordena = ordenaArray([20, -1, -4, 0, 6]);
    expect(ordena).toEqual([-4, -1, 0, 6, 20]);
});
it("retorna array ordenado de [4, 7, 1, 3]]", () => {
    const ordena = ordenaArray([4, 7, 1, 3]);
    expect(ordena).toEqual([1, 3, 4, 7]);
});
});
