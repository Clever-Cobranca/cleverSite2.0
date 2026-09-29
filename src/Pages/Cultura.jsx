import { Header } from "../components/Header/Header";
import DashImage from "../assets/nossaCulturaDash.png";
import { GoStar, GoGraph } from "react-icons/go";
import { AiOutlineTeam } from "react-icons/ai";
import { LuHandshake, LuFileCheck } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuHandHeart } from "react-icons/lu";
import { PiBank } from "react-icons/pi";
import { Footer } from "../components/Footer/Footer";
import ButtonWhats from "../components/ButtonWhats";
import ScrollReveal from "../components/scrollView";
import { DashboardImageWithText } from "../components/DashboardImageWithText";

export default function Cultura() {
  const valores = [
    {
      title: "Foco em Resultado",
      icone: (
        <GoStar className="xl:w-[72px] xl:h-[60px]" size={42} color="#F1B434" />
      ),
    },
    {
      title: "Respeito",
      icone: (
        <LuHandHeart
          className="xl:w-[72px] xl:h-[60px]"
          size={42}
          color="#F1B434"
        />
      ),
    },
    {
      title: "Trabalho em Equipe",
      icone: (
        <AiOutlineTeam
          className="xl:w-[72px] xl:h-[60px]"
          size={42}
          color="#F1B434"
        />
      ),
    },
    {
      title: "Ética e Transparência",
      icone: (
        <LuFileCheck
          className="xl:w-[72px] xl:h-[60px]"
          size={42}
          color="#F1B434"
        />
      ),
    },
    {
      title: "Desenvolvimento",
      icone: (
        <GoGraph
          className="xl:w-[72px] xl:h-[60px]"
          size={42}
          color="#F1B434"
        />
      ),
    },
    {
      title: "Legalidade",
      icone: (
        <PiBank className="xl:w-[72px] xl:h-[60px]" size={42} color="#F1B434" />
      ),
    },

    {
      title: "Compromisso",
      icone: (
        <LuHandshake
          className="xl:w-[72px] xl:h-[60px]"
          size={42}
          color="#F1B434"
        />
      ),
    },
    {
      title: "Responsabilidade Financeira",
      icone: (
        <BsCurrencyDollar
          className="xl:w-[72px] xl:h-[60px]"
          size={42}
          color="#F1B434"
        />
      ),
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center md:mt-16 mt-10 w-full md:pr-20 md:pl-20">
          <div className="flex gap-2 items-baseline">
            <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-family-headers">
              Nossa
            </h1>
            <italic className="text-[clamp(2.2rem,6vw,5.6rem)] italic font-family-garamond text-orange-primary">
              Cultura
            </italic>
          </div>
          <h2 className="text-[clamp(1.2rem,4vw,1.8rem)]/tight max-sm:px-6 text-center">
            A Nossa Cultura organizacional é um conjunto de valores, crenças e
            ações que definem como decidimos, como cobramos, como negociamos e
            como sustentamos resultados, todos os dias.
          </h2>
        </div>

        <ScrollReveal variant="fadeLeft">
          <section className="sm:px-10 px-1 my-5">
            <DashboardImageWithText
              imgSrc={DashImage}
              className="lg:h-[clamp(22rem,52vw,38rem)]"
              position="left"
              title="Nossa Missão"
              text="Defender os direitos dos credores com assertividade, eficiência e compromisso, garantindo a recuperação de crédito por meio de soluções práticas, firmes e alinhadas à legislação vigente, sempre priorizando resultados para os credores."
            />
          </section>
        </ScrollReveal>

        <section className="bg-black-primary rounded-3xl mx-1 sm:mx-10">
          <ScrollReveal
            className="flex justify-evenly lg:justify-around items-center max-lg:flex-col-reverse h-[530px]"
            variant="fadeRight"
          >
            <p className="lg:w-7/12 lg:h-[75%] xl:p-12 max-lg:mx-4 p-6 text-glass-highlight border border-glass-fade rounded-3xl  text-[clamp(1rem,4vw,2rem)] font-bold">
              Consolidar-se até 2030 como referência no mercado de recuperação
              de crédito, contando com 400 colaboradores, sendo referência em
              treinamento e educação na área de recuperação de crédito no
              Brasil, atuando em diversos nichos: varejo, bancos, além do
              educacional.
            </p>
            <h4 className="text-[clamp(2.2rem,10vw,9.2rem)] font-family-headers text-glass-highlight">
              Visão
            </h4>
          </ScrollReveal>
        </section>

        <ScrollReveal variant="fadeUp">
          <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Cabeçalho opcional da seção */}
              <div className="flex gap-2 justify-center items-baseline">
                <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-family-headers">
                  Nossos
                </h1>
                <italic className="text-[clamp(2.2rem,6vw,5.6rem)] italic font-family-garamond text-orange-primary">
                  Valores
                </italic>
              </div>

              {/* Grid dos Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {valores.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row max-lg:flex-wrap items-start gap-5"
                  >
                    <div className="flex flex-col pt-2">
                      <div className="flex lg:gap-12 gap-2 items-center ">
                        <div className="flex shrink mb-1">{item.icone}</div>
                        <h3 className="text-[clamp(1rem,4vw,1.9rem)] font-family-headers tracking-wide">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <ButtonWhats />
      <Footer isBgGray />
    </>
  );
}
