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
      {/* Left side (logo) */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div
          //   onClick={() => router.push("/")}
          className="mt-5 flex items-center flex-grow sm:flex-grow-0 px-2"
        >
          <img
            className="object-contain cursor-pointer h-10"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </div>

        {/* Search bar */}

        <div className="hidden sm:flex items-center h-12 rounded-md bg-yellow-400 flex-grow hover:bg-yellow-500 cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          {/* <SearchIcon className="h-12 p-4" /> */}
        </div>

        {/* Right Side */}
        <div className="text-white flex items-center text-xs md:text-sm space-x-6 mx-4 whitespace-nowrap ">
          <p>Hello, </p>
          <p className="font-extrabold">Account & Lists</p>

          <div
            //   onClick={() => router.push("/orders")}
            className="link"
          >
            <p>Returns</p>
            <p className="font-extrabold">& Orders</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex bg-amazon_blue-light text-white text-sm p-2 pl-6 space-x-3 justify-center">
        <p className="flex">{/* <MenuIcon className="h-6 mr-1" /> */}</p>
        <p className="link">
          <Link to="/">Home</Link>
        </p>
        <p className="link">Products</p>
        <p className="link">Services</p>
        <p className="link"><Link to="about">About Us</Link></p>
        <p className="link"><Link to="contact">Contact Us</Link></p>
      </div>
    </header>
  );
}

export default Header;
