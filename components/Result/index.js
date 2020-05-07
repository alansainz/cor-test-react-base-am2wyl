import React from "react";
import "./style.css";

const Result = ({ result }) => {
  return (
    <div className="result">
      <div>Number of Ocurrences: {result}</div>
    </div>
  );
};

export default Result;
