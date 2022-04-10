import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectItems } from "../slices/basketSlice";

function Header() {
  //   const router = Route();
  //   const basket = useSelector(selectItems);

  return (
    <header>
      {/* Left side (logo) */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div
          //   onClick={() => router.push("/")}
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        >
          {/* <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          /> */}
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
      <div className="flex items-center bg-amazon_blue-light text-white text-sm p-2 pl-6 space-x-3">
        <p className="flex items-center ">
          {/* <MenuIcon className="h-6 mr-1" /> */}
        </p>
        <p className="link"> All</p>
        <p className="link">Grocery</p>
        <p className="link">Gift Cards & Top-up</p>
        <p className="link">Buy Again</p>
        <p className="link">Free Delivery</p>
        <p className="link hidden md:inline">Electronics</p>
        <p className="link hidden lg:inline">Health & Personal Care</p>
        <p className="link hidden lg:inline">Toy Games</p>
        <p className="link hidden xl:inline">Shopper Toolkit</p>
        <p className="link hidden xl:inline">vouchers</p>
        <p className="link hidden xl:inline">Gift ideas</p>
      </div>
    </header>
  );
}

export default Header;
