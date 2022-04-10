import { createContext, useState } from "react";
import { CartContextProps, ICartContext } from "../types/CartContextTypes";

const initialValue = {
  quantidade: 0,
  setQuantidade: () => {},
};

export const CartContext = createContext<ICartContext>(initialValue);

export default function CartProvider({ children }: CartContextProps) {
  const [quantidade, setQuantidade] = useState(initialValue.quantidade);
  return (
    <CartContext.Provider value={{ quantidade, setQuantidade }}>
      {children}
    </CartContext.Provider>
  );
}
