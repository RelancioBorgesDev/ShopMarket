import styled from "styled-components";
import {corIcones, corTitulo,navFundo} from '../../styles/Variaveis'


const Container = styled.div`
  width: 80%;
  height: 100%;
  background-color: ${navFundo};
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-self: center;
  justify-content:center;
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem;
`
const BtnAddCart = styled.button`
    width: 60%;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: ${corIcones};
    border: none;
`
const Preco = styled.h4`
    color: ${corTitulo};
    font-weight: 500;
`
const NomeProduto = styled.h1`
    color: ${corTitulo};
    font-weight: 700;
`
export {
    Container,
    BtnAddCart,
    Preco,
    NomeProduto
}