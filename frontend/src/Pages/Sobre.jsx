import Banner from "../assets/svgs/Banner.svg"
import LauraeCompanhia from "../assets/LauraeCompanhia.png"
import LauraTocandoSino from "../assets/LauraTocandoSino.png"
import LinhadoTempo from "../assets/svgs/linhadoTempo.svg"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import ButtonWhats from "../components/ButtonWhats"

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center justify-between max-xl:justify-center w-full mt-5 flex-wrap">
          <h1 className="text-[clamp(2.2rem,6vw,6.2rem)] max-sm:px-3 leading-tight font-family-roboto-slab font-bold py-2">
            Nosso Manifesto
          </h1>
          <div className="flex justify-center text-center">

            <p className="text-[clamp(0.8rem,4vw,1.3rem)] w-11/12 max-h-[320px] text-wrap max-sm:tracking-tighter max-sm:text-justify max-md:max-w-[340px] text-left max-md:wrap-break-word">
              Negociaremos e você recebe! Sem dor de cabeça e sem arranhar a
              imagem do seu business ante o cliente! Todo o processo de Cobrança
              será acompanhado pelo nosso setor Jurídico, tanto na cobrança
              extrajudicial quanto nas cobranças judiciais que se fizerem
              necessárias.
            </p>
          </div>
          <img
            src={LauraeCompanhia}
            alt="Laurinha da Clever"
            className="max-w-[654px] max-h-[446px] object-contain max-md:h-80 max-sm:w-full"
          />
        </div>

        <section className="flex mt-10 bg-[#F2F2F2] justify-around  max-md:gap-2 w-full flex-wrap">
          <div className="w-max md:pt-12 max-md:p-3">
            <h2 className="text-[clamp(2.5rem,5vw,5.6rem)]  leading-tight font-family-roboto-slab font-bold py-2 ">
              Nossa História
            </h2>
            <p className="text-[clamp(0.8rem,4vw,1.3rem)] max-sm:text-justify max-sm:tracking-tighter max-h-[300px] max-w-[508px] max-md:max-w-[340px] max-sm:wrap-break-word">
              A Clever surgiu em 2019 quando Alan Clever identificou que as
              assessorias do mercado não entregavam resultados reais na
              recuperação de crédito. Criou então uma empresa transparente,
              voltada ao credor e focada em resultado.
            </p>
          </div>
          <img
            src={LauraTocandoSino}
            alt="Imagem dos funcionários Clever"
            className="max-w-[654px] max-h-[446px] object-contain max-md:h-80 max-sm:w-full"
          />
        </section>

        <section>
          <img
            alt="Linha do tempo clever"
            className="select-none object-fill w-full"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            src={LinhadoTempo}
          />
        </section>
      </main>
      <ButtonWhats />
      <Footer isBgGray={true} />
    </>
  );
}
