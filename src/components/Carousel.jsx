import { Children, useEffect, useRef, useState } from "react";
import { CgChevronLeftO, CgChevronRightO } from "react-icons/cg";
import { cn } from "../lib/utils";

export default function Carousel({
  children,
  scrollMode = "item",
  scrollStep,
  isScrollX = true,
  isDraggable = false,
  isInfinity = false,
  showDots = false,
}) {
  const itemCount = Children.count(children);
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
  const [activeIndex, setActiveIndex] = useState(0);

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

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const isAtStart = container.scrollLeft <= 1;
    const isAtEnd = container.scrollLeft >= maxScrollLeft - 1;

    if (isInfinity && direction === "right" && isAtEnd) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (isInfinity && direction === "left" && isAtStart) {
      container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      return;
    }

    const amount = getScrollAmount();

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollToItem = (index) => {
    const container = carousel.current;
    const items = container?.querySelectorAll("[data-carousel-item]");
    const item = items?.[index];

    if (!container || !item) return;

    const containerLeft = container.getBoundingClientRect().left;
    const itemLeft = item.getBoundingClientRect().left;

    container.scrollTo({
      left: container.scrollLeft + itemLeft - containerLeft,
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
      const hasOverflow = scrollWidth > clientWidth + 1;

      setCanScrollLeft(hasOverflow && (isInfinity || scrollLeft > 1));
      setCanScrollRight(
        hasOverflow &&
          (isInfinity || scrollLeft + clientWidth < scrollWidth - 1),
      );

      const items = Array.from(
        carouselRef.querySelectorAll("[data-carousel-item]"),
      );
      const containerLeft = carouselRef.getBoundingClientRect().left;
      const closestItemIndex = items.reduce((closestIndex, item, index) => {
        const currentDistance = Math.abs(
          item.getBoundingClientRect().left - containerLeft,
        );
        const closestDistance = Math.abs(
          items[closestIndex].getBoundingClientRect().left - containerLeft,
        );

        return currentDistance < closestDistance ? index : closestIndex;
      }, 0);

      setActiveIndex(closestItemIndex);
    };

    const resizeObserver = new ResizeObserver(updateScrollButtons);

    carouselRef.addEventListener("scroll", updateScrollButtons);
    resizeObserver.observe(carouselRef);
    updateScrollButtons();

    return () => {
      carouselRef.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [children, isInfinity]);

  return (
    <div className="group relative w-full h-full py-3.5 pl-2 z-50">
      <button
        type="button"
        aria-label="Voltar no carrossel"
        disabled={!canScrollLeft}
        onClick={() => scrollHorizontally("left")}
        className={cn(
          "absolute left-2 top-1/2 z-10 -translate-y-1/2 invisible group-hover:visible focus-visible:visible disabled:opacity-50 disabled:cursor-default hover:cursor-pointer max-md:hidden",
          showDots && "max-lg:hidden",
        )}
      >
        <CgChevronLeftO color="#ffff" size={32} aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Avançar no carrossel"
        disabled={!canScrollRight}
        onClick={() => scrollHorizontally("right")}
        className={cn(
          "absolute right-2 top-1/2 z-10 -translate-y-1/2 invisible group-hover:visible focus-visible:visible disabled:opacity-50 disabled:cursor-default hover:cursor-pointer max-md:hidden",
          showDots && "max-lg:hidden",
        )}
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
          "flex w-full lg:overflow-y-hidden max-h-full gap-6 scroll-smooth snap-x snap-mandatory max-lg:px-1",
          isScrollX
            ? "overflow-x-auto"
            : "overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          isDraggable && "cursor-grab select-none",
          isDragging && "cursor-grabbing snap-none scroll-auto",
        )}
      >
        {children}
      </div>

      {showDots && itemCount > 1 && (
        <div
          className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center max-lg:flex"
          role="group"
          aria-label="Navegação do carrossel"
        >
          {Array.from({ length: itemCount }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para o slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => scrollToItem(index)}
              className="flex size-7 items-center justify-center hover:cursor-pointer"
            >
              <span
                className={cn(
                  "size-2.5 rounded-full border border-white transition-colors",
                  activeIndex === index ? "bg-orange-primary" : "bg-white/50",
                )}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
