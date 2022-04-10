import { useContext } from "react";
import { CartContext } from "../contexts/CartButtonQuantity";

export function useCart(){
    const context = useContext(CartContext);
    const { quantidade,setQuantidade } = context;
   
    return {quantidade, setQuantidade}
}