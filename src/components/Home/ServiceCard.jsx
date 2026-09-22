import { Link } from "react-router";

export function ServiceCard({ title, description, icon, to }) {
  return (
    <Link
      to={to}
      className="
        block h-full min-w-0 rounded-[24px] bg-white
        p-6 text-[#111315] no-underline
        shadow-[0_2px_2px_rgba(0,0,0,0.18)]
        transition duration-200 ease-out
        hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
        motion-safe:hover:-translate-y-1
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-orange-primary focus-visible:ring-offset-4
        motion-reduce:transition-none
        lg:p-8
      "
    >
      <article className="flex h-[220px] justify-center flex-col">
        <header className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="
              flex size-10 shrink-0 items-center justify-center
              text-orange-primary lg:size-12
              [&>svg]:h-full [&>svg]:w-full
              [&>img]:h-full [&>img]:w-full
              [&>img]:object-contain
            "
          >
            {icon}
          </span>

          <h3
            className="
              min-w-0 font-family-headers
              text-2xl leading-tight uppercase lg:text-3xl
            "
          >
            {title}
          </h3>
        </header>

        <p className="mt-5 text-base font-semibold leading-relaxed lg:text-lg">
          {description}
        </p>
      </article>
    </Link>
  );
}
