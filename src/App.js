import React from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." />
      {JSONDATA.map((val, key) => {
        return (
          <div className="user" key = {key}>
            <p>{val.product_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
