import React from "react";
import { useState } from "react";
import PokemonList from "../components/PokemonList";
import { useFetch } from "../hooks/useFetch";
import InfiniteScroll from "react-infinite-scroll-component";

const AllPokemonsScreen = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const { data, loading, next } = useFetch(url);

  return (
    <div className="bg-slate-500 h-full ">
      <div className="container mx-auto h-full bg-red-300 p-10 relative">
        <div className="flex justify-center items-center gap-10 mt-5">
          <h3>Busca un pokemon por su nombre</h3>
          <input
            type="text"
            name="name"
            className="outline-none w-80 rounded-sm"
            autoComplete="off"
          />
        </div>
        {loading === false && (
          <InfiniteScroll
            dataLength={data.results.length}
            hasMore={true} //This is important field to render the next data
            next={() => setUrl(data.next)}
          >
            <PokemonList pokemones={data.results} />
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default AllPokemonsScreen;
