import React from "react";
import { setStyleType } from "../helpers/TypeItem/setStyleType";

const TypeItem = ({ type }) => {
  const typeStyleDefault = {
    marginTop: "10px",
    padding: "8px 16px",
    borderRadius: "10px",
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  return (
    <p className={setStyleType(type)} style={typeStyleDefault}>
      {type}
    </p>
  );
};

export default TypeItem;
