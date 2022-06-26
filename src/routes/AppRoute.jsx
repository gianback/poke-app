import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPokemonsScreen from "../screens/AllPokemonsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

import TypesScreen from "../screens/TypesScreen";
import TypeSelectedScreen from "../screens/TypeSelectedScreen";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/all" element={<AllPokemonsScreen />} />
        <Route path="/types" element={<TypesScreen />} />
        <Route path="/types/:type" element={<TypeSelectedScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
};

export default AppRoute;
