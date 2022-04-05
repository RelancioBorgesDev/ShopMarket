import React from "react";
import { Container, BtnAddCart, Preco, NomeProduto } from "./Item";

const Produto = () => {
  return (
    <Container>
      <NomeProduto>Banana</NomeProduto>
      <img src='' alt='' />
      <Preco>R$ 15,00</Preco>
      <BtnAddCart>Adicionar ao Carrinho</BtnAddCart>
    </Container>
  );
};

export default Produto;
