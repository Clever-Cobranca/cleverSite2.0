import { useState } from "react";
import Logo from "../../assets/Logo.png";
import "../../global.css";
import { HeaderModal } from "./HeaderModal";
import { NavHeaderComponent } from "./NavHeaderComponent";
import { IoMenuOutline } from "react-icons/io5";

import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

export function Header({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="pt-4 z-40 flex items-center-safe justify-between max-sm:justify-between pl-16 pr-16 w-full border border-black/20 fixed bg-white">
        <div className="max-[1056px]:hidden flex items-center gap-10">
          <img src={Logo} alt="Icon Clever" />
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
      {children}

      <HeaderModal isModalOpen={isModalOpen} setIsModalOpen={handleModal} />
    </>
  );
}
