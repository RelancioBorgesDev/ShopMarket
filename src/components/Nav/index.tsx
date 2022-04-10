import React from "react";
import { Nav, Button, Titulo, SpanTitulo } from "./NavStyle";
import { AiOutlineMenu } from "react-icons/ai";
import CartButton from "../CartButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav>
      <Button>
        <AiOutlineMenu />
      </Button>

      <Titulo>
        <Link href="/" passHref>
          <a>Shop<SpanTitulo>Market</SpanTitulo></a> 
        </Link>
      </Titulo>

      <CartButton/>
      
    </Nav>
  );
};

export default Navbar;
