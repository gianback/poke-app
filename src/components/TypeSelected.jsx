import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonData, getTypes } from "../api/callApi";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonItem from "./PokemonItem";
import { SpinnerCircular } from "spinners-react";
const TypeSelected = () => {
  const params = useParams();
  // pokemones a renderizar
  const [listPokemons, setListPokemons] = useState([]);
  const [moreData, setMoreData] = useState(true);
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(20);

  const dataPokemonsByType = async () => {
    try {
      const resp = await getTypes(params.type);
      //lista de todos nombres y url del type seleccionado
      const data = resp.pokemon.map((result) => result.pokemon);
      const promises = data.map(
        async (pokemon) => await getPokemonData(pokemon.url)
      );
      const pokemones = await Promise.all(promises);
      setListPokemons(listPokemons.concat(pokemones.slice(inicio, fin)));
    } catch (error) {}
  };

  const setData = () => {
    setInicio(inicio + 20);
    setFin(fin + 20);
  };
  useEffect(() => {
    dataPokemonsByType();
  }, [inicio]);
  return (
    <div>
      <InfiniteScroll
        dataLength={listPokemons.length} //This is important field to render the next data
        next={setData}
        hasMore={fin > listPokemons.length ? false : true}
        loader={<SpinnerCircular className="text-center mx-auto mt-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 overflow-hidden">
          {listPokemons.map((pok) => (
            <PokemonItem key={pok.name} pokemon={pok} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default TypeSelected;
