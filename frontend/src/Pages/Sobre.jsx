import Banner from "../assets/svgs/Banner.svg";
import LauraeCompanhia from "../assets/LauraeCompanhia.png";
import LauraTocandoSino from "../assets/LauraTocandoSino.png";
import LinhadoTempo from "../assets/svgs/linhadoTempo.svg";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import ButtonWhats from "../components/ButtonWhats";
import ScrollReveal from "../components/scrollView";

export default function Sobre() {
  const inicioClever = [
    "A Clever nasceu de uma realidade dura e comum a milhares de empresas, vender, entregar o serviço e mesmo assim, conviver com a inadimplência corroendo o caixa, travando o crescimento e colocando empregos e planos em risco.",

    "Na prática, o que existia no mercado raramente resolvia. Muitas soluções eram genéricas, pouco transparentes e fracas na execução, prometiam “recuperar”, mas não sustentavam resultado, não organizavam o processo e não protegiam o direito do credor com firmeza.",

    "Foi dessa dificuldade e da necessidade de resultado que, em 2019, surgiu a Clever: para transformar cobrança em gestão, recuperar crédito com método e estratégia, e atuar com clareza, respeito e foco em resultado.",

    "Uma operação construída para tirar o credor do improviso e entregar recuperação real, sem concessões a desculpas e manobras que não mudam o essencial dívida existe e deve ser paga.",
  ];

  return (
    <>
      <Header />
      <main>
        <ScrollReveal variant="fadeDown">
          <div className="flex flex-col items-center justify-between max-xl:justify-center w-full mt-5 flex-wrap">
            <h1 className="text-[clamp(2.2rem,6vw,6.2rem)] max-sm:px-3 leading-tight font-family-roboto-slab font-bold py-2">
              Nossa História
            </h1>
            <div className="flex justify-center text-center w-11/12 flex-col gap-3">
              {inicioClever.splice(0, 2).map((text) => (
                <p className="text-[clamp(0.8rem,4vw,1.3rem)]  max-h-[320px] text-wrap max-sm:tracking-tighter max-sm:text-justify max-md:max-w-[340px] text-left max-md:wrap-break-word">
                  {text}
                </p>
              ))}
            </div>
            <img
              src={LauraeCompanhia}
              alt="Laurinha da Clever"
              className="max-w-[654px] max-h-[446px] object-contain max-md:h-80 max-sm:w-full"
            />
            <div className="flex justify-center py-6 text-center w-11/12 flex-col gap-3">
              {inicioClever.map((text) => (
                <p className="text-[clamp(0.8rem,4vw,1.3rem)]  max-h-[320px] text-wrap max-sm:tracking-tighter max-sm:text-justify max-md:max-w-[340px] text-left max-md:wrap-break-word">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeDown">
          <section>
            <img
              alt="Linha do tempo clever"
              className="select-none object-fill w-full"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              src={LinhadoTempo}
            />
          </section>
        </ScrollReveal>
      </main>
      <ButtonWhats />
      <Footer isBgGray={true} />
    </>
  );
}
