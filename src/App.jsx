import React from 'react';
import './App.css';
// import Card from './Components/Card.js';
// import NavBar from './Components/NavBar';
// import Products from './Pages/Products';
import { Outlet, Link } from 'react-router-dom';
import 'bootswatch/dist/quartz/bootstrap.min.css';
// import SlideShow from './Components/SlideShow';
// import SlideShow from './Components/SlideShow';


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
        <Link to="/products">Products</Link>
        |
        {' '}
        <Link to="/contact">Contact Us</Link>
        |
        {' '}
        <Link to="/about">About Us</Link>
      </nav>
      <Outlet />
    </div>
  );
}
