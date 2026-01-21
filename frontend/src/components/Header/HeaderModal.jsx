import clsx from "clsx";
import { NavHeaderComponent } from "./NavHeaderComponent";
import { IoCloseOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

export function HeaderModal({ isModalOpen, setIsModalOpen }) {
  return (
    <>
      <div
        className={clsx(
          "fixed z-50 inset-0 bg-black/50 transition-all ease-in-out duration-700",
          {
            "visible opacity-100": isModalOpen,
            "invisible opacity-0": !isModalOpen,
          }
        )}
        onClick={setIsModalOpen}
      />
      <div
        aria-modal={true}
        aria-label="Modal de Navegação"
        className="lgs:invisible flex bg-white justify-around fixed right-0 z-50 w-2/4 top-0 max-sm:w-full h-full transition-all ease-in-out duration-700"
        style={{
          transform: isModalOpen ? `translate(0px)` : `translate(100%)`,
        }}
      >
        <div className="flex flex-col justify-around">
          <NavHeaderComponent />
          <div className="flex items-center gap-5 ">
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
              href="https://www.youtube.com/@clevercobranca"
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
        </div>
        <button
          className="w-max h-max
            hover:cursor-pointer pt-3
        "
          onClick={setIsModalOpen}
          aria-label="close modal"
        >
          <IoCloseOutline size={28} />
        </button>
      </div>
    </>
  );
}
