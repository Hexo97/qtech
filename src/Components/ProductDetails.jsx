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
import { useParams } from 'react-router-dom'
import { mainProducts } from '../Components/productsList';

function ProductDetails() {

  const product = mainProducts.find(prod => prod.id == useParams().prodId)

  function reviewStars(num) {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<StarIcon />)
    }
    for (let i = 5; i >= stars.length; i--) {
      if (stars.length != 5) {
        stars.push(<StarBorderIcon />)
      }
    }
    return stars
  }
  const starRating = reviewStars(product.rating)


  function countLectures(content) {
    let lectureCount = 0;
    for (let i = 0; i < content.length; i++) {
      lectureCount += content[i].lectures
    }
    return lectureCount
  }
  const lectures = countLectures(product.content)

  function countHours(content) {
    let hoursCount = 0;
    for (let i = 0; i < content.length; i++) {
      hoursCount += content[i].duration
    }
    return hoursCount
  }
  const hours = countHours(product.content)

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
        <div className="flex justify-between p-20 text-gray-300">
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
          {starRating}
        </div>

        <div className="mx-auto text-center m-20 max-w-screen-md">
          <h2 className="text-5xl p-2 font-bold break-normal text-white">
            {product.title}
          </h2>

          <h3 className="text-lg font-semibold mt-14 text-gray-100">
            {product.description}
          </h3>

          <div className="mt-10">
            <img
              className="rounded-full h-10  mx-auto "
              src="https://schoolsweek.co.uk/wp-content/uploads/2015/10/Chris-Husbands.jpg"
              alt=""
            />
            <p className="mt-3 text-sm font-semibold text-white">
              By - {product.instructor}
            </p>
          </div>

          <div className="mt-3">
            <p className="font-bold text-3xl text-green-600">${product.price}</p>
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
                <p className="font-semibold">{product.duration} Months course</p>
              </div>

              <div className="flex space-x-1 items-center lg:text-xl">
                <OndemandVideoIcon />
                <p className="font-semibold">{lectures} Lectures</p>
              </div>

              <div className="flex space-x-1 items-center  lg:text-xl">
                <AccessTimeIcon />
                <p className="font-semibold">{hours} Hrs Duration</p>
              </div>
            </div>
            <a className="font-bold p-4 rounded-md bg-red-300 text-white cursor-pointer" href="/contact">
              Buy Course
            </a>
          </div>
        </div>
      </div>
      <div>
        <ProductDetailsModules modules={product.content} />
      </div>
    </div>
  );
}

export default ProductDetails;
