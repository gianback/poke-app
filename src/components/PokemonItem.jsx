import React from "react";
import { useFetch } from "../hooks/useFetch";
import { SpinnerCircular } from "spinners-react";
import TypeItem from "./TypeItem";
const PokemonItem = ({ url }) => {
  const { data, loading } = useFetch(url);
  return (
    <div>
      {loading ? (
        <SpinnerCircular />
      ) : (
        <div className="col-snap-1 bg-slate-600 text-white my-2 mx-4 rounded-md text-center p-4">
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
            className="pokemon__img"
          />
          <p className="my-3">
            Nombre: <span className="uppercase">{data.name}</span>{" "}
          </p>
          <div className="flex justify-center items-center gap-10">
            {data.types.map((typeOf) => (
              <TypeItem key={typeOf.slot} type={typeOf.type.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonItem;
