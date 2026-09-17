import { Header } from "../components/Header/Header";
import HomepageFirst from "../assets/HomepageFirst.png";
import HomepageSecond from "../assets/HomepageSecond.png";
import HomepageThird from "../assets/HomepageThird.png";
import HomepageFourth from "../assets/HomepageFourth.png";
import Vector from "../assets/svgs/Vector.svg";
import ScrollReveal from "../components/scrollView";
import Pin from "../assets/svgs/Pin.svg";
import Signal_Alt from "../assets/svgs/Signal_Alt.svg";
import fotoDanilo from "../assets/danilo-prepara.png";
import fotoDaiane from "../assets/daiane-microlins.png";
import DollarSign from "../assets/svgs/Dollar_sign.svg";
import Calendar from "../assets/svgs/Calendar.svg";
import { Footer } from "../components/Footer/Footer";
import mic from "../assets/svgs/mic.svg";
import { FaBalanceScale } from "react-icons/fa";
import Carousel from "../components/Carousel";
import { ServiceCard } from "../components/Home/ServiceCard";
import { TestimonialCard } from "../components/Home/TestimonialCard";
import { DashboardImage } from "../components/Home/DashboardImage";
import LiquidGlassFilter from "../components/LiquidGlassFilter";

export default function Home() {
  const testimonials = [
    {
      photo: fotoDaiane ?? "",
      name: "Maria",
      role: "Franqueada Prepara Cursos",
      testimonial:
        "recuperamos mais de R$ 300.000 em contratos desde 2011, 2012, que a gente já não tinha mais contato.",
    },
    {
      photo: fotoDanilo,
      name: "Danilo",
      role: "Franqueado Prepara Cursos",
      testimonial:
        "clientes de dois, três, quatro, cinco anos nós tivemos ótimos resultados de recebimento.",
    },
    {
      photo: fotoDaiane ?? "",
      name: "Daiane",
      role: "Franqueada Microlins",
      testimonial:
        "Clever já tem anos junto conosco na área de cobrança, onde a gente está colhendo excelentes resultados.",
    },
    {
      photo: fotoDanilo ?? "",
      name: "Laerti",
      role: "Franqueado Microlins",
      testimonial:
        "Durante todo esse período a gente foi muito bem atendido e orientado, conseguimos receber de muitos clientes que estavam inadimplentes há +3 anos.",
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        {/* main mantém a altura fixa */}
        <div>
          <main className="h-full w-full">
            <section className="w-full">
              <div className="flex items-center h-full lgs:px-14 lgs:py-8">
                <div className="lgs:overflow-x-hidden">
                  <Carousel scrollMode="page" isScrollX={false}>
                    <DashboardImage
                      h1="SUA EMPRESA SOFRE COM"
                      imgSrc={HomepageFirst}
                      italicText="inadimplência"
                      subtitle="E VOCÊ NÃO SABE COMO RECUPERAR?"
                    >
                      <p className="max-w-[660px] text-[clamp(0.6rem,2vw,1.2rem)] text-shadow-xs text-shadow-black-primary text-white">
                        Há 7 anos a Clever é referência em recuperação de
                        crédito, transformando inadimplência em receita
                        recuperada para empresas em todo Brasil
                      </p>
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=5511986037555&text=Ol%C3%A1,+quero+agendar+uma+sessão+estratégica!&type=phone_number&app_absent=0"
                        className="lgs:p-7 md:p-4 px-2 py-1  bg-orange-primary rounded-full w-max text-white text-shadow-2xs lgs:text-3xl max-md:text-xs font-family-headers"
                      >
                        AGENDE UMA SESSÃO ESTRATÉGICA
                      </a>
                    </DashboardImage>
                    <DashboardImage
                      h1="RESOLVA SUA"
                      imgSrc={HomepageSecond}
                      italicText="Pendência"
                      subtitle="DE FORMA SIMPLES, RÁPIDA E SEGURA"
                    >
                      <p className="max-w-[660px] text-[clamp(0.6rem,2vw,1.2rem)] text-shadow-xs text-shadow-black-primary text-white">
                        Fale com um especialista e encontre a melhor forma de
                        resolver sua pendência com praticidade e segurança.
                      </p>
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+quero+negociar+minhas+dívidas!&type=phone_number&app_absent=0"
                        className="lgs:p-7 md:p-4 px-2 py-1  bg-orange-primary rounded-full w-max text-white text-shadow-2xs lgs:text-3xl max-md:text-xs font-family-headers"
                      >
                        REGULARIZAR AGORA
                      </a>
                    </DashboardImage>
                  </Carousel>
                </div>
              </div>
            </section>

            {/* Container Nossos Números */}

            <section className="lg:p-10 p-2 w-full">
              <ScrollReveal
                className="flex gap-12 flex-col items-center"
                variant="fadeRight"
                delay={0.2}
              >
                <h2 className="text-[clamp(2.2rem,5vw,5.8rem)] font-family-headers">
                  Nossos{" "}
                  <b className="text-[clamp(2.4rem,6vw,6rem)] font-family-garamond italic font-normal text-orange-primary">
                    Números
                  </b>
                </h2>

                <div className="flex w-full items-center max-md:flex-col justify-evenly rounded-4xl min-h-[480px] bg-black text-white max-md:gap-3 max-md:py-2 max-lgs:flex-wrap">
                  <div className="flex flex-col items-center rounded-2xl gap-4 justify-around  sm:h-52 max-w-[320px] md:text-3xl p-4">
                    <img
                      className="md:w-[70px] md:h-[70px] h-[50px] w-[50px]"
                      src={Vector}
                      alt="Ícone de unidades"
                    />
                    <p className="font-semibold">+350</p>
                    <p className="text-base font-semibold max-w-[194px] text-center">
                      EMPRESAS ATENDIDAS EM TODO O BRASIL
                    </p>
                  </div>
                  <div className="flex flex-col items-center rounded-2xl gap-4 justify-around  sm:h-52 max-w-[320px] md:text-3xl p-4">
                    <img
                      className="md:w-[70px] md:h-[70px] h-[50px] w-[50px]"
                      src={Signal_Alt}
                      alt="Ícone de gráfico de barras"
                    />
                    <p className="font-semibold">+120M</p>
                    <p className="text-base font-semibold max-w-[194px] text-center">
                      DE VALORES NEGOCIADOS
                    </p>
                  </div>
                  <div className="flex flex-col items-center rounded-2xl gap-4 justify-around  sm:h-52 max-w-[320px] md:text-3xl p-4">
                    <img
                      src={Pin}
                      alt="Ícone de sinal de crescimento"
                      className="md:w-[70px] md:h-[70px] h-[50px] w-[50px] ml-4"
                    />
                    <p className="font-semibold">+22</p>
                    <p className="text-base font-semibold max-w-[150px] text-center">
                      ESTADOS ATENDIDOS
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            <ScrollReveal>
              <section className="flex w-full flex-col items-center gap-10 bg-gray-primary px-5 py-10 sm:px-10">
                <h2 className="text-[clamp(2.2rem,5vw,5.8rem)] font-family-headers">
                  SERVIÇOS{" "}
                  <b className="text-[clamp(2.4rem,6vw,6rem)] font-family-garamond italic font-normal text-orange-primary">
                    Clever
                  </b>
                </h2>

                <div className="grid w-full auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2">
                  <ServiceCard
                    title="Recuperação de crédito"
                    description="Estratégias de cobrança e negociação para recuperar valores em atraso com método, acompanhamento e foco em resultado."
                    icon={<img src={DollarSign} alt="" />}
                    to="/servicos"
                  />

                  <ServiceCard
                    title="Cobrança preventiva"
                    description="Ações realizadas antes e nos primeiros dias de atraso para reduzir a inadimplência e aumentar as chances de recebimento."
                    icon={<img src={Calendar} alt="" />}
                    to="/servicos#Preventiva"
                  />

                  <ServiceCard
                    title="SAC"
                    description="Atendimento estruturado para orientar, registrar e resolver demandas com agilidade, clareza e profissionalismo."
                    icon={<img src={mic} alt="" />}
                    to="/servicos#SAC"
                  />

                  <ServiceCard
                    title="Assessoria jurídica"
                    description="Suporte jurídico especializado para orientar decisões, prevenir riscos e proteger os interesses da empresa com segurança e respaldo legal."
                    icon={<FaBalanceScale />}
                    to="/servicos#Assessoria"
                  />
                </div>
              </section>
            </ScrollReveal>
            {/* Container depoimentos */}
            <ScrollReveal>
              <section className="h-full">
                <div className="lgs:overflow-x-hidden">
                  <Carousel
                    scrollMode="item"
                    isDraggable={true}
                    isScrollX={false}
                  >
                    {" "}
                    {testimonials.map((t) => (
                      <TestimonialCard
                        key={t.name}
                        name={t.name}
                        photo={t.photo}
                        role={t.role}
                        testimonial={t.testimonial}
                      />
                    ))}
                  </Carousel>
                </div>
              </section>
            </ScrollReveal>

            {/* Sessão de perguntas frequentes */}
            <ScrollReveal>
              <section className="min-h-[600px] w-full sm:px-20 px-1 bg-gray-primary flex flex-wrap gap-20 justify-center py-14 items-baseline">
                <DashboardImage
                  h1="QUANTO DA SUA RECEITA AINDA ESTÁ"
                  imgSrc={HomepageThird}
                  italicText="Fora do Caixa"
                >
                  <p className="max-w-[660px] text-[clamp(0.6rem,2vw,1.2rem)] text-shadow-xs text-shadow-black-primary text-white">
                    Descubra onde está a perda e qual estratégia pode acelerar
                    sua recuperação.
                  </p>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=5511986037555&text=Ol%C3%A1,+quero+agendar+uma+sessão+estratégica!&type=phone_number&app_absent=0"
                    className="
                    backdrop-liquid-glass
                    md:p-4 px-2 py-1
                    rounded-full sm:w-[400px] w-max
                  text-white text-shadow-2xs text-center
                    lgs:text-3xl max-md:text-xs
                    font-family-headers
                    hover:cursor-pointer
                    "
                  >
                    AGENDA UMA SESSÃO ESTRATÉGICA
                  </a>
                </DashboardImage>
                <DashboardImage
                  h1="RECEBEU UMA"
                  imgSrc={HomepageFourth}
                  italicText="Notificação"
                  subtitle="DA CLEVER?"
                >
                  <p className="max-w-[660px] text-[clamp(0.6rem,2vw,1.2rem)] text-shadow-xs text-shadow-black-primary text-white">
                    Este é o momento de consultar sua pendência e buscar uma
                    solução pelos canais oficiais de atendimento
                  </p>
                  <LiquidGlassFilter />

                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Quero+negociar+minhas+dívidas!&type=phone_number&app_absent=0"
                    className="
                    backdrop-liquid-glass
                    md:p-4 px-2 py-1
                    rounded-full sm:w-[400px] w-max
                  text-white text-shadow-2xs text-center
                    lgs:text-3xl max-md:text-xs
                    font-family-headers
                    hover:cursor-pointer
                    "
                  >
                    ENTRE EM CONTATO CONOSCO
                  </a>
                </DashboardImage>
              </section>
            </ScrollReveal>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
