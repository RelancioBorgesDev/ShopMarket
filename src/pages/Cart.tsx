import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Nav";
import { IState } from "../store";
import {
  ContainerProduto,
  NomeProduto,
  PrecoProduto,
  QuantidadeProduto,
  SubTotalProduto,
} from "../styles/Cart";
import { ICartItem } from "../types/ProdutoTypes";

export default function Cart() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <>
      <Navbar />
      {cart.map(({ produto }) => (
        <ContainerProduto key={produto.id}>
          <NomeProduto>{produto.nome}</NomeProduto>
          <PrecoProduto>R${produto.preco}</PrecoProduto>
          <QuantidadeProduto>Quantidade: {produto.qtd}</QuantidadeProduto>
          <SubTotalProduto>
            SubTotal: {(produto.preco * produto.qtd).toFixed(2)}{" "}
          </SubTotalProduto>
        </ContainerProduto>
      ))}
    </>
  );
}
