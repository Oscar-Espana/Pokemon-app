import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
const HomePage: NextPage = (props) => {
  return (
    <Layout title="Listado de Pokemons">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};
export default HomePage;
