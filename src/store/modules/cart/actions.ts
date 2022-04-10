import { IProduto } from "../../../types/ProdutoTypes";

export function addProdutoCart(produto: IProduto){
    return{
            type: "ADD_PRODUCT_TO_CART",
            payload:{
                produto
            },  
        }   
}

export function verificaQuantidadeCart(quantidade: number){
    return {
        type: "CART_LENGTH",
        payload:{
            quantidade
        }
    }
}