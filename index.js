import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./style.css";
import { default as json } from "./assets/resources.json";
import WordSearch from "./utils/WordSearch";
import WordSearchComponent from "./components/WordSearchComponent";
import Result from "./components/Result";

const keyword = "OIE";

const getJson = () => Promise.resolve(json).then((data) => data.resources); // simulates async API call

function App() {
  const [data, setData] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    getJson().then((data) => setData(data));
  }, []);

  const getOcurrences = (index) => {
    const selectedWordSearch = data.length && data[index];
    const selected = new WordSearch(selectedWordSearch, keyword);
    const result = selected.countAllOcurrences();

    setResult(result);
  };

  if (!data) return <div>loading</div>;
  return (
    <div className="App">
      <div>Seleccionar Sopa de letras:</div>
      <div className="container">
        {data.map((word, index) => (
          <WordSearchComponent
            wordSearch={word}
            onClick={() => getOcurrences(index)}
          />
        ))}
      </div>
      <Result result={result} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
