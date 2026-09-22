import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import ButtonWhats from "../components/ButtonWhats";
import ScrollReveal from "../components/scrollView";
import { LinhaDoTempoSVG } from "../components/Sobre/LinhaDoTempoSVG";

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        <ScrollReveal variant="fadeDown">
          <div className="flex flex-col items-center justify-between max-xl:justify-center w-full md:mt-16 mt-10 flex-wrap">
            <div className="flex justify-center items-baseline w-11/12 gap-3">
              <h1 className="text-[clamp(2.2rem,6vw,6rem)] font-family-headers">
                Sobre
              </h1>
              <italic className="italic font-family-garamond text-orange-primary text-[clamp(2.2rem,6.5vw,6.2rem)]">
                Nós
              </italic>
            </div>

            <div className="bg-black-primary text-[clamp(0.8rem,4vw,1.2rem)] max-sm:mx-1.5 sm:w-[60%] rounded-4xl lg:h-40 mb-12">
              <p className="text-white font-light text-center py-8 px-4">
                A Clever surgiu em 2019 quando Alan Clever identificou que as
                assessorias do mercado não entregavam resultados reais na
                recuperação de crédito. Criou então uma empresa transparente,
                voltada ao credor e focada em resultado.
              </p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fadeDown">
          <section className="flex items-center sm:px-10 justify-center">
            <LinhaDoTempoSVG />
          </section>
        </ScrollReveal>
      </main>
      <ButtonWhats />
      <Footer isBgGray={true} />
    </>
  );
}
