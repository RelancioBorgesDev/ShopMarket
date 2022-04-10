import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useCart } from "../../hooks/useCart";
import { IState } from "../../store";
import { ICartItem } from "../../types/ProdutoTypes";
import { ContagemItems } from "./CartStyle";
import { Button } from "./CartStyle";

const CartButton = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const { quantidade, setQuantidade } = useCart();
  let qnt = cart.length;

  useEffect(() => {
    setQuantidade(qnt);
  }, [qnt]);

  return (
    <Link href='/Cart' passHref>
      <Button>
        {console.log(`Cart Qnt ${quantidade}`)}
        <AiOutlineShoppingCart />
        <ContagemItems>{quantidade}</ContagemItems>
      </Button>
    </Link>
  );
};

export default CartButton;
