import React from "react";

import PokemonItem from "./PokemonItem";

const PokemonList = ({ pokemones }) => {
  return (
    <div className="grid grid-cols-4">
      {pokemones.map((pok) => (
        <PokemonItem key={pok.name} url={pok.url} />
      ))}
    </div>
  );
};

export default PokemonList;
