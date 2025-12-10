import Logo from '../../assets/Logo.png'
import Intagram from '../../assets/Instagram.png'
import Facebook from '../../assets/Facebook.png'
import Tiktok from '../../assets/Tiktok.png'
import Youtube from '../../assets/YouTube.png'
import Linkedin from '../../assets/Linkedin.png'
import WhatsApp from '../../assets/WhatsApp.png'
import '../../global.css'
import { Outlet, Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "../dropdowMenu"

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
        path: "/blog"
    },
    {
        name: "Quero Pagar",
        path: "/pagar",
    },
    {
        name: "Trabalhe Conosco",
        path: "/educacao",
    }
];

export function Header() {
    const location = useLocation()

    return (
        <header className='pt-4 pl-16 pr-16 w-full border border-black/20 fixed bg-[#fff]'>
            <nav className='flex justify-between'>
                <div className='flex items-center gap-16'>
                    <img src={Logo} />
                    <ul className='flex gap-8'>
                        {items.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <li key={item.name} className="relative text-[18px]">
                                    <Link
                                        to={item.path}
                                        // Adicione 'group' aqui vvv
                                        className={cn("group relative block", isActive ? "text-[#F1B434]" : "text-black")}
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
                            )
                        })}

                        <li>
                            <DropdownMenu className="z-10">
                                <DropdownMenuTrigger>A Clever</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem><Link to="/Sobre">Sobre Nós</Link></DropdownMenuItem>
                                    <DropdownMenuItem>Nossa Cultura</DropdownMenuItem>
                                    <DropdownMenuItem>Nossos Serviços</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>

                </div>

                <div className='flex items-center gap-8'>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Intagram} /></a>
                    <a target='blank' href='https://web.facebook.com/clevercobranca?_rdc=1&_rdr#'><img src={Facebook} /></a>
                    <a target='blank' href='https://www.tiktok.com/@cleverassessoria1?is_from_webapp=1&sender_device=pc'><img src={Tiktok} /></a>
                    <a target='blank' href='https://www.youtube.com/@cleverassessoriaecobranca7043'><img src={Youtube} /></a>
                    <a target='blank' href='https://www.linkedin.com/company/clevercobranca/?viewAsMember=true'><img src={Linkedin} /></a>
                    <a target='blank' href='https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+quero+saber+mais!&type=phone_number&app_absent=0'><img src={WhatsApp} /></a>
                </div>
            </nav>
        </header>
    );
}