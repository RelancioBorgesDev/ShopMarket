import styled from 'styled-components'
import { corIcones, corTitulo } from './Variaveis'

const ContainerProduto = styled.div`
width: 50%;
  height: 50%;
  background-color: ${corTitulo};
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: flex-start;
  align-self: flex-start;

  margin-top: 1rem;
  
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem;
`

const NomeProduto = styled.p`
    font-size: 1rem;
    color: ${corIcones};
    font-weight: 700;
`

const PrecoProduto = styled.h4`
    color: ${corIcones};
    font-weight: 500;
`

const QuantidadeProduto = styled.h4`
    color: ${corIcones};
    font-weight: 300;
`

const SubTotalProduto = styled.h4`
    color: #222;
    font-weight: 700;
`

export {
    ContainerProduto,
    NomeProduto,
    PrecoProduto,
    QuantidadeProduto,
    SubTotalProduto,
}