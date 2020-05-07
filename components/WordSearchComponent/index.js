import React from "react";
import "./style.css";
import Row from "../Row";

const WordSearchComponent = ({ wordSearch, onClick }) => {
  return (
    <div className="wordSearch" onClick={onClick}>
      {wordSearch.map((row) => (
        <Row row={row} />
      ))}
    </div>
  );
};

export default WordSearchComponent;
