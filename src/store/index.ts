import { createStore } from 'redux';
import { ICartState } from '../types/ProdutoTypes';
import rootReducers from './modules/rootReducers'

export interface IState{
    cart: ICartState
}

const store = createStore(rootReducers)

export default store