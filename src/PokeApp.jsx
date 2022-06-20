import React from "react";
import AppRoute from "./routes/AppRoute";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

const PokeApp = () => {
  return (
    <div className="min-h-screen app__container">
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};

export default PokeApp;
