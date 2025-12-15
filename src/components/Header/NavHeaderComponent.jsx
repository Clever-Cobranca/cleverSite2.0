import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
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
import { clsx } from "clsx";

export function NavHeaderComponent() {
  const location = useLocation();

  const items = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Blog",
      path: "/solucoes",
    },
    {
      name: "Educação",
      path: "/blog",
    },
    {
      name: "Quero Pagar",
      path: "/pagar",
    },
    {
      name: "Trabalhe Conosco",
      path: "/educacao",
    },
  ];

  return (
    <nav className={clsx("flex gap-11 max-md:p-4 max-md:flex-col", {})}>
      <div className="flex items-center gap-16">
        <ul className={clsx("flex gap-8  max-md:flex-col ")}>
          {items.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.name} className="relative text-[18px]">
                <Link
                  to={item.path}
                  // Adicione 'group' aqui vvv
                  className={cn(
                    "group relative block",
                    isActive ? "text-[#F1B434]" : "text-black"
                  )}
                >
                  {item.name}

                  {/* Se estiver ATIVO, mostra a borda fixa. Se NÃO, prepara a animação de hover */}
                  {isActive ? (
                    // Borda fixa do item ativo
                    <span className="absolute -bottom-[2px] left-0 h-[3px] w-full bg-[#F1B434] rounded-full"></span>
                  ) : (
                    // Animação para itens inativos
                    <span className="absolute -bottom-[2px] left-0 h-[3px] w-0 bg-[#F1B434] transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
                  )}
                </Link>
              </li>
            );
          })}

          <li>
            <DropdownMenu className="z-10">
              <DropdownMenuTrigger>A Clever</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/Sobre">Sobre Nós</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/cultura">Nossa Cultura</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/Serviços">Nossos Serviços</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
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
    </nav>
  );
}
