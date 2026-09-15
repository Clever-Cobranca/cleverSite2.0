import { useEffect, useRef, useState } from "react";
import { CgChevronLeftO, CgChevronRightO } from "react-icons/cg";
import { cn } from "../lib/utils";

export default function Carousel({
  children,
  scrollMode = "item",
  scrollStep,
  isScrollX = true,
  isDraggable = false,
}) {
  const carousel = useRef(null);
  const drag = useRef({
    isPointerDown: false,
    startX: 0,
    startScrollLeft: 0,
    hasDragged: false,
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const getScrollAmount = () => {
    const container = carousel.current;

    if (!container) return 0;

    // Permite uma medida customizada.
    if (typeof scrollStep === "number") {
      return scrollStep;
    }

    // Avança uma página inteira.
    if (scrollMode === "page") {
      return container.clientWidth;
    }

    // Avança pela largura de um item.
    const firstItem = container.querySelector("[data-carousel-item]");

    if (!firstItem) {
      return container.clientWidth;
    }

    const itemWidth = firstItem.getBoundingClientRect().width;
    const styles = window.getComputedStyle(container);
    const gap = Number.parseFloat(styles.columnGap) || 0;

    return itemWidth + gap;
  };

  const scrollHorizontally = (direction) => {
    const container = carousel.current;

    if (!container) return;

    const amount = getScrollAmount();

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event) => {
    if (!isDraggable || event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    drag.current = {
      isPointerDown: true,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
      hasDragged: false,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!drag.current.isPointerDown) return;

    const distance = event.clientX - drag.current.startX;

    if (Math.abs(distance) > 5) {
      drag.current.hasDragged = true;
    }

    event.currentTarget.scrollLeft = drag.current.startScrollLeft - distance;
  };

  const finishDragging = (event) => {
    if (!drag.current.isPointerDown) return;

    drag.current.isPointerDown = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const preventClickAfterDrag = (event) => {
    if (!drag.current.hasDragged) return;

    event.preventDefault();
    event.stopPropagation();
    drag.current.hasDragged = false;
  };

  useEffect(() => {
    const carouselRef = carousel.current;

    if (!carouselRef) return undefined;

    const updateScrollButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef;

      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    const resizeObserver = new ResizeObserver(updateScrollButtons);

    carouselRef.addEventListener("scroll", updateScrollButtons);
    resizeObserver.observe(carouselRef);
    updateScrollButtons();

    return () => {
      carouselRef.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [children]);

  return (
    <div className="group relative w-full h-full py-3.5 pl-2 z-50">
      <button
        type="button"
        aria-label="Voltar no carrossel"
        disabled={!canScrollLeft}
        onClick={() => scrollHorizontally("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 invisible group-hover:visible focus-visible:visible disabled:opacity-50 disabled:cursor-default hover:cursor-pointer max-md:hidden"
      >
        <CgChevronLeftO color="#ffff" size={32} aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Avançar no carrossel"
        disabled={!canScrollRight}
        onClick={() => scrollHorizontally("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 invisible group-hover:visible focus-visible:visible disabled:opacity-50 disabled:cursor-default hover:cursor-pointer max-md:hidden"
      >
        <CgChevronRightO color="#ffff" size={32} aria-hidden="true" />
      </button>
      <div
        ref={carousel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDragging}
        onPointerCancel={finishDragging}
        onClickCapture={preventClickAfterDrag}
        onDragStart={
          isDraggable ? (event) => event.preventDefault() : undefined
        }
        className={cn(
          "flex w-full max-h-full gap-6 scroll-smooth snap-x snap-mandatory max-lg:px-1",
          isScrollX
            ? "overflow-x-auto"
            : "overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          isDraggable && "cursor-grab select-none",
          isDragging && "cursor-grabbing snap-none scroll-auto",
        )}
      >
        {children}
      </div>
    </div>
  );
}
