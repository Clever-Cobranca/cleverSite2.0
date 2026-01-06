import { useState } from "react";
import Logo from "../../../public/Logo.png";
import "../../global.css";
import { HeaderModal } from "./HeaderModal";
import { NavHeaderComponent } from "./NavHeaderComponent";
import { IoMenuOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../dropdowMenu";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { SearchComponent } from "../SearchComponent";
import { useLocation } from "react-router";

export function Header({
  post,
  handleSubmit,
  handleInputChange,
  userSearch,
  setOptionSelected,
  bttnRef
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();


  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const result = location.pathname.replace(/(^\/[^\/]+)\/.*$/, "$1");

  return (
    <>
      <header className="pt-4 z-40 flex items-center-safe justify-between max-sm:justify-between pl-16 pr-15 w-full border border-black/20 sticky top-0 bg-white">
        <div className="max-[1056px]:hidden flex items-center gap-10">
          <a href="/">
            <img src={Logo} alt="Icon Clever" />
          </a>
          <NavHeaderComponent />
        </div>
        <img src={Logo} className="lgs:hidden" alt="Icon Clever" />
        <IoMenuOutline
          aria-label="Abrir Modal"
          size={32}
          className="hover:cursor-pointer lgs:hidden"
          onClick={() => setIsModalOpen(true)}
        />

        <div className="flex items-center gap-5 max-[1056px]:hidden">
          <a target="blank" href="https://www.instagram.com/clevercobranca">
            <FaInstagram size={20} />
          </a>
          <a
            target="blank"
            href="https://web.facebook.com/clevercobranca?_rdc=1&_rdr#"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            target="blank"
            href="https://www.tiktok.com/@cleverassessoria1?is_from_webapp=1&sender_device=pc"
          >
            <FaTiktok size={20} />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/@cleverassessoriaecobranca7043"
          >
            <FaYoutube size={20} />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/company/clevercobranca/?viewAsMember=true"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            target="blank"
            href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+quero+saber+mais!&type=phone_number&app_absent=0"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </header>
      {(result === "/teste" || result === "/blog") && (
        <section className="w-full lg:hidden z-20 fixed top-[90px] bg-white min-h-20 py-7 shadow-2xl">
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
                    Categorias
                  </DropdownMenuTrigger>
                  <DropdownMenuContent onClick={() => bttnRef.current.click()}>
                    <DropdownMenuItem type="button" className="w-full">
                      <option onClick={() => {setOptionSelected("Todas")}}>
                        Todas
                      </option>
                    </DropdownMenuItem>
                    <DropdownMenuItem type="button" className="w-full">
                      <option onClick={() => setOptionSelected("cobranca")}>
                        Cobrança
                      </option>
                    </DropdownMenuItem>
                    <DropdownMenuItem type="button">
                      <option onClick={() => setOptionSelected("credito")}>
                        Crédito
                      </option>
                    </DropdownMenuItem>
                    <DropdownMenuItem type="button" className="w-full">
                      <option
                        onClick={() => setOptionSelected("inadimplencia")}
                      >
                        Inadimplência
                      </option>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SearchComponent>
            </form>
          </div>
        </section>
      )}

      <HeaderModal isModalOpen={isModalOpen} setIsModalOpen={handleModal} />
    </>
  );
}
