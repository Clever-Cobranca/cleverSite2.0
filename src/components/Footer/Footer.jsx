import CleverLogo from "../../assets/Clever_Logo_Escrita.png";
import Telefone from "../../assets/svgs/Telefone.svg";
import Email from "../../assets/svgs/Email.svg";

export function Footer() {
  return (
    <footer className="min-h-[352px] p-7 flex justify-around">
      <div className="flex flex-col gap-40">
        <img
          alt="Clever_Logo_Escrita"
          src={CleverLogo}
          className="max-w-[340px] max-h-[143px]"
        />
        <p className="text-base">
          Copyright © 2025 - Clever Assessoria e Cobrança - CNPJ
          33.331.482/0001-11
        </p>
      </div>
      <nav>
        <ul className="flex flex-col gap-6 text-base font-light">
          <li>
            <a href="#!">Sobre nós</a>
          </li>
          <li>
            <a href="#!">Nossa Cultura</a>
          </li>
          <li>
            <a href="#!">Nossos Serviços</a>
          </li>
          <li>
            <a href="#!">Blog</a>
          </li>
          <li>
            <a href="#!">Educação</a>
          </li>
          <li>
            <a href="#!">Quero pagar</a>
          </li>
          <li>
            <a href="#!">Trabalhe Conosco</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-20">
        <div>
          <div className="flex items-center gap-1">
            <img
              src={Telefone}
              width={30}
              height={30}
              alt="Nosso_telefone_icon"
            />
            <p className="text-orange-primary font-medium text-base">
              0800 000 4820
            </p>
          </div>
          <div className="flex items-center mt-6 gap-1">
            <img src={Email} width={30} height={30} alt="Nosso_email_icon" />
            <p className="text-orange-primary font-medium text-base">
              contato@clevercobranca.com.br
            </p>
          </div>
        </div>
        <a href="#!" className="text-base text-orange-primary">
          Nos Acompanhe
        </a>
      </div>
    </footer>
  );
}
