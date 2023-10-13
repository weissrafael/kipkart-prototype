import React from "react";
import { CarouselScroll } from "./Carousel.styles";

function Carousel({ children }) {
  return (
    <CarouselScroll
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
    >
      {children}
    </CarouselScroll>
  );
}

export default Carousel;
