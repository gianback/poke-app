import React, { useContext, useState } from "react";
import TypeItem from "./StyleTypeItem";
import img404 from "../assets/not-found.jpg";
import { FavoritesContext } from "../context/FavoritesContext";
const PokemonItem = ({ pokemon }) => {
  const [pokemonFav, setPokemonFav] = useState(false);
  const { setAndDeleteFavorites } = useContext(FavoritesContext);
  const prueba = (pokemon) => {
    setPokemonFav(!pokemonFav);
    setAndDeleteFavorites(pokemon);
    /*  console.log(favorites); */
  };
  return (
    /*    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 overflow-hidden"> */
    <div
      key={pokemon.id}
      className="col-snap-1  bg-slate-600 text-white my-2 mx-0 sm:mx-4 rounded-md text-center p-4 animate__animated animate__fadeInUp"
    >
      {/* <pre>{JSON.stringify(favorites, null, 3)}</pre> */}
      <img
        src={
          pokemon.sprites.other.dream_world.front_default ||
          pokemon.sprites.other.home.front_default ||
          img404
        }
        alt={pokemon.name}
        className="pokemon__img"
      />
      <div>
        <p className="my-3 uppercase">{pokemon.name}</p>
        <button onClick={() => prueba(pokemon)}>
          {pokemonFav ? "Es mi favorito" : "Aun no es mi favorito"}
        </button>
      </div>
      <div className="flex justify-center items-center gap-10">
        {pokemon.types.map((typeOf) => (
          <TypeItem key={typeOf.slot} type={typeOf.type.name} />
        ))}
      </div>
    </div>
    /*   </div> */
  );
};

export default PokemonItem;
