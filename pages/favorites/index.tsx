import { Card, Grid } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { pokemons } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons);
  }, []);

  return (
    <Layout title="Pokémons favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritePokemons.map((pokemonId) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
              <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                  width="100%"
                  height={140}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritesPage;
