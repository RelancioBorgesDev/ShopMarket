import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import CartProvider from '../contexts/CartButtonQuantity'
import store from '../store'
import  GlobalStyle  from '../styles/GlobalStyle'


function MyApp({ Component, pageProps }: AppProps) {
  return(
      <Provider store={store}>
        <CartProvider>
        <GlobalStyle/>
        <Component {...pageProps} />
        </CartProvider>
      </Provider>
  ) 
}

export default MyApp
