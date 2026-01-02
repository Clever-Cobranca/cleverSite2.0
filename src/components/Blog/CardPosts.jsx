import { Link } from "react-router";

export default function CardPosts({ post }) {

  console.log(post.slug)
  return (
    <div className="w-[340px] h-[368px] md:max-h-[510px] mb-4 flex flex-col items-center">
      <Link
        to={`/blog/${post.slug}?category=${post.category}`}
        className="w-full  max-h-[230px] hover:cursor-pointer"
      >
        <img id="carouselImg" src={post.banner} alt={post.title} />
      </Link>
      <div>
        <Link
          to={`/blog/${post.slug}?category=${post.category}`}
        >
          <p id="carouselP">
            {post.title}
          </p>
        </Link>
        <div className="mt-2.5 max-sm:flex flex-col items-center">
          <span className="text-xs font-light">
            {new Date(post.date).toLocaleDateString("pt-br", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <p className="text-[clamp(0.3rem,4vw,0.875rem)]">{post.about}</p>
        </div>
      </div>
    </div>
  );
}
