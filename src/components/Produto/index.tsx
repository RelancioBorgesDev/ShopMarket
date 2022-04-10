import React, { useCallback, useEffect, useState } from "react";
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
import { IProduto } from "../../types/ProdutoTypes";
import { useDispatch } from "react-redux";
import { addProdutoCart } from "../../store/modules/cart/actions";


const Produto = () => {
  const dispatch = useDispatch()
  const [catalogo, setCatalogo] = useState<IProduto[]>([]);
  

  useEffect(() => {
    api.get("/produtos").then((resposta) => {
      setCatalogo(resposta.data);
    });
  }, []);

  const handleAddProduto = useCallback((produto: IProduto) =>{
    dispatch(addProdutoCart(produto))
  },[dispatch])

  return (
    <>
      {catalogo.map((produto) => (
        <Container key={produto.id}>
          <Image src={produto.image} alt='' width={150} height={150} />
          <NomeProduto>{produto.nome}</NomeProduto>
          <Preco>R${produto.preco}</Preco>
          <Quantidade>
            <OpcaoQuantidade>-</OpcaoQuantidade>
            <Valor>{produto.qtd}</Valor>
            <OpcaoQuantidade>+</OpcaoQuantidade>
          </Quantidade>
          <BtnAddCart onClick={() => handleAddProduto(produto)}>COMPRAR</BtnAddCart>
        </Container>
      ))}
    </>
  );
};

export default Produto;
