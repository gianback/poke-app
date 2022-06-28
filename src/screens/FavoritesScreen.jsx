import React, { useState } from "react";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import { FavoritesContext } from "../context/FavoritesContext";
import { searchPokemon } from "../api/callApi";
import { useEffect } from "react";
import PokemonItem from "../components/PokemonItem";
const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);
  const [favoritesRenderList, setFavoritesRenderList] = useState([]);

  const renderFavorites = async () => {
    const promises = favorites.map(
      async (pokemon) => await searchPokemon(pokemon)
    );
    const results = await Promise.all(promises);
    setFavoritesRenderList(results);
  };

  useEffect(() => {
    renderFavorites();
  }, []);

  return (
    <>
      <Navbar />
      {favorites.length === 0 ? (
        <div className="flex items-center justify-center bg-red-400">
          <h1 className="text-4xl text-center text-white uppercase font-bold">
            No hay pokemones marcados como favoritos! 😐
          </h1>
        </div>
      ) : (
        <div className="pt-10 app-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 overflow-hidden">
            {favoritesRenderList.map(
              (pokemon) =>
                favorites.includes(pokemon.name) && (
                  <PokemonItem key={pokemon.name} pokemon={pokemon} />
                )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritesScreen;
