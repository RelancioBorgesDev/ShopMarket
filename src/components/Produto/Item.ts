import styled from "styled-components";
import {corIcones, corTitulo, navFundo, corBtn} from '../../styles/Variaveis'


const Container = styled.div`
  width: 60%;
  height: 50%;
  background-color: ${corTitulo};
  margin: 1rem 1rem;

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
const NomeProduto = styled.p`
    font-size: 1rem;
    color: ${navFundo};
    font-weight: 700;
`
const Preco = styled.h4`
    color: ${navFundo};
    font-weight: 700;
`
const Quantidade = styled.div`
    width: 100px;
    display: flex;
    align-self: center;
    justify-self: center;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
const OpcaoQuantidade = styled.button`
    width: 20px;
    height: 20px;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    background-color: ${corBtn};
    color: #fff;
    border-radius: 0.2rem;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

`
const Valor = styled.span`
    font-size: 1.1rem;
    font-weight: 700;
    color: ${navFundo};
`


const BtnAddCart = styled.button`
    width: 100px;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    background-color: ${corBtn};
    color: #fff;
    border-radius: 0.2rem;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
`


export {
    Container,
    BtnAddCart,
    Preco,
    Quantidade,
    OpcaoQuantidade,
    Valor,
    NomeProduto
}