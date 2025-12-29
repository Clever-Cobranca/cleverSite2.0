import "./Blog.css";
import { SearchComponent } from "../../components/SearchComponent";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";
import { posts } from "./blogPost";
import parse, { domToReact } from "html-react-parser";
import PostsCarousel from "../../components/Blog/PostsCarousel";

export default function Blog() {
  const post = posts[1];
  const [optionSelected, setOptionSelected] = useState("none");

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
            <PostsCarousel />
          </section>
        );
      }
    },
  };

  return (
    <>
      <Header />
      <img
        src={post.banner}
        alt={post.alt}
        className="py-3 mx-auto w-full max-lgs:h-[496px] max-h-[550px] max-lg:mt-[157px] mt-[90px] object-cover object-[40%_40%]"
      />
      <section className="w-full flex justify-around mt-14">
        <div id="displayHtml"> {parse(post.body, options)} </div>
        <div className="bg-[#FBFBFB] mt-16 px-4 mr-8 flex flex-col gap-16 h-[500px] max-lg:hidden ">
          <SearchComponent />
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
