import React from "react";
import "./App.css";
// import Card from './Components/Card.js';
import SlideShow from "./Components/SlideShow";
import ListHomePage from "./Components/ListHomePage";

function App() {

  return (
    <div className="bg-blue-200">
      <SlideShow />
      <h1 className="sec-heading">Top Rated Courses</h1>
      <div style={{ padding: 40 }}>
        <ListHomePage />
      </div>
    </div>
  );
}

export default App;
