import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
import { getTypes } from "../api/callApi";
import Navbar from "../components/Navbar";
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
    <>
      <Navbar />
      <div className="app-bg flex">
        <div className=" container m-auto">
          {loading === false ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 overflow-hidden gap-5 p-3 xl:p-0">
              {listTypes.map((type) => (
                <TypeListContainer key={type} title={type} />
              ))}
            </div>
          ) : (
            <SpinnerCircular className="text-center mx-auto mt-5" />
          )}
        </div>
      </div>
    </>
  );
};

export default TypesScreen;
