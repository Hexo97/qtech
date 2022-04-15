import React from "react";
import "./App.css";
// import Card from './Components/Card.js';
import SlideShow from "./Components/SlideShow";
// import Product from "./Components/Product";
import Product from "./Components/Product";

function App() {
  return (
    <div className="bg-blue-400">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <SlideShow />
      <Product />
    </div>
  );
}

export default App;
