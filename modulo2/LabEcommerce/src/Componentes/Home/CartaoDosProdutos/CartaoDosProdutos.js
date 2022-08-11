import React from "react";
import { Cartao, TextoDoCartao } from "./estiloDoCartao";


class CartaoDosProdutos extends React.Component {
  render() {
    return (
      <Cartao>
        <img src={this.props.imagem} />
        <TextoDoCartao>
          <p>{this.props.nome}</p>
          <p>R$ {this.props.valor},00</p>
          <button onClick={this.props.onClick}>Adicionar carrinho</button>
        </TextoDoCartao>
      </Cartao>
    );
  }
}

export default CartaoDosProdutos;
