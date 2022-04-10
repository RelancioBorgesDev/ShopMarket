import { ReactNode } from "react";

export interface CartContextProps {
    children: ReactNode;
  }
  
 export interface ICartContext {
    quantidade: number;
    setQuantidade: (newQuantidade: number) => void;
  }