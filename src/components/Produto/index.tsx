import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Container,
  BtnAddCart,
  Preco,
  NomeProduto,
  Quantidade,
  OpcaoQuantidade,
  Valor,
} from "./Item";
import api from "../../services/api";
import { IProduto } from "../../types/Produto";
import { useSelector } from "react-redux";

const Produto = () => {
  const [catalogo, setCatalogo] = useState<IProduto[]>([]);
  

  useEffect(() => {
    api.get("/produtos").then((resposta) => {
      setCatalogo(resposta.data);
    });
  }, []);

  return (
    <>
      {catalogo.map(({ id, image, nome, preco, qtd }) => (
        <Container key={id}>
          <Image src={image} alt='' width={150} height={150} />
          <NomeProduto>{nome}</NomeProduto>
          <Preco>R${preco}</Preco>
          <Quantidade>
            <OpcaoQuantidade>-</OpcaoQuantidade>
            <Valor>{qtd}</Valor>
            <OpcaoQuantidade>+</OpcaoQuantidade>
          </Quantidade>
          <BtnAddCart>COMPRAR</BtnAddCart>
        </Container>
      ))}
    </>
  );
};

export default Produto;
