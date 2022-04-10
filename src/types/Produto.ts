export interface IProduto {
    id: number;
    image: string;
    nome: string;
    preco: number;
    qtd: number;
}

export interface ICartItem{
    produto: IProduto;
    quantidade: IProduto["qtd"];
}

export interface ICartState{
    items: ICartItem[];
}