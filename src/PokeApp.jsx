import React from "react";
import AppRoute from "./routes/AppRoute";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
const PokeApp = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};

export default PokeApp;
