import React from "react";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [hamburguer, sethamburguer] = useState(false);

  return (
    <nav className="bg-red-500 py-2 px-4 text-white z-10 flex items-center">
      <div className="container mx-auto flex justify-between">
        <NavLink to="/all">
          <figure className="navbar__logo">
            <img src={logo} alt="pokemon-logo" className="max-w-full" />
          </figure>
        </NavLink>

        <i
          className="large material-icons cursor-pointer text-5xl flex md:hidden"
          onClick={() => sethamburguer(!hamburguer)}
        >
          {hamburguer ? "clear" : "dehaze"}
        </i>
        {/* navbar MOBILES */}
        <div
          className={`fixed top-10 left-0 right-0 mt-7 bg-red-500 h-80 block md:hidden  ${
            hamburguer
              ? "animate__animated animate__fadeInLeft"
              : "animate__animated animate__fadeOutLeft"
          }`}
        >
          <ul className="flex flex-col justify-evenly items-stretch h-full text-center">
            <NavLink
              to="/all"
              className="h-full flex items-center justify-center text-3xl hover:text-yellow-300 transition ease-in delay-50"
              onClick={() => sethamburguer(!hamburguer)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/types"
              className="h-full flex items-center justify-center text-3xl hover:text-yellow-300 transition ease-in delay-50"
              onClick={() => sethamburguer(!hamburguer)}
            >
              Tipos
            </NavLink>
            <NavLink
              to="/favorites"
              className="h-full flex items-center justify-center text-3xl hover:text-yellow-300 transition ease-in delay-50"
              onClick={() => sethamburguer(!hamburguer)}
            >
              Favoritos
            </NavLink>
          </ul>
        </div>
        {/* navbar DESKTOP */}
        <ul className="justify-end items-center gap-10 hidden md:flex">
          <NavLink
            className="text-3xl hover:text-yellow-300 transition ease-in delay-50"
            to="/all"
          >
            Inicio
          </NavLink>
          <NavLink
            className="text-3xl hover:text-yellow-300 transition ease-in delay-50"
            to="/types"
          >
            Tipos
          </NavLink>
          <NavLink
            className="text-3xl hover:text-yellow-300 transition ease-in delay-50"
            to="/favorites"
          >
            Favoritos
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
