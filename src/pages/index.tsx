import type { NextPage } from "next";
import Produto from "../components/Produto";
import Navbar from "../components/Nav/index";
import { Container } from "../styles/Home";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Produto />
      </Container>
    </>
  );
};

export default Home;
