import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Contact from './Pages/Contact';
import About from './Pages/About';
import ListHomePage from './Components/ListHomePage';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="products" element={<ListHomePage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);