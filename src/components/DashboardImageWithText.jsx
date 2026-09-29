import { cn } from "../lib/utils";
import LiquidGlassFilter from "./LiquidGlassFilter";

export const DashboardImageWithText = ({
  imgSrc,
  title,
  position,
  text,
  children,
  className,
  imageClassName,
  panelClassName,
}) => {
  return (
    <>
      <LiquidGlassFilter />
      <div className={cn("relative w-full rounded-2xl sm:h-full", className)}>
        <img
          src={imgSrc}
          alt={title}
          className={cn(
            "w-full rounded-2xl object-cover max-sm:aspect-[4/3] sm:min-h-full",
            imageClassName,
          )}
        />
        <div
          className={cn(
            "backdrop-liquid-glass dashboard-mobile-panel max-h-[80%] relative z-10 mx-3 -mt-8 flex flex-col gap-3 rounded-2xl p-5 shadow-lg lg:absolute lg:inset-y-1 lg:mt-0 lg:gap-2 lg:p-4 lg:shadow-none lg:max-w-2/3 lg:inset-y-8 lg:max-w-2/4 xl:p-11",
            position === "left" ? "lg:left-1 lg:left-8" : "lg:right-1 lg:right-8",
            panelClassName,
          )}
        >
          <h3 className="font-family-headers text-[clamp(2rem,7vw,4rem)] leading-tight lg:text-[clamp(1.6rem,5vw,4rem)]">
            {title}
          </h3>
          <p className="font-semibold leading-relaxed text-xl xl:text-2xl">
            {text}
          </p>
          {children}
        </div>
      </div>
    </>
  );
};
