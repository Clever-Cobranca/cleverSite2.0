import SejaClever from "../assets/SejaUmClever.png";
import LogoCleverTrabalhe from "../assets/Logo_Clever_Trabalhe.png";
import { Header } from "../components/Header/Header";

export default function TrabalheConosco() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="w-full p-5">
          <div className="relative">
            <img src={SejaClever} alt="Trabalhe Conosco - Seja um Clever" />

            <span className="absolute inset-0 mx-auto flex justify-center">
              <img
                src={LogoCleverTrabalhe}
                alt="Logo Clever Assessoria Escrita"
                className="max-w-[250px] max-h-[250px]"
              />
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
