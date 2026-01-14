import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CardPosts from "./CardPosts";
import { posts } from "../../Pages/blog/blogPost";

export default function PostsCarousel({ slug, allPosts = posts }) {
  const carousel = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [axis, setCurrentAxis] = useState(0);

  const postsFilteredBySlug = allPosts
    .filter((p) => p.slug != slug)
    .splice(0, 6);

  // useEffect(() => {
  //   if (carousel.current) {
  //     console.log(carousel.current.scrollWidth);
  //     setCarouselWidth(
  //       carousel.current.scrollWidth - carousel.current.offsetWidth
  //     );
  //   }
  // }, [carousel]);

  // 1. Função para verificar a posição e atualizar os botões
  const updateScrollButtons = () => {
    if (carousel.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carousel.current;

      // Margem de erro pequena (1px) para arredondamentos de float
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    const carouselRef = carousel.current;
    if (carouselRef) {
      carouselRef.addEventListener("scroll", updateScrollButtons);
      // Chama uma vez para garantir estado inicial correto
      updateScrollButtons();
    }
    return () =>
      carouselRef?.removeEventListener("scroll", updateScrollButtons);
  }, []);

  // const scrollHorizontally = (direction) => {
  //   if (!carousel.current) return;

  //   const step = carousel.current.offsetWidth;

  //   console.log("ScrollX: ", scrollX);

  //   if (direction === "left") {
  //     // Volta um passo. Math.max garante que não fique negativo (menor que 0)
  //     if (axis == 0) return setCurrentAxis(carouselWidth);
  //     setCurrentAxis((prevAxis) => Math.max(prevAxis - step, 0));
  //   } else {
  //     // Lógica para a DIREITA

  //     // Se já estamos no fim, volta pro início (Loop)
  //     if ((axis + scrollX) >= carouselWidth) {
  //       setScrollX(0);
  //       setCurrentAxis(0);
  //     } else {
  //       // Avança um passo. Math.min garante que não ultrapasse o limite máximo
  //       setCurrentAxis(
  //         (prevAxis) => Math.min(prevAxis + step, carouselWidth) - scrollX
  //       );
  //       carousel.current.scrollLeft = scrollX + step
  //     }
  //   }
  // };

  const scrollHorizontally = (direction) => {
    if (carousel.current) {
      const { offsetWidth } = carousel.current;
      // Define o passo (uma tela inteira ou metade, como pref  erir)
      const scrollAmount = offsetWidth;

      carousel.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // A mágica da animação suave nativa
      });
    }
  };

  return (
    <div className="group pl-2 w-full py-3.5 z-50">
      <FaChevronLeft
        color="#364153"
        disabled={!canScrollLeft}
        style={{ opacity: canScrollLeft ? 1 : 0.5 }}
        size={32}
        className="relative invisible group-hover:visible  top-44  z-10 hover:cursor-pointer max-md:hidden"
        onClick={() => scrollHorizontally("left")}
      />

      <FaChevronRight
        color="#364153"
        size={32}
        disabled={!canScrollRight}
        style={{ opacity: canScrollRight ? 1 : 0.5 }}
        onClick={scrollHorizontally}
        className="relative invisible group-hover:visible  left-[95%] inset-y-[135px] z-10 hover:cursor-pointer max-md:hidden"
      />
      <div
        ref={carousel}
        className="w-full overflow-x-scroll max-h-[510px] max-lg:px-1 flex justify-around"
      >
        <div
          className="flex max-h-[510px] overflow-y-hidden shrink-0 gap-6 transition-transform duration-500"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "thin" }}
        >
          {postsFilteredBySlug.map((post) => (
            <CardPosts key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
