import type { NextPage } from "next";
import Produto from "../components/Produto";
import Navbar from "../components/Nav/index";
import { Container } from "../styles/Home";
import { Provider } from "react-redux";
import store from "../store";

const Home: NextPage = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar/>
        <Container>
          <Produto />
        </Container>
      </Provider>
    </>
  );
};

export default Home;
