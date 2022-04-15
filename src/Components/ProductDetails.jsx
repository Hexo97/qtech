import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import LaptopIcon from "@mui/icons-material/Laptop";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ProductDetailsModules from "./ProductDetailsModules";

function ProductDetails() {
  const modules = [
    {
      id: 1,
      title: "Introduction",
      lectures: 3,
      duration: 2,
    },
    {
      id: 2,
      title: "JavaScript Fundmentals",
      lectures: 5,
      duration: 8,
    },
    {
      id: 3,
      title: "Logic Operators",
      lectures: 4,
      duration: 3,
    },
    {
      id: 4,
      title: "Functions",
      lectures: 4,
      duration: 2,
    },
    {
      id: 5,
      title: "Data Structures",
      lectures: 5,
      duration: 6,
    },
    {
      id: 6,
      title: "Work With Arrays",
      lectures: 3,
      duration: 5,
    },
    {
      id: 7,
      title: "Object Oriented Programming",
      lectures: 4,
      duration: 7,
    },
  ];

  return (
    <div
      className="h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://pbs.twimg.com/media/EC5C0rXUUAEnRRG?format=jpg&name=4096x4096')",
      }}
    >
      {/* Gray Opacity BG DIV */}
      <div className="z-10 bg-gray-700 h-full bg-opacity-80">
        {/* Top language live class div */}
        <div className="flex justify-between p-16 text-gray-300">
          <div className="flex space-x-2">
            <LanguageIcon />
            <p className="font-semibold">English</p>
          </div>
          <div className="flex space-x-2">
            <p className="font-semibold">Live Class</p>
            <LaptopIcon />
          </div>
        </div>
        <div className="h-4 m-auto text-center text-cyan-400">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </div>

        <div className="mx-auto text-center m-20 max-w-screen-md">
          <h2 className="text-5xl p-2 font-bold break-normal text-white">
            Modern JavaScript From The Begginning
          </h2>

          <h3 className="text-lg font-semibold mt-14 text-gray-100">
            Learn and build projects with pure JavaScript <br />
            (No frameworks or librraries)
          </h3>

          <div className="mt-10">
            <img
              className="rounded-full h-10  mx-auto "
              src="https://schoolsweek.co.uk/wp-content/uploads/2015/10/Chris-Husbands.jpg"
              alt=""
            />
            <p className="mt-3 text-sm font-semibold text-white">
              By - Eric Nduku
            </p>
          </div>

          <div className="mt-3">
            <p className="font-bold text-3xl text-green-600">$199</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto items-center  ">
          <div className="flex justify-evenly  items-center py-3">
            <div className="flex space-x-1 items-center text-white  lg:text-xl">
              <LocalPoliceIcon className="text-green-500" />
              <p className="font-semibold text-green-500">MoneyBack Gurantee</p>
            </div>
            <div className="flex items-center space-x-5 text-white">
              <div className="flex space-x-1 items-center  lg:text-xl">
                <CalendarMonthIcon />
                <p className="font-semibold">2 Months course</p>
              </div>

              <div className="flex space-x-1 items-center lg:text-xl">
                <OndemandVideoIcon />
                <p className="font-semibold">28 Lectures</p>
              </div>

              <div className="flex space-x-1 items-center  lg:text-xl">
                <AccessTimeIcon />
                <p className="font-semibold">34 Hrs Duration</p>
              </div>
            </div>
            <div className="font-bold p-4 rounded-md bg-red-300 text-white cursor-pointer">
              Buy Course
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <ProductDetailsModules modules={modules} />
      </div>
    </div>
  );
}

export default ProductDetails;
