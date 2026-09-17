import { cn } from "../lib/utils";
import LiquidGlassFilter from "./LiquidGlassFilter";

export const DashboardImageWithText = ({ imgSrc, title, position, text }) => {
  const titleSplited = title.split(" ");
  return (
    <>
      <LiquidGlassFilter />
      <div className="relative w-full h-full rounded-2xl">
        <img src={imgSrc} alt={title} className="w-full h-full" />
        <div
          className={cn(
            "absolute rounded-2xl p-4 xl:p-8 max-sm:inset-0 lg:max-w-2/4 md:max-w-2/3 backdrop-liquid-glass inset-y-1 lg:inset-y-8 flex flex-col  sm:gap-2",
            position === "left" ? "lg:left-8 left-1" : "lg:right-8 right-1",
          )}
        >
          <h3 className="font-family-headers text-[clamp(1.6rem,5vw,4rem)]">
            {titleSplited[0]}{" "}
            <b className="text-orange-primary">{titleSplited[1] ?? ""}</b>
          </h3>
          <p className="font-semibold overflow-y-auto xl:text-xl md:text-sm max-sm:text-xs">{text}</p>
        </div>
      </div>
    </>
  );
};
