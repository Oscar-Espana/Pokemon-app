import React from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./";

interface Props {
  favoritePokemons: number[];
}

export const FavoritePokemons = ({ favoritePokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((pokemonId) => (
        <FavoriteCardPokemon key={pokemonId} pokemonId={pokemonId} />
      ))}
    </Grid.Container>
  );
};
