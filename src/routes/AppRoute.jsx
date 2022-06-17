import React from "react";
import { Routes, Route } from "react-router-dom";
import ColorsScreen from "../screens/ColorsScreen";
import HabitatScreen from "../screens/HabitatScreen";
import HomeScreen from "../screens/HomeScreen";
import RegionsScreen from "../screens/RegionsScreen";
import TypesScreen from "../screens/TypesScreen";

const AppRoute = () => {
  return (
    <div className="bg-slate-900 h-full ">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/types" element={<TypesScreen />} />
        <Route path="/regions" element={<RegionsScreen />} />
        <Route path="/colors" element={<ColorsScreen />} />
        <Route path="/habitat" element={<HabitatScreen />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
