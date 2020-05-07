import React from "react";
import "./style.css";
import Letter from "../Letter";

const Row = ({ row }) => {
  return (
    <div className="row">
      {row.map((letter) => (
        <Letter letter={letter} />
      ))}
    </div>
  );
};

export default Row;
