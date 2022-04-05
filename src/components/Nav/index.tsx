import React from "react";
import { Nav, Button, Titulo, SpanTitulo } from "./NavStyle";
import { AiOutlineMenu } from "react-icons/ai";
import Cart from "../Cart";

const Navbar = () => {
  return (
    <Nav>
      <Button>
        <AiOutlineMenu />
      </Button>

      <Titulo>
        Shop<SpanTitulo>Market</SpanTitulo>
      </Titulo>

      <Cart />
    </Nav>
  );
};

export default Navbar;
