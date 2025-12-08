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
        name: "inicio",
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

export function Menu() {
    const location = useLocation()

    return (
        <header className='mt-4 ml-16 mr-16 relative'>
            <nav className='flex justify-between'>
                <div className='flex items-center gap-16'>
                    <img src={Logo} />
                    <ul className='flex gap-8'>
                        {items.map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className={cn(
                                    "relative w-full flex py-1.5 px-2.5 rounded-[6px] gap-[11px] items-center",
                                    location.pathname === item.path
                                        ? "text-foreground"
                                        : "text-muted-foreground fill-muted-foreground transition-colors hover:fill-foreground hover:text-foreground"
                                )}>
                                    {item.icon}
                                    <span className="text-[18px] font-medium">{item.name}</span>

                                    <AnimatePresence>
                                        {location.pathname === item.path && (
                                            <motion.div
                                                layoutId="active-pill"
                                                className="absolute inset-0 bg-[#EFF1F3] rounded-lg -z-10"
                                                style={{ borderRadius: 8 }}
                                                transition={{
                                                    type: "spring",
                                                    duration: 0.4,
                                                    bounce: 0,
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <DropdownMenu className="z-10 absolutes">
                        <DropdownMenuTrigger>A Clever</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Item 1</DropdownMenuItem>
                            <DropdownMenuItem>Item 2</DropdownMenuItem>
                            <DropdownMenuItem>Item 3</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className='flex items-center gap-8'>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Intagram} /></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Facebook} /></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Tiktok} /></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Youtube} /></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={Linkedin} /></a>
                    <a target='blank' href='https://www.instagram.com/clevercobranca'><img src={WhatsApp} /></a>
                </div>
            </nav>
        </header>
    );
}