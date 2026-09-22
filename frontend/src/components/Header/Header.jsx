import { useState } from "react";
import Logo from "../../../public/Logo.png";
import InstagramLiquidGlass from "../../assets/icons/Instagram.png";
import FacebookLiquidGlass from "../../assets/icons/Facebook.png";
import TiktokLiquidGlass from "../../assets/icons/Tiktok.png";
import YoutubeLiquidGlass from "../../assets/icons/Youtube.png";
import LinkedinLiquidGlass from "../../assets/icons/Linkedin.png";
import WhatsappLiquidGlass from "../../assets/icons/Whatsapp.png";
import "../../global.css";
import { HeaderModal } from "./HeaderModal";
import { NavHeaderComponent } from "./NavHeaderComponent";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router";

export function Header({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="pt-4 z-700 font-family-headers flex items-center-safe justify-between max-sm:justify-between pl-16 pr-15 w-full h-24 max-lg:shadow-none max-lg:border-b max-lg:border-t max-lg:border-black/20 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] sticky top-0 bg-black-primary">
        <div className="max-[1056px]:hidden flex items-center gap-10">
          <Link to="/">
            <img src={Logo} alt="Icon Clever" className="w-16 h-auto" />
          </Link>
          <NavHeaderComponent />
        </div>
        <img src={Logo} className="lgs:hidden" alt="Icon Clever" />
        <IoMenuOutline
          aria-label="Abrir Modal"
          size={32}
          className="hover:cursor-pointer lgs:hidden text-orange-primary"
          onClick={() => setIsModalOpen(true)}
        />

        <div className="flex items-center gap-5 max-[1056px]:hidden">
          <a target="blank" href="https://www.instagram.com/clevercobranca">
            <img
              src={InstagramLiquidGlass}
              alt="Instagram"
              className="w-5 h-5"
            />
          </a>
          <a
            target="blank"
            href="https://web.facebook.com/clevercobranca?_rdc=1&_rdr#"
          >
            <img src={FacebookLiquidGlass} alt="Facebook" />
          </a>
          <a
            target="blank"
            href="https://www.tiktok.com/@cleverassessoria1?is_from_webapp=1&sender_device=pc"
          >
            <img src={TiktokLiquidGlass} alt="TikTok" />{" "}
          </a>
          <a target="blank" href="https://www.youtube.com/@clevercobranca">
            <img src={YoutubeLiquidGlass} alt="YouTube" />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/company/clevercobranca/?viewAsMember=true"
          >
            <img src={LinkedinLiquidGlass} alt="Linkedin" />
          </a>
          <a
            target="blank"
            href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+quero+saber+mais!&type=phone_number&app_absent=0"
          >
            <img src={WhatsappLiquidGlass} alt="Whatsapp" />
          </a>
        </div>
      </header>
      {children}

      <HeaderModal isModalOpen={isModalOpen} setIsModalOpen={handleModal} />
    </>
  );
}
