import styled from 'styled-components';
import { corContagem, corIcones } from '../../styles/Variaveis';

const ContagemItems = styled.span`
    position: absolute;
    left: -8px;
    bottom: -8px;
    font-size: 0.9rem;
    border-radius: 50%;
    background-color: ${corContagem};
    padding: 0.2rem;
    color: ${corIcones};
    font-weight: 700;
`
const Button = styled.button`
    position: relative;
    background: transparent;
    border: none;
    color: ${corIcones};
    font-size: 1.5rem;

    display: flex;
    align-items: center; 
`
export {
    ContagemItems,
    Button
}