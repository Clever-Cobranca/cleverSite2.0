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
import parse from "html-react-parser";
import { useDebounce } from "../../hooks/useDebounce";
import { CardPostSkeleton } from "../../components/Blog/skeletons/CardPostSkeleton";
import { SearchComponent } from "../../components/SearchComponent";
import Carousel from "../../components/Carousel";
import PaginationPage from "../../components/Blog/pagination/PaginationPage";
import CardPosts from "../../components/Blog/CardPosts";
import NotFound from "../NotFound";

export default function Blog() {
  const bttnRef = useRef(null);
  const skeletonTimerRef = useRef(null);
  const [userSearch, setUserSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [optionSelected, setOptionSelected] = useState("Todas");
  const [optionValue, setOptionValue] = useState("");
  const { postSlug } = useParams();
  const post = posts.find((p) => p.slug === postSlug);
  const [postsSearched, setPostsSearched] = useState([]);

  const postsFilteredBySlug = posts
    .filter((p) => p.slug != postSlug)
    .splice(0, 6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

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

  console.log(postsSearched);

  //Todas as funcionalidades do handleSubmit
  function handleSubmitFunctionalities() {
    // 1. Limpa o timer do Skeleton anterior se o usuário submeteu de novo muito rápido
    if (skeletonTimerRef.current) {
      clearTimeout(skeletonTimerRef.current);
    }

    setLoading(true); //Loading do skeleton
    const queryFormated = userSearch.toLocaleLowerCase().trim();

    const postsSearchedFiltered = posts.filter((post) => {
      const matchesQuery = post.title
        .toLocaleLowerCase()
        .includes(queryFormated);

      const matchesCategory =
        optionSelected === "Todas" || post.category === optionSelected;

      return matchesQuery && matchesCategory;
    });

    // 2. Guarda o ID do timer na referência
    skeletonTimerRef.current = setTimeout(() => {
      setPostsSearched(postsSearchedFiltered);
      setLoading(false);
    }, 1000);
  }

  const handleDebouncedSubmit = useDebounce(handleSubmitFunctionalities, 1000);

  // Limpeza geral ao desmontar o componente (Evita memory leaks de ambos os timers)
  useEffect(() => {
    return () => {
      handleDebouncedSubmit.cancel(); // Cancela o debounce do lodash
      if (skeletonTimerRef.current) clearTimeout(skeletonTimerRef.current); // Cancela o setTimeout do skeleton
    };
  }, [handleDebouncedSubmit]);

  const options = {
    replace({ attribs }) {
      if (!attribs) {
        return;
      }

      if (attribs.id === "leituras-recomendadas") {
        return <></>;
      }
    },
  };

  if (!post) return <NotFound />;

  if (loading) {
    return (
      <>
        <Header>
          <div className="w-full lg:hidden z-20 sticky bg-white min-h-20 py-7 shadow-2xl">
            <div className="h-full w-full flex gap-2 flex-wrap pt-2 sm:justify-around sm:items-center">
              <h4 className="text-[#1A1A1A] text-xl max-sm:text-lg  max-sm:ml-3 font-light tracking-widest">
                NOTÍCIAS
              </h4>
            </div>
          </div>
        </Header>
        <BlogSkeleton />
      </>
    );
  }

  return (
    <>
      <Header>
        <div className="w-full lgs:hidden z-20 sticky bg-white min-h-20 py-7 shadow-2xl">
          <div
            id="postsContainer"
            className="h-full w-full flex gap-2 flex-wrap pt-2 sm:justify-around sm:items-center"
          >
            <h4 className="text-[#1A1A1A] text-xl max-sm:text-lg  max-sm:ml-3 font-light tracking-widest">
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
                <DropdownMenu className="z-10 text-xs font-family-headers">
                  <DropdownMenuTrigger
                    type="button"
                    className="py-2 px-5 text-black"
                  >
                    {optionValue || "Categorias"}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    onClick={() => bttnRef.current.click()}
                    className="gap-2"
                  >
                    {optionValue != "Todas" && (
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
                    )}
                    {optionSelected != "cobranca" && (
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
                    )}
                    {!optionSelected != "credito" && (
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
                    )}
                    {!optionSelected != "inadimplencia" && (
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
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SearchComponent>
            </form>
          </div>
        </div>
      </Header>
      <div key={postSlug}>
        <section className="flex sm:justify-center max-sm:w-full">
          {!loading && postsSearched.length <= 0 ? (
            <div id="displayHtml">
              {" "}
              {parse(post.body, options)}{" "}
              <section className="w-full sm:px-8 py-8 ">
                <h4 className="text-[clamp(0.8rem,4vw,1.3rem)] font-bold max-w-max mb-2">
                  Leituras Recomendadas
                </h4>
                <div className="max-h-[600px]">
                  <Carousel scrollMode="item">
                    {postsFilteredBySlug.map((post) => (
                      <div
                        key={post.id}
                        data-carousel-item
                        className="shrink-0 snap-start"
                      >
                        <CardPosts post={post} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </section>{" "}
            </div>
          ) : (
            <div className="min-h-full py-8 max-md:w-full flex flex-col items-center">
              <h1 className="font-family-headers mb-4 text-3xl">
                Resultado da pesquisa:{" "}
                {!userSearch ? optionValue : userSearch}
              </h1>
              <PaginationPage posts={postsSearched} />{" "}
            </div>
          )}
        </section>
      </div>
      <Footer isBgGray />
    </>
  );
}
