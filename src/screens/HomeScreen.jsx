import React from "react";
import mainLogo from "../assets/poke-main.jpg";
import pokeball from "../assets/pokeball.png";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div
          style={{ backgroundImage: `url(${mainLogo})` }}
          className="h-full w-full bg-center bg-cover bg-no-repeat flex justify-center items-center "
        >
          <div className="h-2/4 w-4/5 md:w-3/5 rounded-lg backdrop-blur-md bg-black/50 text-yellow-300 p-2 md:p-8 grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 text-center lg:text-start animate__animated animate__fadeInRight">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-10 xl:line-height-60 ">
                Tus pokemones favoritos, todos en un mismo lugar.
              </h1>
            </div>
            <div className="flex justify-center items-start md:items-center">
              <Link to="/all">
                <button className="uppercase rounded-lg py-3 px-4 bg-yellow-300 text-red-500 font-bold  text-2xl lg:text-3xl">
                  comienza ya!
                  <img
                    className="w-14 mx-auto mt-2"
                    src={pokeball}
                    alt="pokeball"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
