export default function CardPosts({ post }) {
  return (
    <div className="w-[340px] h-[368px] md:h-[510px] mb-4 max-sm:min-w-full flex flex-col items-center">
      <img
        src={post.banner}
        alt={post.title}
        className="w-full h-[180px]"
      />
      <div id="carousel-text-container">
        <p className="text-[clamp(0.3rem,4vw,0.875rem)] font-semibold">
          {post.title}
        </p>
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
