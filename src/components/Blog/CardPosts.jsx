import { Link } from "react-router";

export default function CardPosts({ post, setShowPosts }) {
  return (
    <div className="w-[340px] max-h-[510px] mb-4 flex flex-col items-center">
      <Link
        to={`/blog/${post.slug}?category=${post.category}`}
        className="w-full"
        onClick={() => setShowPosts(false)}
      >
        <img
          id="carouselImg"
          src={post.banner}
          alt={post.title}
          className="h-[230px] max-sm:h-[160px] w-full"
        />
      </Link>
      <div>
        <Link
          to={`/blog/${post.slug}?category=${post.category}`}
          onClick={() => setShowPosts(false)}
        >
          <p id="carouselTitle">{post.title}</p>
        </Link>
        <div className="mt-2.5 max-sm:flex flex-col items-center">
          <span className="text-xs font-light">
            {new Date(post.date).toLocaleDateString("pt-br", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <p
            id="carouselAbout"
            className="text-[clamp(0.3rem,4vw,0.875rem)] text-black"
          >
            {post.about}
          </p>
        </div>
      </div>
    </div>
  );
}
