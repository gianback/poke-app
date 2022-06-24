import React from "react";
import { Routes, Route } from "react-router-dom";
import TypeSelected from "../components/TypeSelected";
import AllPokemonsScreen from "../screens/AllPokemonsScreen";
import HabitatScreen from "../screens/HabitatScreen";
import HomeScreen from "../screens/HomeScreen";
import RegionsScreen from "../screens/RegionsScreen";
import TypesScreen from "../screens/TypesScreen";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/all" element={<AllPokemonsScreen />} />
        <Route path="/types" element={<TypesScreen />} />
        <Route path="/types/:type" element={<TypeSelected />} />
        <Route path="/regions" element={<RegionsScreen />} />
        <Route path="/habitat" element={<HabitatScreen />} />
      </Routes>
    </>
  );
};

export default AppRoute;
