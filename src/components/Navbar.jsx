import React from "react";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [hamburguer, sethamburguer] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center bg-red-500 z-10 fixed right-0 left-0 top-0 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/all">
            <figure className="navbar__logo">
              <img src={logo} alt="pokemon-logo" className="max-w-full" />
            </figure>
          </NavLink>

          {hamburguer ? (
            <button
              className="flex md:hidden hamburger hamburger--vortex"
              type="button"
              onClick={() => sethamburguer(!hamburguer)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          ) : (
            <button
              className="flex md:hidden hamburger hamburger--vortex is-active "
              type="button"
              onClick={() => sethamburguer(!hamburguer)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          )}

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
                Home
              </NavLink>
              <NavLink
                to="/types"
                className="h-full flex items-center justify-center text-3xl hover:text-yellow-300 transition ease-in delay-50"
                onClick={() => sethamburguer(!hamburguer)}
              >
                Types
              </NavLink>
              <NavLink
                to="/favorites"
                className="h-full flex items-center justify-center text-3xl hover:text-yellow-300 transition ease-in delay-50"
                onClick={() => sethamburguer(!hamburguer)}
              >
                Favorites
              </NavLink>
            </ul>
          </div>
          {/* navbar DESKTOP */}
          <ul className="justify-end items-center gap-10 hidden md:flex">
            <NavLink
              className="text-3xl hover:text-yellow-300 transition ease-in delay-50"
              to="/all"
            >
              Home
            </NavLink>
            <NavLink
              className="text-3xl hover:text-yellow-300 transition ease-in delay-50"
              to="/types"
            >
              Types
            </NavLink>
            <NavLink
              className="text-3xl hover:text-yellow-300 transition ease-in delay-50"
              to="/favorites"
            >
              Favorites
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
