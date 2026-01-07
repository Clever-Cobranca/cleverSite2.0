import "./Blog.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { posts } from "./blogPost";
import { useParams } from "react-router";
import { BlogSkeleton } from "../../components/Blog/skeletons/BlogSkeleton";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/dropdowMenu";
import parse, { domToReact } from "html-react-parser";
import { useDebounce } from "../../hooks/useDebounce";
import { CardPostSkeleton } from "../../components/Blog/skeletons/CardPostSkeleton";
import { SearchComponent } from "../../components/SearchComponent";
import PostsCarousel from "../../components/Blog/PostsCarousel";
import PaginationPage from "../../components/Blog/pagination/PaginationPage";

export default function Blog() {
  const bttnRef = useRef(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [cardPosts, setCardPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [optionSelected, setOptionSelected] = useState("Todas");
  const [optionValue, setOptionValue] = useState("");
  const { postSlug } = useParams();
  const post = posts.find((p) => p.slug === postSlug);

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

    if (optionSelected == "Todas") {
      //Se for none pesquisa independente da categoria
      cardPostsFiltered = posts.filter((post) => {
        return post.title.toLocaleLowerCase().includes(queryFormated);
      });
    } else {
      // Se não, filtra primeiro a categoria e dentro do array da categoria especifica pesquisa a query
      cardPostsFiltered = posts
        .filter(
          (p) =>
            p.category === (optionSelected == "Todas" ? "none" : optionSelected)
        )
        .filter((post) => {
          return post.title.toLocaleLowerCase().includes(queryFormated);
        });
    }
    //Timeout para o Skeleton dos posts
    setTimeout(() => {
      setCardPosts(cardPostsFiltered);
      setShowPosts(true);
      setQuery(queryFormated ? queryFormated : optionValue);
      setLoading(false);
    }, 1000);
  }

  const handleDebouncedSubmit = useDebounce(handleSubmitFunctionalities, 1000);

  const options = {
    replace({ attribs, children }) {
      if (!attribs) {
        return;
      }

      if (attribs.id === "leituras-recomendadas") {
        return (
          <section className="w-full py-8 ">
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
        <Header />
        <BlogSkeleton />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Header />
        <section className="w-full flex justify-around mt-14">
          {loading && (
            <div className="lg:w-3/4 max-sm:mt-60 max-lg:mt-48 mt-26 flex flex-col">
              <div
                class="block sm:w-[400px] ml-2 w-[250px] shadow-md bg-clip-border h-2 mb-4 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 text-gray-600 rounded-full animate-pulse
              "
              >
                &nbsp;
              </div>
              <div className=" flex flex-wrap pb-9 ">
                <CardPostSkeleton />
                <CardPostSkeleton />
                <CardPostSkeleton />
                <CardPostSkeleton />
                <CardPostSkeleton />
                <CardPostSkeleton />
              </div>
            </div>
          )}
        </section>
      </>
    );
  }

  return (
    <>
      <Header>
        <div className="w-full lg:hidden z-20 fixed top-[90px] bg-white min-h-20 py-7 shadow-2xl">
          <div className="h-full w-full flex gap-2 flex-wrap pt-2 sm:justify-around sm:items-center">
            <h4 className="text-[#1A1A1A] text-xl max-sm:text-lg font-light tracking-widest">
              NOTÍCIAS
            </h4>
            <form
              onSubmit={handleSubmit}
              aria-label="formulario_de_pesquisa_de_notícias"
              className="flex items-center gap-3.5 mx-2 max-sm:flex-wrap-reverse"
            >
              <SearchComponent
                slug={post.slug}
                userSearch={userSearch}
                handleInputChange={handleInputChange}
                bttnRef={bttnRef}
              >
                <DropdownMenu className="z-10 text-xs">
                  <DropdownMenuTrigger type="button" className="p-0">
                    {optionValue || "Categorias"}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent onClick={() => bttnRef.current.click()}>
                    <DropdownMenuItem type="button" className="w-full">
                      <option
                        onClick={() => {
                          setOptionSelected("Todas");
                          setOptionValue("Todas");
                        }}
                      >
                        Todas
                      </option>
                    </DropdownMenuItem>
                    <DropdownMenuItem type="button" className="w-full">
                      <option
                        onClick={() => {
                          setOptionSelected("cobranca");
                          setOptionValue("Cobrança");
                        }}
                      >
                        Cobrança
                      </option>
                    </DropdownMenuItem>
                    <DropdownMenuItem type="button">
                      <option
                        onClick={() => {
                          setOptionSelected("credito");
                          setOptionValue("Crédito");
                        }}
                      >
                        Crédito
                      </option>
                    </DropdownMenuItem>
                    <DropdownMenuItem type="button" className="w-full">
                      <option
                        onClick={() => {
                          setOptionSelected("inadimplencia");
                          setOptionValue("Inadimplência");
                        }}
                      >
                        Inadimplência
                      </option>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SearchComponent>
            </form>
          </div>
        </div>
      </Header>
      <div key={postSlug}>
        {!loading && !showPosts && (
          <img
            src={post.banner}
            alt={post.alt}
            className="py-3 mx-auto w-full max-sm:h-[250px] max-lgs:h-[496px] max-h-[550px] max-sm:mt-[190px] max-lg:mt-[157px] mt-[90px] object-cover object-[40%_40%]"
          />
        )}
        <section className="flex items-baseline">
          {!loading && !showPosts ? (
            <div id="displayHtml"> {parse(post.body, options)} </div>
          ) : (
            !loading &&
            showPosts && (
              <section className="flex max-sm:mt-56 max-lg:mt-36 sm:px-4 mt-16 lg:w-3/4 max-lg:justify-center py-9 flex-col gap-4">
                <h1 className="font-family-roboto-slab px-2 text-[clamp(1rem,4vw,1.2rem)]">
                  Resultados da pesquisa: <strong>{query}</strong>
                </h1>
                <div id="cardPostsContainer" className="max-md:w-full">
                  <PaginationPage
                    posts={cardPosts}
                    setShowPosts={setShowPosts}
                  />
                </div>
              </section>
            )
          )}
          {/* Componente de pesquisa  */}
          <form
            aria-label="formulario_de_pesquisa_de_notícias"
            onSubmit={handleSubmit}
            className="bg-[#FBFBFB] mt-16 pt-6 px-4 mr-8 flex flex-col gap-16 h-[500px] max-lg:hidden "
          >
            <SearchComponent
              slug={post.slug}
              handleInputChange={handleInputChange}
              bttnRef={bttnRef}
            />
            <div className="border-t-2 w-full border-orange-primary" />
            <div className="h-full">
              <label htmlFor="#categories" className="font-semibold text-xl">
                CATEGORIAS
              </label>
              <optgroup
                id="categories"
                className="flex h-max flex-col gap-3 [&>option]:bg-gray-200 [&>option]:p-2 [&>option]:w-full [&>option]:text-[#707372] [&>option]:hover:cursor-pointer [&>option]:hover:opacity-85"
                onClick={() => bttnRef.current.click()}
              >
                <option
                  value="cobranca"
                  onClick={(e) => {
                    setOptionSelected(e.target.value);
                    setOptionValue("Cobrança");
                  }}
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
                  onClick={(e) => {
                    setOptionSelected(e.target.value);
                    setOptionValue("Crédito");
                  }}
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
                  onClick={(e) => {
                    setOptionSelected(e.target.value);
                    setOptionValue("Inadimplência");
                  }}
                >
                  Inadimplência
                </option>
                <option
                  value="Todas"
                  className={
                    optionSelected === "none"
                      ? "border-l-4 border-orange-primary"
                      : ""
                  }
                  onClick={(e) => {
                    setOptionSelected("none");
                    setOptionValue(e.target.value);
                  }}
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
