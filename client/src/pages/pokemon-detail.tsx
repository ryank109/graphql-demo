import React from 'react';
import { fetchPokemons } from '../api/pokemon';
import { useFetch } from '../hooks/use-fetch';

export const PokemonDetailPage = () => {
  const pokemons = useFetch(fetchPokemons, [])();
  return (
      <ul>
        {pokemons.map(({ name, url }) => (
          <li>{name}: {url}</li>
        ))}
      </ul>
  );
};
