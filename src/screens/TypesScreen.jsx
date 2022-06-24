import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getTypes } from "../api/callApi";
import TypeListContainer from "../components/TypeListContainer";

const TypesScreen = () => {
  //nombre de los tipos de pokemones
  const [listTypes, setlistTypes] = useState(null);

  const [loading, setloading] = useState(true);
  const getListTypes = async () => {
    const data = await getTypes();
    const respNames = await data.results.map((type) => type.name);
    const namesFilters = respNames.filter(
      (name) => name !== "unknown" && name !== "shadow"
    );
    setlistTypes(namesFilters);
    setloading(false);
  };

  useEffect(() => {
    getListTypes();
  }, []);

  return (
    <div className="container m-auto">
      {loading === false && (
        <div className="grid grid-cols-4 gap-5">
          {listTypes.map((type) => (
            <TypeListContainer key={type} title={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TypesScreen;
