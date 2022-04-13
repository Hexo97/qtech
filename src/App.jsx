import React from 'react';
import './App.css';
// import Card from './Components/Card.js';
import NavBar from './Components/NavBar';
import Products from './Pages/Products';

// import SlideShow from './Components/SlideShow';

function App() {
  return (
    <div className="bg-blue-400">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <NavBar />
      {/* <Products /> */}
      {/* <SlideShow/> */}

      {/* <Card
          title={"Counselling"}
          category={"Tech"}
          description={"amazing person"}
        /> */}
    </div>
  );
}

export default App;
