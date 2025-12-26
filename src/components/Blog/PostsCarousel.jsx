import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CardPosts from "./CardPosts";

export default function PostsCarousel() {
  const carousel = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [axis, setCurrentAxis] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setCarouselWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth
      );
    }
  }, [carousel]);

  const scrollHorizontally = (direction) => {
    if (direction === "left") {
      if (axis == 0) {
        return setCurrentAxis(carouselWidth);
      }
      setCurrentAxis((axis) => (axis === carouselWidth / 2 ? 0 : axis / 2));
    } else {
      if (axis < carouselWidth) {
        setCurrentAxis((axis) =>
          axis == carouselWidth / 2 ? axis * 2 : carouselWidth / 2
        );
      }
      if (axis == carouselWidth) {
        setCurrentAxis(0);
      }
    }
  };


  return (
    <div className="flex items-center w-full gap-8 py-3.5 md:px-8 lg:px-28">
      <FaChevronLeft
        color="black"
        size={32}
        className="hover:cursor-pointer"
        onClick={() => scrollHorizontally("left")}
      />
      <div
        ref={carousel}
        className="w-full overflow-hidden flex justify-around"
      >
        <div
          className="flex shrink-0 items-center gap-7 transition-transform duration-500"
          style={{ transform: `translateX(-${axis}px)` }}
        >
          <CardPosts />
          <CardPosts />
          <CardPosts />
        </div>
      </div>
      <FaChevronRight
        color="black"
        size={32}
        onClick={scrollHorizontally}
        className="hover:cursor-pointer"
      />
    </div>
  );
}
