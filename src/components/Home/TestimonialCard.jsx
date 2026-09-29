export function TestimonialCard({ photo, name, role, testimonial }) {
  return (
    <figure
      className="
        m-0 flex md:min-w-[450px] min-w-72 flex-col items-center
        rounded-[48px] bg-white md:px-6 pb-14 mb-6 md:mx-4 pt-10
        text-center text-[#111315]
        shadow-[0_2px_2px_rgba(0,0,0,0.18)]
        transition duration-200 ease-out
        hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
        motion-safe:hover:-translate-y-1
        motion-reduce:transition-none
        lg:rounded-[72px] lg:px-10 lg:pb-20 lg:pt-14
      "
    >
      {photo ? (
        <img
          src={photo}
          alt={`Foto de ${name}`}
          loading="lazy"
          className="
          size-32 shrink-0 rounded-full object-cover object-top-left
          lg:size-[180px]
        "
        />
      ) : (
        <span className="bg-gray-300 size-32 shrink-0 rounded-full"></span>
      )}

      <figcaption
        className="
          mt-6 font-family-garamond text-xl
          font-semibold italic leading-none
          lg:text-3xl
        "
      >
        <span className="block xl:text-4xl">{name}</span>
        <span className="block xl:text-4xl">{role}</span>
      </figcaption>

      <blockquote
        className="
          mx-0 mb-0 mt-6 font-family-garamond
          text-xl font-semibold italic
          leading-[1.3] text-orange-primary
          lg:text-2xl xl:text-3xl
        "
      >
        <span className="text-[#111315]">“</span>
        {testimonial}
        <span className="text-[#111315]">”</span>
      </blockquote>
    </figure>
  );
}
