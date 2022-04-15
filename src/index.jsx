import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavBar from "./Components/NavBar";
import Contact from './Pages/Contact';
import About from './Pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
// import Products from './Components/Products';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/qtech" element={<App />} />
      <Route path="ProductDetails" element={<ProductDetails />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
