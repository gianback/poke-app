import React, { useState } from "react";
import AppRoute from "./routes/AppRoute";

import { BrowserRouter } from "react-router-dom";
import { FavoritesContext } from "./context/FavoritesContext";

const PokeApp = () => {
  let [favorites, setFavorites] = useState([]);

  const setAndDeleteFavorites = (pokemon) => {
    //quitar y desactivar el true o false de si es favorito o no
    if (favorites.includes(pokemon)) {
      setFavorites(favorites.filter((fav) => fav.id !== pokemon.id));
    } else {
      setFavorites(favorites.concat(pokemon));
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, setAndDeleteFavorites }}
    >
      <BrowserRouter>
        <div className="min-h-screen app__container">
          <AppRoute />
        </div>
      </BrowserRouter>
    </FavoritesContext.Provider>
  );
};

export default PokeApp;
