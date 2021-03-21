import React from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.product_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
