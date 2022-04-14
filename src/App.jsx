import React from 'react';
<<<<<<< Updated upstream
import './App.css';
// import Card from './Components/Card.js';
import NavBar from './Components/NavBar';
<<<<<<< HEAD
import Products from './Pages/Products';

// import SlideShow from './Components/SlideShow';
=======
import SlideShow from './Components/SlideShow';
>>>>>>> master

function App() {
  return (
    <div className="bg-blue-400">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <NavBar />
<<<<<<< HEAD
      {/* <Products /> */}
      {/* <SlideShow/> */}
=======
      <SlideShow />
>>>>>>> master

      {/* <Card
          title={"Counselling"}
          category={"Tech"}
          description={"amazing person"}
        /> */}
=======
import { Outlet, Link } from 'react-router-dom';
import 'bootswatch/dist/quartz/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/contact">Contact Us</Link>
        |
        {' '}
        <Link to="/about">About Us</Link>
      </nav>
      <Outlet />
>>>>>>> Stashed changes
    </div>
  );
}
