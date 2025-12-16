import { Header } from "../components/Header/Header";
import Homepage from "../assets/Homepage_Image.png";
import Vector from "../assets/svgs/Vector.svg";
import Fi_Mountains from "../assets/svgs/Fi_Mountains.svg";
import Fi_Microphone from "../assets/svgs/Fi_Microphone.svg";
import Chart_Histogram from "../assets/svgs/Chart_Histogram.svg";
import Signal_Alt from "../assets/svgs/Signal_Alt.svg";
import SejaClever from "../assets/Seja_Clever.png";
import DollarSign from "../assets/svgs/Dollar_sign.svg";
import Calendar from "../assets/svgs/Calendar.svg";
import Trophy from "../assets/svgs/Trophy.svg";
import Accordion from "../components/ComponentsHome/Accordion";
import { Footer } from "../components/Footer/Footer";
import mic from "../assets/svgs/mic.svg"

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        {/* main mantém a altura fixa */}
        <div className="2xl:pt-25 max-lg:pt-28">
          <main className="h-full">
            <section className="lg:h-screen flex items-center  max-lg:flex-col">
              <div id="aside" className="flex flex-col gap-6 md:px-20 px-10">
                <p className="text-xl pt-20 ">
                  Há 7 anos desenvolvendo excelência em recuperação de crédito
                  educacional
                </p>
                <p className="min-h-9 font-light text-[clamp(1.4rem,4vw,2rem)] leading-tight">
                  A <strong>Clever</strong> é referência em
                  <strong>
                    {" "}
                    recuperação de crédito para redes de ensino franqueadas
                  </strong>
                  , com atuação estratégica e alto índice de efetividade
                </p>
                <div className="md:mt-12 mt-2 py-5 flex gap-7 items-center ">
                  <button className="h-12 md:h-[87px] max-sm:p-1 w-52 max-md:max-w-36 font-bold text-[clamp(0.8rem,3vw,1.25rem)] rounded-4xl bg-orange-primary text-gray-primary shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#e0a92e] hover:cursor-pointer">
                    Negocie suas Dívidas
                  </button>
                  <button className="h-12 md:h-[87px] w-52 max-md:max-w-36 font-bold text-[clamp(0.8rem,3vw,1.25rem)] rounded-4xl bg-[#ffffff] text-[#707372] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[rgb(247,246,246)]  hover:cursor-pointer">
                    Fale Conosco
                  </button>
                </div>
              </div>

              {/* 2. CONTAINER DA IMAGEM: Deve usar h-full para ocupar 100% da altura da section. */}
              <div className="flex h-full w-full">
                <img
                  className="w-full h-full object-fill"
                  src={Homepage}
                  alt="Clever Informações"
                />
              </div>
            </section>

            {/* Container Nossos Números */}

            <section className="bg-orange-primary flex flex-col items-center py-10 gap-10">
              <h2 className="text-[clamp(1rem,9vw,3.0rem)]  font-family-roboto-slab font-bold">
                Nossos Números
              </h2>

              <div className="flex items-center max-md:flex-col gap-10 flex-wrap">
                <div className="flex flex-col items-center rounded-2xl justify-around bg-white sm:h-52 max-w-64 md:text-3xl p-4">
                  <img
                    className="sm:w-[50px] sm:h-[50px] h-[30px] w-[30px]"
                    src={Vector}
                    alt="Ícone de unidades"
                  />
                  <p className=" font-family-roboto-slab font-bold">149</p>
                  <p className="text-base max-w-[194px] text-center">
                    Unidades franqueadas atendidas em todo o Brasil
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-2xl justify-around bg-white sm:h-52 max-w-64 md:text-3xl p-4">
                  <img
                    src={Signal_Alt}
                    alt="Ícone de sinal de crescimento"
                    className="sm:w-[50px] sm:h-[50px] h-[30px] w-[30px]"
                  />
                  <p className=" font-family-roboto-slab font-bold">R$25,2 M</p>
                  <p className="text-base max-w-[194px] text-center">
                    Negociado por ano (média)
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-2xl justify-around bg-white sm:h-52 max-w-64 md:text-3xl p-4">
                  <img
                    className="sm:w-[50px] sm:h-[50px] h-[30px] w-[30px]"
                    src={Chart_Histogram}
                    alt="Ícone de gráfico de barras"
                  />
                  <p className=" font-family-roboto-slab font-bold">23.700</p>
                  <p className="text-base max-w-[194px] text-center">
                    Devedores recuperados por ano (média)
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-2xl justify-around bg-white sm:h-52 max-w-64 md:text-3xl p-4">
                  <img
                    className="sm:w-[50px] sm:h-[50px] h-[30px] w-[30px]"
                    src={Fi_Mountains}
                    alt="Ícone de montanhas"
                  />
                  <p className=" font-family-roboto-slab font-bold">23</p>
                  <p className="text-base max-w-[194px] text-center ">
                    Estados com clientes atendidos nos últimos 90 dias
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-2xl justify-around bg-white sm:h-52 max-w-64 md:text-3xl p-4">
                  <img
                    className="sm:w-[50px] sm:h-[50px] h-[30px] w-[30px]"
                    src={Fi_Microphone}
                    alt="Ícone de microfone"
                  />
                  <p className=" font-family-roboto-slab font-bold">R$0,00</p>
                  <p className="text-base max-w-[194px] text-center">
                    Custo com cobrança para nossos clientes
                  </p>
                </div>
              </div>
            </section>

            <section className="h-[540px] bg-gray-primary flex flex-col items-center pt-20 gap-10">
              {/* Container Serviços Clever */}
              <h1 className="font-family-roboto-slab font-bold text-[clamp(1.5rem,4vw,4.25rem)]">
                Serviços Clever
              </h1>
              <div className="w-full flex justify-around flex-wrap">
                <div className="max-w-[482px] max-sm:w-[210px] flex flex-col max-md:items-center">
                  <img
                    src={DollarSign}
                    alt="Ícone de cifrão"
                    className="max-sm:w-[30px] max-sm:h-[30px] w-[60px] h-[60px]"
                  />
                  <h2 className=" ml-3 mt-5 max-sm:w-[196px] pt-4 border-t-[5px] border-orange-primary">
                    Recuperação de Dívidas
                  </h2>
                </div>
                <div className="max-w-[482px] max-sm:w-[210px] flex flex-col max-md:items-center">
                  <img
                    src={Calendar}
                    alt="Ícone de calendario"
                    className="sm:ml-3 max-sm:w-[30px] max-sm:h-[30px] w-[60px] h-[60px]"
                  />
                  <h2 className="text-fluid-lg ml-3 mt-5 max-sm:w-[196px] pt-4 border-t-[5px]  border-orange-primary">
                    Cobrança Preventina
                  </h2>
                </div>
                <div className="max-w-[482px] max-sm:w-[210px] flex flex-col max-md:items-center">
                  <img
                    src={Trophy}
                    alt="Ícone de trofeu"
                    className="max-sm:w-[30px] max-sm:h-[30px] w-[60px] h-[60px]"
                  />
                  <h2 className=" text-[var(--font-title)] ml-3 mt-5 max-sm:w-[196px] pt-4 border-t-[5px] border-orange-primary">
                    Assessoria Jurídica
                  </h2>
                </div>
                <div className="max-w-[482px] max-sm:w-[210px] flex flex-col max-md:items-center">
                  <img
                    src={mic}
                    alt="Ícone de trofeu"
                    className="max-sm:w-[30px] max-sm:h-[30px] w-[60px] h-[60px]"
                  />
                  <h2 className=" text-[var(--font-title)] ml-3 mt-5 max-sm:w-[196px] pt-4 border-t-[5px] border-orange-primary">
                    Assessoria Jurídica
                  </h2>
                </div>
              </div>
            </section>
            {/* Container vem ser Um Clever */}
            <section className="lg:max-h-[580px]  flex justify-around max-md:justify-center items-center flex-wrap">
              <div className="flex flex-col md:gap-11 gap-7 items-start max-md:pl-2 max-md:items-center">
                <h1 className="text-[clamp(3rem,4vw,4.25rem)] leading-tight w-[500px] max-sm:w-max max-md:text-center font-family-roboto-slab font-bold">
                  Vem ser <p className="text-orange-primary">um Clever!</p>
                </h1>
                <p className="text-[clamp(0.8rem,4vw, 1.5rem)] h-[90px] max-w-[678px] max-md:w-[340px] max-sm:w-[260px] ">
                  Conheça as oportunidades de carreira na Clever e junte-se a
                  nós em nossa missão de ser parte da solução para pessoas,
                  empresas e comunidades.
                </p>
                <button className="my-4 text-[#707372] text-[clamp(0.6rem,3vw,1.2rem)] font-bold h-12 lg:w-2xs w-[170px] rounded-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.75)] hover:cursor-pointer  hover:bg-[rgb(247,246,246)]">
                  Saiba Mais
                </button>
              </div>
              <img
                alt="Seja um clever"
                src={SejaClever}
                className="max-w-[654px] max-h-[446px] object-contain max-md:h-80 max-sm:w-full"
              />
            </section>

            {/* Sessão de perguntas frequentes */}
            <section className="min-h-[600px] w-full sm:px-20 px-1 bg-gray-primary flex flex-wrap pt-14 pb-3 justify-around items-baseline">
              <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] leading-tight max-w-80 mb-2 font-bold">
                Perguntas Frequentes
              </h2>
              <Accordion />
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
