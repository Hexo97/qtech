import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import LaptopIcon from "@mui/icons-material/Laptop";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function ProductDetails() {
  return (
    <div className="m-5 p-5  h-screen">
      <div className="flex justify-between">
        <div className="flex space-x-1">
          <LanguageIcon />
          <p className="font-semibold">English</p>
        </div>
        <div className="flex space-x-1">
          <p className="font-semibold">Live Class</p>
          <LaptopIcon />
        </div>
      </div>
      <div className="h-4 m-auto text-center my-5">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
      </div>

      <div className="mx-auto text-center m-20 max-w-screen-md">
        <h2 className="text-5xl p-2 font-bold break-normal">
          Modern JavaScript From The Begginning
        </h2>

        <h3 className="text-lg font-semibold mt-14">
          Learn and build projects with pure JavaScript <br />
          (No frameworks or librraries)
        </h3>

        <div className="mt-10">
          <img
            className="rounded-full h-10  mx-auto "
            src="https://schoolsweek.co.uk/wp-content/uploads/2015/10/Chris-Husbands.jpg"
            alt=""
          />
          <p className="mt-3 text-sm font-semibold">By - Eric Nduku</p>
        </div>

        <div className="mt-3">
          <p className="font-bold text-3xl text-green-600">$199</p>
        </div>
      </div>

      <div className="flex justify-between  items-center">
        <div className="flex items-center">
          <LocalPoliceIcon />{" "}
          <span className="font-bold text-green-500">MoneyBack Gurantee</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1 items-center">
            <CalendarMonthIcon />
            <p className="font-semibold">2 Months course</p>
          </div>

          <div className="flex space-x-1 items-center">
            <OndemandVideoIcon />
            <p className="font-semibold">2 Months course</p>
          </div>

          <div className="flex space-x-1 items-center">
            <AccessTimeIcon />
            <p className="font-semibold">2 Months course</p>
          </div>
        </div>
        <div className="font-bold p-4 rounded-md bg-red-300 text-white">
          Buy Course
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
