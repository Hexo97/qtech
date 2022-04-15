import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import ListHomePage from './Components/ListHomePage';

const slideImages = [
  "Assets/Images/Services.jpg",
  "Assets/Images/Products.jpg",
  "Assets/Images/Counselling.jpg",
];

function Slideshow() {
  return (
    <div>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>#1 cources resource from middle east</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>best information technology courses</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>where eLearning happens</span>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Slideshow;