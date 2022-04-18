import React, { FC } from "react";
import { Layout } from "../../components/layouts";

interface Props {
  pokemon: any;
}

const PokemonPage: FC<Props> = () => {
  return (
    <Layout>
      <h1>Hola</h1>
    </Layout>
  );
};

export default PokemonPage;
