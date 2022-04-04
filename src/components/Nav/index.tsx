import React from "react";
import {
  Nav,
  Button,
  Titulo,
  SpanTitulo,
  ContagemItems,
  SideMenu,
  ListaSideMenu,
  ExitButton,
  SideContainer,
} from "./NavStyle";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineFullscreenExit,
} from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  return (
    <Nav>
      <Button>
        <AiOutlineMenu />
      </Button>

      <Titulo>
        Shop<SpanTitulo>Market</SpanTitulo>
      </Titulo>

      <Link href='#' passHref>
        <Button>
          <AiOutlineShoppingCart />
          <ContagemItems>0</ContagemItems>
        </Button>
      </Link>
    </Nav>
  );
};

export default Navbar;
