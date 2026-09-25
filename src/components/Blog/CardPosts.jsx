import { Link } from "react-router";

export default function CardPosts({ post }) {
  return (
    <div className="@max-sm:w-full w-[340px] max-h-[510px] mb-4 flex flex-col items-center">
      <Link to={{ pathname: `/blog/${post.slug}` }} className="w-full">
        <img
          id="carouselImg"
          src={post.banner}
          alt={post.title}
          className="h-[230px] max-sm:h-[160px] w-full"
        />
      </Link>
      <div>
        <Link to={`/blog/${post.slug}`}>
          <p className="font-family-headers font-extralight text-[clamp(1rem,4vw,1.4rem)] leading-5 pt-2">
            {post.title}
          </p>
        </Link>
        <div className="mt-2.5 max-sm:flex flex-col items-center font-family-headers">
          <span className="max-sm:text-xs">
            {new Date(post.date).toLocaleDateString("pt-br", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <p className="text-[clamp(0.3rem,4vw,1.1rem)] leading-4 tracking-wider text-black">
            {post.about}
          </p>
        </div>
      </div>
    </div>
  );
}
