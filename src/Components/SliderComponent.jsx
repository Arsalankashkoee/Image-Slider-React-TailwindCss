import React from "react";

import imageOne from "../Images/slide_1.jpeg";
import imageTwo from "../Images/slide_2.jpeg";
import imageThree from "../Images/slide_3.jpeg";
import imageFour from "../Images/slide_4.jpeg";
import imageFive from "../Images/slide_5.jpeg";
import imageSix from "../Images/slide_6.jpeg";
import ImageSlider from "./ImageSlider";

const imagesUrl = [
  {
    img: imageOne,
  },
  {
    img: imageTwo,
  },
  {
    img: imageThree,
  },
  {
    img: imageFour,
  },
  {
    img: imageFive,
  },
  {
    img: imageSix,
  },
];

const SliderComponent = () => {
  return (
    <div className="mb-28 mt-5">
      <ImageSlider
        imagesUrl={imagesUrl}
      >
        <h1 className="text-white font-semibold text-xl opacity-40">
          React.js Image Slider
        </h1>
      </ImageSlider>
    </div>
  );
};

export default SliderComponent;
