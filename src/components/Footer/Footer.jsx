import CleverLogo from "../../assets/Clever_Logo_Escrita.png";
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

export function Footer({ isBgGray }) {
  return (
    <footer
      className={`sm:min-h-[352px] sm:p-7 p-3 flex justify-around max-md:flex-col max-md:gap-8  max-md:flex-wrap ${
        isBgGray ? "bg-gray-primary" : "bg-white"
      }`}
    >
      <div className="flex flex-col justify-between max-md:items-center max-lgs:w-1/3 max-sm:items-stretch">
        <img
          alt="Clever_Logo_Escrita"
          src={CleverLogo}
          className="md:max-w-[340px] w-52 max-h-[143px]"
        />
        <p className="text-base max-md:hidden max-lgs:text-sm">
          Copyright © 2025 - Clever Assessoria e Cobrança - CNPJ
          33.331.482/0001-11
        </p>
      </div>
      <nav>
        <ul className="flex flex-col md:gap-6 gap-1 text-base font-light">
          <li>
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li>
            <Link to="/cultura">Nossa Cultura</Link>
          </li>
          <li>
            <Link to="/servicos">Nossos Serviços</Link>
          </li>
          <li>
            <Link to="#!">Blog</Link>
          </li>
          <li>
            <Link to="/educacao">Educação</Link>
          </li>
          <li>
            <Link to="/pagar">Quero pagar</Link>
          </li>
          <li>
            <Link to="/trabalhe-conosco">Trabalhe Conosco</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col md:gap-32 gap-12">
        <div>
          <div className="flex items-center gap-1">
            <BsTelephone
              size={30}
              color="#FF6600"
              className="max-sm:w-[20px] max-sm:h-[20px]"
            />
            <p className="text-orange-primary font-medium text-base max-sm:text-xs">
              0800 000 4820
            </p>
          </div>
          <div className="flex items-center md:mt-6 mt-2 gap-1">
            <CiMail
              size={30}
              color="#FF6600"
              className="max-sm:w-[20px] max-sm:h-[20px]"
            />
            <p className="text-orange-primary font-medium max-sm:text-xs text-base">
              contato@clevercobranca.com.br
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base">Nos Acompanhe</p>
          <nav className="flex gap-4 items-center">
            <a toet="blank" href="https://www.instagram.com/clevercobranca">
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
          </nav>
        </div>
      </div>
      <p className="text-base max-md:block hidden mt-6">
        Copyright © 2025 - Clever Assessoria e Cobrança - CNPJ
        33.331.482/0001-11
      </p>
    </footer>
  );
}
