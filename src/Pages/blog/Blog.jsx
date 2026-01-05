import "./Blog.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { posts } from "./blogPost";
import { useParams } from "react-router";
import { BlogSkeleton } from "../../components/Blog/skeletons/BlogSkeleton";
import CardPosts from "../../components/Blog/CardPosts";
import parse, { domToReact } from "html-react-parser";
import { useDebounce } from "../../hooks/useDebounce";
import { CardPostSkeleton } from "../../components/Blog/skeletons/CardPostSkeleton";
import { SearchComponent } from "../../components/SearchComponent";
import PostsCarousel from "../../components/Blog/PostsCarousel";

export default function Blog() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [cardPosts, setCardPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [optionSelected, setOptionSelected] = useState("none");
  const { postSlug } = useParams();
  const post = posts.find((p) => p.slug === postSlug);

  console.log(post);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [postSlug]);

  //Altera valor no input de pesquisa
  const handleInputChange = (value) => {
    setUserSearch(value);
  };

  //função submit do Form do componente de pesquisa
  function handleSubmit(e) {
    e.preventDefault();
    handleDebouncedSubmit();
  }

  //Todas as funcionalidades do handleSubmit
  function handleSubmitFunctionalities() {
    let cardPostsFiltered = [];
    setLoading(true); //Loading do skeleton
    const queryFormated = userSearch.toLocaleLowerCase().trim();

    if (optionSelected == "none") {
      //Se for none pesquisa independente da categoria
      cardPostsFiltered = posts.filter((post) => {
        return post.title.toLocaleLowerCase().includes(queryFormated);
      });
    } else {
      // Se não, filtra primeiro a categoria e dentro do array da categoria especifica pesquisa a query
      cardPostsFiltered = posts
        .filter((p) => p.category === optionSelected)
        .filter((post) => {
          return post.title.toLocaleLowerCase().includes(queryFormated);
        });
    }
    //Timeout para o Skeleton dos posts
    setTimeout(() => {
      setCardPosts(cardPostsFiltered);
      setShowPosts(true);
      setQuery(queryFormated);
      setLoading(false);
    }, 1200);
  }

  const handleDebouncedSubmit = useDebounce(handleSubmitFunctionalities, 1000);

  console.log(optionSelected);

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

  if (isPageLoading || !post) {
    return (
      <>
        <Header
          post={post}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        <BlogSkeleton />
      </>
    );
  }

  return (
    <>
      <Header
        post={post}
        handleSubmit={handleSubmit}
        userSearch={userSearch}
        handleInputChange={handleInputChange}
        setOptionSelected={setOptionSelected}
      />
      <div key={postSlug}>
        {!loading && !showPosts && (
          <img
            src={post.banner}
            alt={post.alt}
            className="py-3 mx-auto w-full max-sm:h-[250px] max-lgs:h-[496px] max-h-[550px] max-sm:mt-[257px] max-lg:mt-[157px] mt-[90px] object-cover object-[40%_40%]"
          />
        )}
        <section className="w-full flex justify-around mt-14">
          {loading && (
            <div className="lg:w-3/4 max-lg:justify-center py-9 flex flex-wrap">
              <CardPostSkeleton />
              <CardPostSkeleton />
              <CardPostSkeleton />
              <CardPostSkeleton />
              <CardPostSkeleton />
              <CardPostSkeleton />
            </div>
          )}
          {!loading && !showPosts ? (
            <div id="displayHtml"> {parse(post.body, options)} </div>
          ) : (
            !loading &&
            showPosts && (
              <section className="flex max-sm:mt-54 max-sm:px-0 max-lg:mt-36 max-lg:px-4 mt-16 lg:w-3/4 max-lg:justify-center py-9 flex-col gap-4">
                <h1 className="font-family-roboto-slab max-sm:px-2 text-[clamp(1rem,4vw,1.2rem)]">
                  Resultados da pesquisa: <strong>{query}</strong>
                </h1>
                <div id="cardPostsContainer" className="flex flex-wrap  gap-3">
                  {cardPosts.map((post) => (
                    <CardPosts
                      key={post.id}
                      post={post}
                      setShowPosts={setShowPosts}
                    />
                  ))}
                </div>
              </section>
            )
          )}

          <form
            aria-label="formulario_de_pesquisa_de_notícias"
            onSubmit={handleSubmit}
            className="bg-[#FBFBFB] mt-16 px-4 mr-8 flex flex-col gap-16 h-[500px] max-lg:hidden "
          >
            <SearchComponent
              slug={post.slug}
              userSearch={userSearch}
              handleInputChange={handleInputChange}
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
          </form>
        </section>
      </div>
      <Footer isBgGray />
    </>
  );
}
