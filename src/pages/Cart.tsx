import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Nav";
import { IState } from "../store";
import { ICartItem } from "../types/ProdutoTypes";

export default function Cart() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <>
      <Navbar />
      {cart.map((item) => {
        <div>
          <h1>{item.produto.nome}</h1>
          <p>{item.produto.preco}</p>
          <h1>{(item.produto.preco * item.produto.qtd).toFixed(2)}</h1>
        </div>;
      })}
    </>
  );
}
