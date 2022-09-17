import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ImageSlider = ({ imagesUrl, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      currentSlide < imagesUrl.length - 1
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(0);
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    // wrapper
    <section className="container flex items-center justify-center h-[500px] w-screen ">
      <div className="w-full h-full">
        <div
          style={{ backgroundImage: `url(${imagesUrl[currentSlide].img})` }}
          className="relative h-full w-full bg-cover bg-center bg-no-repeat transition-all ease-in-out duration-1000 rounded-md overflow-hidden"
        >
          {/* bg-gradient */}
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/80"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
          </div>

          {/* circles */}
          <div className="flex absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div
              onClick={() => setCurrentSlide(0)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentSlide === 0 ? "opacity-100" : "opacity-40"
              }`}
            ></div>

            <div
              onClick={() => setCurrentSlide(1)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentSlide === 1 ? "opacity-100" : "opacity-40"
              }`}
            ></div>

            <div
              onClick={() => setCurrentSlide(2)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentSlide === 2 ? "opacity-100" : "opacity-40"
              }`}
            ></div>

            <div
              onClick={() => setCurrentSlide(3)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentSlide === 3 ? "opacity-100" : "opacity-40"
              }`}
            ></div>

            <div
              onClick={() => setCurrentSlide(4)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentSlide === 4 ? "opacity-100" : "opacity-40"
              }`}
            ></div>

            <div
              onClick={() => setCurrentSlide(5)}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 mr-3 cursor-pointer  ${
                currentSlide === 5 ? "opacity-100" : "opacity-40"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;

