import styled from 'styled-components';
import {navFundo, corIcones, corTitulo, corContagem} from '../../styles/Variaveis'

//Nav e SideBar
const Nav = styled.nav`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${navFundo};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
`

//Logo
const Titulo = styled.h2`
    display: flex;
    align-self: center;
    color: ${corTitulo};
`

const SpanTitulo = styled.span`
    color: ${corIcones};
`

//Botão Cart e ExitButton
const Button = styled.button`
    position: relative;
    background: transparent;
    border: none;
    color: ${corIcones};
    border-radius: 0.5rem;
    font-size: 1.5rem;

    display: flex;
    align-items: center; 
`

export {
    Nav,
    Button,
    Titulo,
    SpanTitulo,
    
}