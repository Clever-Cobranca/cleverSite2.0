export const DashboardImage = (props) => {
  return (
    <div data-carousel-item className="relative  w-full shrink-0 snap-start">
      <img className="w-full" src={props.imgSrc} alt="Clever Informações" />
      <div
        name="tabDescription"
        className="absolute md:left-12 md:right-12  top-1/2 z-[60] flex -translate-y-1/2 flex-col md:gap-4 gap-2 px-4 md:px-8"
      >
        <h1 className="text-[clamp(0.8rem,3vw,4.25rem)]  font-medium text-white text-shadow-md text-shadow-black-primary">
          {props.h1}{" "}
          <italic className="font-family-garamond text-[clamp(0.8rem,4vw,4.7rem)] italic text-shadow-sm font-semibold text-orange-primary">
            {props.italicText}
          </italic>{" "}
          <br /> {props.subtitle ?? ""}
        </h1>
        {props.children}
      </div>
    </div>
  );
};
