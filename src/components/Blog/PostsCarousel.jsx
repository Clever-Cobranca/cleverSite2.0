import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CardPosts from "./CardPosts";
import { posts } from "../../Pages/blog/blogPost";

export default function PostsCarousel({ slug, allPosts = posts }) {
  const carousel = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [axis, setCurrentAxis] = useState(0);

  const postsFilteredBySlug = allPosts
    .filter((p) => p.slug != slug)
    .splice(0, 6);

  useEffect(() => {
    if (carousel.current) {
      setCarouselWidth(
        carousel.current.scrollWidth - carousel.current.offsetWidth
      );
    }
  }, [carousel]);

  console.log(carouselWidth);
  console.log(axis);
  const scrollHorizontally = (direction) => {
    if (!carousel.current) return;

    const step = carousel.current.offsetWidth;

    if (direction === "left") {
      // Volta um passo. Math.max garante que não fique negativo (menor que 0)
      if (axis == 0) return setCurrentAxis(carouselWidth);
      setCurrentAxis((prevAxis) => Math.max(prevAxis - step, 0));
    } else {
      // Lógica para a DIREITA

      // Se já estamos no fim, volta pro início (Loop)
      if (axis >= carouselWidth) {
        setCurrentAxis(0);
      } else {
        // Avança um passo. Math.min garante que não ultrapasse o limite máximo
        setCurrentAxis((prevAxis) => Math.min(prevAxis + step, carouselWidth));
      }
    }
  };

  return (
    <div className="flex items-center w-full gap-1 sm:gap-8 py-3.5 md:px-8 lg:px-28 z-0">
      <FaChevronLeft
        color="black"
        size={32}
        className="hover:cursor-pointer max-md:hidden"
        onClick={() => scrollHorizontally("left")}
      />
      <div
        ref={carousel}
        className="w-full overflow-hidden flex justify-around"
      >
        <div
          className="flex max-lg:overflow-x-scroll overflow-y-hidden shrink-0 max-sm:w-full items-center gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${axis}px)`,
            willChange: "transform",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "thin",
          }}
        >
          {postsFilteredBySlug.map((post) => (
            <CardPosts key={post.id} post={post} />
          ))}
        </div>
      </div>
      <FaChevronRight
        color="black"
        size={32}
        onClick={scrollHorizontally}
        className="hover:cursor-pointer max-md:hidden"
      />
    </div>
  );
}
