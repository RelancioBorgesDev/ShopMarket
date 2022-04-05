import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ContagemItems } from "./CartStyle";
import { Button } from "./CartStyle";

const Cart = () => {
  return (
    <Link href='#' passHref>
      <Button>
        <AiOutlineShoppingCart />
        <ContagemItems>0</ContagemItems>
      </Button>
    </Link>
  );
};

export default Cart;
