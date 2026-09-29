import clsx from "clsx";
import { NavHeaderComponent } from "./NavHeaderComponent";
import { IoCloseOutline } from "react-icons/io5";
import InstagramLiquidGlass from "../../assets/icons/Instagram.png";
import FacebookLiquidGlass from "../../assets/icons/Facebook.png";
import TiktokLiquidGlass from "../../assets/icons/Tiktok.png";
import YoutubeLiquidGlass from "../../assets/icons/Youtube.png";
import LinkedinLiquidGlass from "../../assets/icons/Linkedin.png";
import WhatsappLiquidGlass from "../../assets/icons/Whatsapp.png";

export function HeaderModal({ isModalOpen, setIsModalOpen }) {
  return (
    <>
      <div
        className={clsx(
          "fixed z-999 inset-0 bg-black/50 transition-all ease-in-out duration-700",
          {
            "visible opacity-100": isModalOpen,
            "invisible opacity-0": !isModalOpen,
          },
        )}
        onClick={setIsModalOpen}
      />
      <div
        aria-modal={true}
        aria-label="Modal de Navegação"
        className="lgs:invisible flex bg-black-primary justify-around fixed right-0 z-999 w-2/4 top-0 max-sm:w-full h-full transition-all ease-in-out duration-700"
        style={{
          transform: isModalOpen ? `translate(0px)` : `translate(100%)`,
        }}
      >
        <div className="flex flex-col justify-evenly">
          <NavHeaderComponent />
          <nav className="flex items-center gap-5 ">
            <a target="blank" href="https://www.instagram.com/clevercobranca">
              <img
                src={InstagramLiquidGlass}
                alt="Instagram"
                className="sm:w-6 sm:h-7"
              />
            </a>
            <a
              target="blank"
              href="https://web.facebook.com/clevercobranca?_rdc=1&_rdr#"
            >
              <img
                src={FacebookLiquidGlass}
                className="sm:w-5 sm:h-7"
                alt="Facebook"
              />
            </a>
            <a
              target="blank"
              href="https://www.tiktok.com/@cleverassessoria1?is_from_webapp=1&sender_device=pc"
            >
              <img
                src={TiktokLiquidGlass}
                className="sm:w-6 sm:h-7"
                alt="TikTok"
              />{" "}
            </a>
            <a target="blank" href="https://www.youtube.com/@clevercobranca">
              <img src={YoutubeLiquidGlass} className="sm:w-6 sm:h-6" alt="YouTube" />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/company/clevercobranca/?viewAsMember=true"
            >
              <img
                src={LinkedinLiquidGlass}
                className="sm:w-6 sm:h-7"
                alt="Linkedin"
              />
            </a>
            <a
              target="blank"
              href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+quero+saber+mais!&type=phone_number&app_absent=0"
            >
              <img
                src={WhatsappLiquidGlass}
                className="sm:w-6 sm:h-7"
                alt="Whatsapp"
              />
            </a>
          </nav>
        </div>
        <button
          className="w-max h-max
            hover:cursor-pointer pt-3
        "
          onClick={setIsModalOpen}
          aria-label="close modal"
        >
          <IoCloseOutline size={36} color="#f1b434" />
        </button>
      </div>
    </>
  );
}
