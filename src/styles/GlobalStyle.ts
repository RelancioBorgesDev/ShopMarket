import { createGlobalStyle } from 'styled-components'
import {corFundo} from './Variaveis'

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: #FFF;
    }

    body{
        background-color: ${corFundo}
    }
`

export default GlobalStyle