import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { setStyleType } from "../helpers/TypeItem/setStyleType";
import TypeItem from "./StyleTypeItem";
const TypeListContainer = ({ title }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(setStyleType(title));
  }, []);

  return (
    <NavLink to={`${title}`}>
      <div
        className={`${color} h-32 rounded-md flex justify-center items-center transition-text duration-500 ease-out hover:text-5xl  `}
      >
        <TypeItem key={title} type={title} />
      </div>
    </NavLink>
  );
};

export default TypeListContainer;
