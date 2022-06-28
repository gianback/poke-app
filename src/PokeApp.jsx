import React, { useState } from "react";
import AppRoute from "./routes/AppRoute";

import { BrowserRouter } from "react-router-dom";
import { FavoritesContext } from "./context/FavoritesContext";
import { useEffect } from "react";

const PokeApp = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
    } else {
      localStorage.setItem("favorites", []);
    }
  }, []);

  const updateFavoriesPokemons = (name) => {
    let updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavoriesPokemons }}>
      <BrowserRouter>
        <div className="min-h-screen app__container">
          <AppRoute />
        </div>
      </BrowserRouter>
    </FavoritesContext.Provider>
  );
};

export default PokeApp;
