export default function CardPosts() {
  const post = {
    id: 48,
    banner: "/reincidencia.jpg",
    date: "2025-09-29T00:00",
    slug: "reincidencia-inadimplencia-bate-recorde",
    title:
      "Reincidência na Inadimplência Bate Recorde: Como Proteger seu Crédito na Janela Crítica de 74 Dias",
    about:
      "O cenário da inadimplência no Brasil acaba de ganhar novos contornos preocupantes.",
  };

  return (
    <div className="w-[440px] max-sm:w-[240px] flex flex-col items-center">
      <img src={post.banner} alt={post.title} className="w-full sm:h-[244px]" />
      <div>
        <p className="text-[clamp(0,3rem,4vw,0.875rem)] font-semibold">
          {post.title}
        </p>
        <div className="mt-2.5">
          <span className="text-xs font-light">{new Date(post.date).toLocaleDateString("pt-br", {day: "2-digit", month: "short", year: "numeric"})}</span>
          <p className="text-[clamp(0,3rem,4vw,0.875rem)]">{post.about}</p>
        </div>
      </div>
    </div>
  );
}
