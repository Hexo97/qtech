import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'
import Burger from "./Components/Burger";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import ListHomePage from './Components/ListHomePage';

ReactDOM.render(
  <BrowserRouter>
    <Burger/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="products" element={<ListHomePage />} />
      <Route path="ProductDetails/:prodId" element={<ProductDetails />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);