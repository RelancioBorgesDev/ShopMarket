import React from "react";
import Image from 'next/image';
import { Container, BtnAddCart, Preco, NomeProduto, Quantidade, OpcaoQuantidade, Valor } from "./Item";

const Produto = () => {
  return (
    <Container>
      <Image src='/nescau.webp' alt='' width={150} height={150}/>
      <NomeProduto>Achocolatado Nescau Lata 400g</NomeProduto>
      <Preco>R$ 15,00</Preco>
      <Quantidade>
        <OpcaoQuantidade>-</OpcaoQuantidade>
          <Valor>1</Valor>
        <OpcaoQuantidade>+</OpcaoQuantidade>
      </Quantidade>
      <BtnAddCart>COMPRAR</BtnAddCart>
    </Container>
  );
};

export default Produto;
