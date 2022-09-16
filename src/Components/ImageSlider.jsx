import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ImageSlider = ({
  imagesUrl,
  autoPlay = true,
  autoPlayTime = 5000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const nextSlide = (slideIndex = currentSlide + 1) => {
  //   const newSlideIndex = slideIndex >= imagesUrl.length - 1 ? 0 : slideIndex;

  //   setCurrentSlide(newSlideIndex);
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newSlideIndex =
        currentSlide >= imagesUrl.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlideIndex);

      // nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    // wrapper
    <div
      {...props}
      className="h-[600px] flex flex-nowrap overflow-x-hidden relative rounded-lg"
    >
      {/* slide */}
      {imagesUrl.map((imageUrl, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : null,
            }}
            className={`h-full w-full shrink-0 bg-center bg-cover transition-all ease-in-out duration-1000`}
          ></div>
        );
      })}

      {/*background-gradient */}
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/80 "></div>

      <Indicator
        currentSlide={currentSlide}
        amountSlides={imagesUrl.length}
        // nextSlide={nextSlide}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

export default ImageSlider;

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <div className="flex flex-nowrap gap-2 absolute bottom-4 right-4">
      {Array(amountSlides)
        .fill(1)
        .map((_, index) => {
          return (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-white transition-all ease-in-out duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-60"
              }`}
              // onClick={() => nextSlide(index)}
            ></div>
          );
        })}
    </div>
  );
};
