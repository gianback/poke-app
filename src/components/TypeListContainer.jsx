import React from "react";
import { NavLink } from "react-router-dom";
const TypeListContainer = ({ title }) => {
  return (
    <NavLink to={`${title}`}>
      <div className="bg-blue-500 h-32 text-bold rounded-md flex justify-center items-center transition-text duration-500 ease-out hover:text-5xl cursor-pointer">
        <p className="uppercase">{title}</p>
      </div>
    </NavLink>
  );
};

export default TypeListContainer;
