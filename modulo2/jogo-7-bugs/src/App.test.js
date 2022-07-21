import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import ProductItem from "./components/ProductItem/ProductItem";
import CartScreen from "./screens/CartScreen/CartScreen";
import { render } from "../src/test-utils/customRender.js"

test("Teste 1", () => {
  render(<App />);

  userEvent.click(
    screen.getByRole("button", {
      name: /carrinho/i
    })
  );
});

test("Teste 2 - pega botão remover", () => {
  render(<ProductItem />);
 screen.getByRole('button', {name: /remover/i});
// //  expect(removeButton).toBeInTheDocument()
 });

test("Teste 3 - pega botão finalizar compra", () => {
  render(<App />);
  screen.getByRole('button', {
    name: /finalizar compra/i
  })
//  expect(finalizarButton).toBeInTheDocument()
 });