import React from "react";
import "./App.css";
import JSONDATA from './MOCK_DATA.json';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." />
      {JSONDATA.map((val, key) => {
        return <div>{val.product_name}</div>
      })}
    </div>
  );
}

export default App;
