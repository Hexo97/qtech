import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import ListHomePage from './Components/ListHomePage';

const slideImages = [
  'Assets/Images/Services.jpg',
  'Assets/Images/Products.jpg',
  'Assets/Images/Counselling.jpg',
];

function Slideshow() {
  return (
    <div>
      {/* <ListHomePage category={} /> */}

      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        {/* <div className="each-slide"> */}
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
}

// const styles = StyleSheet.create({
//   tinyLogo: {
//     width: 150,
//     height: 150,
//   },
// });

export default Slideshow;
