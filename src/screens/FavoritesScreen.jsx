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
        <div className="flex items-center justify-center app-bg">
          <h1 className="text-4xl text-center text-red-500 uppercase font-bold">
            There are no pokemon marked as favorites! 😐
          </h1>
        </div>
      ) : (
        <div className="pt-10 app-bg px-3 xl:px-0">
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
