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
    <div className="group w-full py-3.5 z-50">
      <FaChevronLeft
        color="#364153"
        size={32}
        className="relative invisible group-hover:visible transition-all duration-300 top-44  z-10 hover:cursor-pointer max-md:hidden"
        onClick={() => scrollHorizontally("left")}
      />

      <FaChevronRight
        color="#364153"
        size={32}
        onClick={scrollHorizontally}
        className="relative invisible group-hover:visible transition-all duration-300 left-[95%] inset-y-[135px] z-10 hover:cursor-pointer max-md:hidden"
      />
      <div
        ref={carousel}
        className="w-full overflow-x-scroll max-h-[510px] max-lg:px-1 flex justify-around"
      >
        <div
          className="flex max-h-[510px] overflow-y-hidden shrink-0 gap-6 transition-transform duration-500"
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
    </div>
  );
}
