import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonData, getTypes } from "../api/callApi";
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonItem from "../components/PokemonItem";
import { SpinnerCircular } from "spinners-react";
import Navbar from "../components/Navbar";
const TypeSelectedScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  // pokemones a renderizar
  const [listPokemons, setListPokemons] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(20);
  const [loading, setLoading] = useState(true);

  const dataPokemonsByType = async () => {
    try {
      const resp = await getTypes(params.type);
      //lista de todos nombres y url del type seleccionado
      const data = resp.pokemon.map((result) => result.pokemon);
      const promises = data.map(
        async (pokemon) => await getPokemonData(pokemon.url)
      );
      const pokemones = await Promise.all(promises);
      setCompleted(pokemones.length);
      setListPokemons(listPokemons.concat(pokemones.slice(inicio, fin)));
    } catch (error) {
      navigate("/types", { replace: true });
    }
  };

  const setData = () => {
    setInicio(inicio + 20);
    setFin(fin + 20);
    if (completed === listPokemons.length) {
      setLoading(false);
    }
  };
  useEffect(() => {
    dataPokemonsByType();
  }, [inicio]);
  return (
    <>
      <Navbar />
      <div className="container mx-auto  ">
        <div className="flex justify-end">
          <button
            className="m-4 py-2 px-4 bg-yellow-400 font-bold uppercase rounded-md"
            onClick={() => navigate("/types")}
          >
            retroceder
          </button>
        </div>

        <InfiniteScroll
          dataLength={listPokemons.length} //This is important field to render the next data
          next={setData}
          hasMore={loading}
          /*  hasMore={fin >= completed.length ? false : true} */
          loader={<SpinnerCircular className="text-center mx-auto mt-5" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 overflow-hidden">
            {listPokemons.map((pok) => (
              <PokemonItem key={pok.name} pokemon={pok} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
export default TypeSelectedScreen;
