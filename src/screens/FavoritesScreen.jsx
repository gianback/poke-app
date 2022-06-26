import React from "react";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import PokemonItem from "../components/PokemonItem";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <>
      <Navbar />
      <div>
        <ul>
          {favorites.map((fav) => (
            <PokemonItem key={fav.id} pokemon={fav} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FavoritesScreen;
