import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'aibofobia'", () => {
    const ehPalindromo = checaPalindromo("aibofobia");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'Ame o poema'", () => {
    const ehPalindromo = checaPalindromo("Ame o poema");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para '121'", () => {
    const ehPalindromo = checaPalindromo("121");
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna false para 'roma'", () => {
    const ehPalindromo = checaPalindromo("roma");
    expect(ehPalindromo).toEqual(false);
  });

});
