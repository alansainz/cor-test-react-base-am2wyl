import React from "react";
import "./style.css";
import Row from "../Row";

const WordSearchComponent = ({ wordSearch, onClick }) => {
  return (
    <div className="wordSearch" onClick={onClick}>
      {wordSearch.map((row, index) => (
        <Row row={row} key={index} />
      ))}
    </div>
  );
};

export default WordSearchComponent;
