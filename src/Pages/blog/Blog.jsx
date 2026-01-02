import "./Blog.css";
import { SearchComponent } from "../../components/SearchComponent";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";
import { posts } from "./blogPost";
import parse, { domToReact } from "html-react-parser";
import PostsCarousel from "../../components/Blog/PostsCarousel";
import { useSearchParams, useParams } from "react-router";
import { CardPostSkeleton } from "../../components/Blog/skeletons/CardPostSkeleton";
import CardPosts from "../../components/Blog/CardPosts";
import { useDebounce } from "../../hooks/useDebounce";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showCardPosts, setShowCardPosts] = useState(false);
  const [cardPosts, setCardPosts] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [optionSelected, setOptionSelected] = useState(
    searchParams.get("category") || "none"
  );
  const { postSlug } = useParams();
  const post = posts.find((p) => p.slug === postSlug);

  const options = {
    replace({ attribs, children }) {
      if (!attribs) {
        return;
      }

      if (attribs.id === "leituras-recomendadas") {
        return (
          <section className="w-full py-8 max-sm:px-0">
            <h4 className="text-[clamp(0.8rem,4vw,1.3rem)] font-bold max-w-max mb-2">
              Leituras Recomendadas
            </h4>
            <PostsCarousel slug={post.slug} allPosts={posts} />
          </section>
        );
      }
    },
  };

  const handleInputChange = (value) => {
    setLoading(true);
    setUserSearch(value);

    const queryFormated = userSearch.toLocaleLowerCase().trim();

    const cardPostsFiltered = posts
      .filter((post) => post.category === optionSelected)
      .filter((post) => {
        return post.title.toLocaleLowerCase().includes(queryFormated);
      });
    setTimeout(() => {
      setCardPosts(cardPostsFiltered);
      setLoading(false);
      setShowCardPosts(true);
    }, 1000);
  };
  const handleInputDebounced = useDebounce(handleInputChange, 1000);

  console.log("cardPosts", cardPosts);
  return (
    <>
      <Header />

      {!loading && !userSearch && (
        <img
          src={post.banner}
          alt={post.alt}
          className="py-3 mx-auto w-full max-sm:h-[250px] max-lgs:h-[496px] max-h-[550px] max-sm:mt-[257px] max-lg:mt-[157px] mt-[90px] object-cover object-[40%_40%]"
        />
      )}
      <section className="w-full flex justify-around mt-14">
        {/* {loading && (
          <div className="lg:w-3/4 max-lg:justify-center py-9 flex flex-wrap">
            <CardPostSkeleton />
            <CardPostSkeleton />
            <CardPostSkeleton />
            <CardPostSkeleton />
            <CardPostSkeleton />
            <CardPostSkeleton />
          </div>
        )} */}
        {/* <div id="displayHtml"> {parse(post.body, options)} </div> */}

        {showCardPosts && (
          <div
            id="cardPostsContainer"
            className="lg:w-3/4 max-lg:justify-center py-9 flex flex-wrap gap-3"
          >
            {cardPosts.map((post) => (
              <CardPosts key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="bg-[#FBFBFB] mt-16 px-4 mr-8 flex flex-col gap-16 h-[500px] max-lgs:hidden ">
          <SearchComponent
            slug={post.slug}
            handleInputChange={handleInputDebounced}
          />
          <div className="border-t-2 w-full border-orange-primary" />
          <div className="h-full">
            <label htmlFor="#categories" className="font-semibold text-xl">
              CATEGORIAS
            </label>
            <optgroup
              id="categories"
              className="flex h-max flex-col gap-3 [&>option]:bg-gray-200 [&>option]:p-2 [&>option]:w-full [&>option]:text-[#707372] [&>option]:hover:cursor-pointer [&>option]:hover:opacity-85"
            >
              <option
                value="cobranca"
                onClick={(e) => setOptionSelected(e.target.value)}
                className={
                  optionSelected === "cobranca"
                    ? "border-l-4 border-orange-primary"
                    : ""
                }
              >
                Cobrança
              </option>
              <option
                value="credito"
                onClick={(e) => setOptionSelected(e.target.value)}
                className={
                  optionSelected === "credito"
                    ? "border-l-4 border-orange-primary"
                    : ""
                }
              >
                Crédito
              </option>
              <option
                value="inadimplencia"
                className={
                  optionSelected === "inadimplencia"
                    ? "border-l-4 border-orange-primary"
                    : ""
                }
                onClick={(e) => setOptionSelected(e.target.value)}
              >
                Inadimplência
              </option>
              <option
                value="none"
                className={
                  optionSelected === "none"
                    ? "border-l-4 border-orange-primary"
                    : ""
                }
                onClick={(e) => setOptionSelected(e.target.value)}
              >
                Sem Categoria
              </option>
            </optgroup>
          </div>
        </div>
      </section>
      <Footer isBgGray />
    </>
  );
}
