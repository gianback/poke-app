import React, { useEffect } from "react";
import { useState } from "react";
import PokemonItem from "../components/PokemonItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemonData, getPokemons, searchPokemon } from "../api/callApi";
import { SpinnerCircular } from "spinners-react";
import Navbar from "../components/Navbar";
const AllPokemonsScreen = () => {
  //pokemons
  const [pokemons, setPokemons] = useState([]);
  const [nextData, setNextData] = useState(0);
  const [findPok, setFindPok] = useState("");
  //booleans
  const [hasMore, setHasMore] = useState(true);
  const [found, setfound] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(nextData);
      const promises = data.results.map(
        async (pokemon) => await getPokemonData(pokemon.url)
      );
      const results = await Promise.all(promises);

      setPokemons(pokemons.concat(results));
      setHasMore(true);
      setfound(true);
    } catch (error) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [nextData]);

  const handleInputChange = (e) => {
    setFindPok(e.target.value);
  };

  const findPokemon = async (e) => {
    e.preventDefault();
    if (findPok.trim().length > 0) {
      const datos = await searchPokemon(findPok);
      if (datos) {
        setPokemons([datos]);
        setHasMore(false);
        setfound(true);
        setFindPok("");
      } else {
        setFindPok("");
        setfound(false);
        setHasMore(false);
        setPokemons([]);
      }
    }
  };

  const handleReset = () => {
    pokemons.pop();
    setNextData(0);
    fetchPokemons();
    setHasMore(true);
    setFindPok("");
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-500 h-full ">
        <div className="container mx-auto h-full bg-red-300 p-2 lg:p-10 relative">
          <form
            onSubmit={findPokemon}
            className="flex flex-col lg:flex-row justify-center items-center gap-10 my-3 mx-0 sm:mx-4"
          >
            <label className="font-bold text-lg">
              Busca un pokemon por su nombre
            </label>
            <input
              type="text"
              name="name"
              className="outline-none w-full  lg:w-96 rounded-md py-1 px-2"
              autoComplete="off"
              onChange={handleInputChange}
              value={findPok}
            />
            <div className="flex justify-between items-center gap-5">
              <button
                className="p-2 bg-yellow-400 rounded-md font-bold inline-block hover:bg-red-500 hover:text-yellow-300 transition-all ease-in duration-200"
                type="submit"
              >
                Buscar
              </button>
              <button
                disabled={
                  pokemons.length === 0 || pokemons.length === 1 ? false : true
                }
                className={
                  pokemons.length === 0 || pokemons.length === 1
                    ? "p-2 bg-yellow-400 rounded-md font-bold inline-block hover:bg-red-500 hover:text-yellow-300 transition-all ease-in duration-200"
                    : "p-2 bg-yellow-400 rounded-md font-bold inline-block"
                }
                onClick={handleReset}
              >
                Reestablecer
              </button>
            </div>
          </form>

          <InfiniteScroll
            dataLength={pokemons.length} //This is important field to render the next data
            next={() => setNextData((prevData) => prevData + 20)}
            hasMore={hasMore}
            loader={<SpinnerCircular className="text-center mx-auto mt-5" />}
            style={{ overflow: "hidden" }}
          >
            {found ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 overflow-hidden">
                {pokemons.map((pok) => (
                  <PokemonItem key={pok.id} pokemon={pok} />
                ))}
              </div>
            ) : (
              <div className="text-center w-full uppercase bg-yellow-400 font-bold p-4 animate__animated animate__fadeInUp rounded-md overflow-hidden">
                pokemon no encontrado, intenta de nuevo!
              </div>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default AllPokemonsScreen;
