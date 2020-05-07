import React from "react";
import "./style.css";
import Letter from "../Letter";

const Row = ({ row }) => {
  return (
    <div className="row">
      {row.map((letter, index) => (
        <Letter key={index} letter={letter} />
      ))}
    </div>
  );
};

export default Row;
