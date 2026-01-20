import logoFooter from "../../assets/logoFooter.png";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer
      className={`sm:min-h-[252px] max-sm:items-center max-sm:text-center sm:p-7 p-3 flex justify-around max-md:flex-col max-md:gap-8  max-md:flex-wrap bg-[#292929]`}
    >
      <div className="flex flex-col justify-around max-md:items-center max-sm:pl-2.5 max-sm:items-baseline max-sm:w-full max-sm:mr-6 max-lgs:w-1/3 ">
        <img
          alt="Clever_Logo_Escrita"
          src={logoFooter}
          className="w-3/5 h-auto max-sm:w-[120px]"
        />
        <p className="text-base max-md:hidden text-white max-lgs:text-sm">
          Copyright © 2025 - Clever Assessoria e Cobrança - CNPJ
          33.331.482/0001-11
        </p>
      </div>
      <div className="w-1/6 flex flex-col items-center max-sm:items-baseline max-sm:text-left max-sm:w-full">
        <nav className="w-max">
          <ul className="flex flex-col md:gap-2 gap-1 text-base text-white font-light">
            <li className="hover:text-[#F1B434] hover:ml-3 transition-all duration-300 ease-out">
              <Link to="/sobre">Sobre nós</Link>
            </li>
            <li className="hover:text-[#F1B434] hover:ml-3 transition-all duration-300 ease-out">
              <Link to="/cultura">Nossa Cultura</Link>
            </li>
            <li className="hover:text-[#F1B434] hover:ml-3 transition-all duration-300 ease-out">
              <Link to="/servicos">Nossos Serviços</Link>
            </li>
            <li className="hover:text-[#F1B434] hover:ml-3 transition-all duration-300 ease-out">
              <Link to="#!">Blog</Link>
            </li>
            <li className="hover:text-[#F1B434] hover:ml-3 transition-all duration-300 ease-out">
              <Link to="/educacao">Educação</Link>
            </li>
            <li className="hover:text-[#F1B434] hover:ml-3 transition-all duration-300 ease-in-out">
              <Link to="/pagar">Quero pagar</Link>
            </li>
            <li className="hover:text-[#F1B434] hover:ml-3 transition-all duration-300 ease-in-out">
              <Link to="/trabalhe-conosco">Trabalhe Conosco</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-sm:w-full flex flex-col gap-2">
        <div className="max-sm:flex max-sm:flex-col">
          <div className="flex items-center gap-3 hover:cursor-pointer transition-all duration-300 ease-in-out">
            <BsTelephone
              size={30}
              color="#f1b434"
              className="max-sm:w-[20px] max-sm:h-[20px]"
            />
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Quero+negociar+minhas+dívidas!&type=phone_number&app_absent=0" className="text-orange-primary font-medium text-base max-sm:text-[14px]">
              0800 000 4820
            </a>
          </div>
          <div className="flex items-center md:mt-6 mt-2 pb-1 gap-3">
            <CiMail
              size={30}
              color="#f1b434"
              className="max-sm:w-[20px] max-sm:h-[20px]"
            />
            <a href="mailto:contato@clevercobranca.com.br">
              <p className="text-orange-primary font-medium max-sm:text-[14px] text-base">
                contato@clevercobranca.com.br
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base max-sm:text-xs text-white border-t border-white w-6/12 max-sm:text-left pt-3">Aprenda conosco:</p>
          <nav className="flex gap-4 items-center">
            <a target="blank" href="https://www.instagram.com/clevercobranca">
              <FaInstagram color="white" size={20} />
            </a>
            <a
              target="blank"
              href="https://web.facebook.com/clevercobranca?_rdc=1&_rdr#"
            >
              <FaFacebookF color="white" size={20} />
            </a>
            <a
              target="blank"
              href="https://www.tiktok.com/@cleverassessoria1?is_from_webapp=1&sender_device=pc"
            >
              <FaTiktok color="white" size={20} />
            </a>
            <a
              target="blank"
              href="https://www.youtube.com/@cleverassessoriaecobranca7043"
            >
              <FaYoutube color="white" size={20} />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/company/clevercobranca/?viewAsMember=true"
            >
              <FaLinkedinIn color="white" size={20} />
            </a>
          </nav>
        </div>
      </div>
      <p className="text-base max-sm:text-xs max-sm:text-left text-white max-md:block hidden mt-6">
        Copyright © 2025 - Clever Assessoria e Cobrança - CNPJ
        33.331.482/0001-11
      </p>
    </footer>
  );
}
