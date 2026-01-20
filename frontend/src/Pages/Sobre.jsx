import Banner from "../assets/svgs/Banner.svg"
import LauraeCompanhia from "../assets/LauraeCompanhia.png"
import LauraTocandoSino from "../assets/LauraTocandoSino.png"
import LinhadoTempo from "../assets/svgs/linhadoTempo.svg"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import ButtonWhats from "../components/ButtonWhats"
import ScrollReveal from "../components/scrollView"

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        <ScrollReveal variant="fadeDown">
          <div className="flex flex-col items-center justify-between max-xl:justify-center w-full mt-5 flex-wrap">
            <h1 className="text-[clamp(2.2rem,6vw,6.2rem)] max-sm:px-3 leading-tight font-family-roboto-slab font-bold py-2">
              Nosso Historía
            </h1>
              <div className="flex justify-center text-center">

                <p className="text-[clamp(0.8rem,4vw,1.3rem)] w-11/12 max-h-[320px] text-wrap max-sm:tracking-tighter max-sm:text-justify max-md:max-w-[340px] text-center max-md:wrap-break-word">
                A Clever surgiu em 2019 quando Alan Clever identificou que as assessorias do mercado não entregavam resultados reais na recuperação de crédito. Criou então uma empresa transparente, voltada ao credor e focada em resultado.
                </p>
              </div>
              <img
                src={LauraeCompanhia}
                alt="Laurinha da Clever"
                className="max-w-[654px] max-h-[446px] object-contain max-md:h-80 max-sm:w-full"
              />
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
