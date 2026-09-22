import { cn } from "../lib/utils";
import LiquidGlassFilter from "./LiquidGlassFilter";

export const DashboardImageWithText = ({
  imgSrc,
  title,
  position,
  text,
  children,
}) => {
  return (
    <>
      <LiquidGlassFilter />
      <div className="relative w-full rounded-2xl sm:h-full">
        <img
          src={imgSrc}
          alt={title}
          className="w-full rounded-2xl object-cover max-sm:aspect-[4/3] sm:h-full"
        />
        <div
          className={cn(
            "backdrop-liquid-glass dashboard-mobile-panel relative z-10 mx-3 -mt-8 flex flex-col gap-3 rounded-2xl p-5 shadow-lg sm:absolute sm:inset-y-1 sm:mt-0 sm:gap-2 sm:p-4 sm:shadow-none md:max-w-2/3 lg:inset-y-8 lg:max-w-2/4 xl:p-11",
            position === "left" ? "sm:left-1 lg:left-8" : "sm:right-1 lg:right-8",
          )}
        >
          <h3 className="font-family-headers text-[clamp(2rem,7vw,4rem)] leading-tight sm:text-[clamp(1.6rem,5vw,4rem)]">
            {title}
          </h3>
          <p className="font-semibold leading-relaxed text-base md:text-sm xl:text-xl">
            {text}
          </p>
          {children}
        </div>
      </div>
    </>
  );
};
