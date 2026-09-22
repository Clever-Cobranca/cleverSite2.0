import { Link, useLocation } from "react-router";
import { cn } from "../../lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../dropdowMenu";
import LiquidGlassFilter from "../LiquidGlassFilter";

export function NavHeaderComponent() {
  const location = useLocation();

  const items = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Clever",
      path: "",
    },
    {
      name: "Blog",
      path: "/blog/juros-altos-aumentam-inadimplencia",
    },
    {
      name: "Educação",
      path: "/educacao",
    },
    {
      name: "Quero Pagar",
      path: "/pagar",
    },
    {
      name: "Nossos Serviços",
      path: "/servicos",
    },
    {
      name: "Trabalhe Conosco",
      path: "/trabalhe-conosco",
    },
  ];

  return (
    <nav className={"flex justify-between max-lgs:p-4 max-lgs:flex-col"}>
      <div className="flex items-center">
        <ul className={"flex sm:gap-10 gap-5 lgs:items-center max-lgs:flex-col "}>
          {items.map((item) => {
            return (
              <li key={item.name} className="text-[18px] text-white">
                {item.name == "Clever" ? (
                  <DropdownMenu
                    className="z-10"
                    isActive={
                      location.pathname === "/sobre" ||
                      location.pathname === "/cultura"
                    }
                  >
                    <DropdownMenuTrigger
                      isActive={
                        location.pathname === "/sobre" ||
                        location.pathname === "/cultura"
                      }
                    >
                      A Clever
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link to="/sobre">Sobre Nós</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/cultura">Nossa Cultura</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <LiquidGlassFilter />
                    <Link
                      to={item.path}
                      // Adicione 'group' aqui vvv
                      className={cn(
                        "group relative block hover:text-orange-primary",
                        item.path === location.pathname
                          ? "backdrop-liquid-glass px-5 max-sm:w-max py-0.5 rounded-lg text-orange-primary"
                          : "text-white",
                      )}
                    >
                      {item.name}
                    </Link>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
