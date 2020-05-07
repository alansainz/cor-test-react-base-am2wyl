import React from "react";
import "./style.css";
import Row from "../Row";

const WordSearchComponent = ({ wordSearch }) => {
  return (
    <div className="wordSearch">
      {wordSearch.map((row) => (
        <Row row={row} />
      ))}
    </div>
  );
};

export default WordSearchComponent;
