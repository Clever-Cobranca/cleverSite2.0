import { useEffect, useRef, useState } from "react";
import PaginationPage from "../../components/Blog/pagination/PaginationPage";
import { Header } from "../../components/Header/Header";
import { posts } from "./blogPost";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchComponent } from "../../components/SearchComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/dropdowMenu";
import { Footer } from "../../components/Footer/Footer";
import { CardPostSkeleton } from "../../components/Blog/skeletons/CardPostSkeleton";
import { cn } from "../../lib/utils";
import { useParams } from "react-router";
import NotFound from "../NotFound";

export default function BlogList() {
  const { pageNumber } = useParams();
  const page = pageNumber ? Number(pageNumber) : 1;
  const invalidPage = pageNumber !== undefined && (
    !/^[1-9]\d*$/.test(pageNumber) ||
    page < 2 ||
    page > Math.ceil(posts.length / 9)
  );
  const bttnRef = useRef(null);
  const skeletonTimerRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [cardPosts, setCardPosts] = useState(posts);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [userSearch, setUserSearch] = useState("");

  const [optionSelected, setOptionSelected] = useState("Todas");
  const [optionValue, setOptionValue] = useState("");

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
    // 1. Limpa o timer do Skeleton anterior se o usuário submeteu de novo muito rápido
    if (skeletonTimerRef.current) {
      clearTimeout(skeletonTimerRef.current);
    }

    setLoading(true); //Loading do skeleton
    setFiltersApplied(true);
    const queryFormated = userSearch.toLocaleLowerCase().trim();

    const cardPostsFiltered = posts.filter((post) => {
      const matchesQuery = post.title
        .toLocaleLowerCase()
        .includes(queryFormated);

      const matchesCategory =
        optionSelected === "Todas" || post.category === optionSelected;

      return matchesQuery && matchesCategory;
    });

    // 2. Guarda o ID do timer na referência
    skeletonTimerRef.current = setTimeout(() => {
      setCardPosts(cardPostsFiltered);
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

  if (invalidPage) return <NotFound />;

  return (
    <>
      <Header>
        <div className="w-full lg:hidden z-20 sticky bg-white min-h-20 py-7 shadow-2xl">
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
      <main>
        <section className="flex w-full justify-evenly max-lg:justify-center py-9 px-2">
          <div className="max-md:w-full flex flex-col items-center">
            <h1 className="px-2 text-[clamp(2.2rem,6vw,6rem)] font-family-headers">
              Clever NEWS
            </h1>
            {loading ? (
              <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <CardPostSkeleton key={index} />
                ))}
              </div>
            ) : (
              <PaginationPage posts={cardPosts} page={page} usePageLinks={!filtersApplied} />
            )}
          </div>
          <form
            aria-label="formulario_de_pesquisa_de_notícias"
            onSubmit={handleSubmit}
            className="bg-transparent 2xl:w-[320px] max-2xl:w-[200px] self-start sticky ml-5 top-52 max-lg:hidden mb-1.5 flex flex-col gap-16"
          >
            <SearchComponent
              handleInputChange={handleInputChange}
              bttnRef={bttnRef}
            />
            <div className="border-t-2 w-full border-orange-primary" />
            <div className="h-full font-family-headers">
              <label className="font-semibold text-xl lg:text-3xl">CATEGORIAS</label>
              <optgroup
                id="categories"
                className="flex  h-max flex-col gap-3 [&>option]:bg-gray-200 [&>option]:p-2 [&>option]:w-full [&>option]:text-[#707372] [&>option]:hover:cursor-pointer [&>option]:hover:opacity-85"
                onClick={() => bttnRef.current.click()}
              >
                <option
                  value="cobranca"
                  onClick={(e) => {
                    setOptionSelected(e.target.value);
                    setOptionValue("Cobrança");
                  }}
                  className={cn(
                    "xl:text-2xl",
                    optionSelected === "cobranca"
                      ? "border-l-4 border-orange-primary"
                      : ""
                  )
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
                  className={cn(
                    "xl:text-2xl",
                    optionSelected === "credito"
                      ? "border-l-4 border-orange-primary"
                      : ""
                  )
                  }
                >
                  Crédito
                </option>
                <option
                  value="inadimplencia"
                  className={cn(
                    "xl:text-2xl",
                    optionSelected === "inadimplencia"
                      ? "border-l-4 border-orange-primary"
                      : ""
                  )
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
                  className={cn(
                    "xl:text-2xl",
                    optionSelected === "none"
                      ? "border-l-4 border-orange-primary"
                      : ""
                  )
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
      </main>
      <Footer />
    </>
  );
}
