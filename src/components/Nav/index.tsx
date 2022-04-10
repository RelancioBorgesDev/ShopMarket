import React from "react";
import { Nav, Button, Titulo, SpanTitulo } from "./NavStyle";
import { AiOutlineMenu } from "react-icons/ai";
import CartButton from "../CartButton";

const Navbar = () => {
  return (
    <Nav>
      <Button>
        <AiOutlineMenu />
      </Button>

      <Titulo>
        Shop<SpanTitulo>Market</SpanTitulo>
      </Titulo>

      <CartButton />
      
    </Nav>
  );
};

export default Navbar;
