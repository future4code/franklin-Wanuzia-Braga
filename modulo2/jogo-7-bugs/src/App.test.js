import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";


describe('Na Página de Produtos', () => {
  test("Teste Bug1 - deveria retornar todos os 6 produtos, pois valor mínimo digitado é 2", async () => {
    const { getByPlaceholderText, getAllByText } = render(<App />);
    //encontrar no DOM o input
    const input = getByPlaceholderText(/Mínimo/i)
    // inserir um valor no input
    await userEvent.type(input, '2')
    //encontrar todos os 6 produtos,pois o valor mínimo é 2
    const produtos = getAllByText(/comprar/i)
    //testar de fato se todos os produtos estão sendo renderizados
    expect(produtos.length).toBe(6)
    //corrigi a função pois não estava considerando valor igual ao digitado, apenas valores maiores
  });
  test("Teste Bug2 - deveria retornar 1 produto, pois valor máximo digitado é 2", async () => {
    const { getByPlaceholderText, getAllByText } = render(<App />);
    const input = getByPlaceholderText(/Máximo/i)
    await userEvent.type(input, '2')
    const produtos = getAllByText(/comprar/i)
    expect(produtos.length).toBe(1)
    //corrigi a função pois não estava considerando valor igual ao digitado, apenas valores menores
  });
});

describe('Na Página do Carrinho', () => {
  test("Teste Bug3 - botão deveria estar desabilitado ao tentar finalizar compra com o carrinho vazio", () => {
    const { getByLabelText, getByText, getByRole } = render(<App />);
    const goToCart = getByLabelText(/carrinho/i)
    userEvent.click(goToCart)
    const cartVazio = getByText(/carrinho vazio/i)
    expect(cartVazio.textContent).toBe("Carrinho Vazio")
    const finalizar = getByRole('button', { name: /finalizar compra/i })
    expect(finalizar).toHaveProperty("disabled", true)

  });
});
