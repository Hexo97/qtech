import React from "react";
import { Link } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectItems } from "../slices/basketSlice";

function Header() {
  //   const router = Route();
  //   const basket = useSelector(selectItems);

  return (
    <header className="bg-blue-400">
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <Link to="/">
          <div
            className="mt-5 flex items-center flex-grow sm:flex-grow-0 px-2"
          >
            <img
              className="object-contain cursor-pointer h-10"
              src="Images/logo.png"
            />
          </div>
        </Link> 

      <div className="flex bg-amazon_blue-light text-white text-sm p-2 pl-6 space-x-3 justify-center">
        <p className="link">
          <Link to="/">Home</Link>
        </p>
        <p className="link">
          <Link to="/products">Products</Link>
        </p>
        <p className="link">
          <Link to="/about">About Us</Link>
        </p>
        <p className="link">
          <Link to="/contact">Contact Us</Link>
        </p>
        </div>
      </div>
            
    </header>
  );
}

export default Header;
