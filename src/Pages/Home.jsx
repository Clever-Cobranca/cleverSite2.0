import { Header } from "../components/Header/index";
import Homepage from "../assets/Homepage_Image.png";
import SejaClever from "../assets/Seja_Clever.png";
import DollarSign from "../assets/svgs/Dollar_sign.svg";
import Calendar from "../assets/svgs/Calendar.svg";
import Trophy from "../assets/svgs/Trophy.svg";
import Accordion from "../components/ComponentsHome/Accordion";

export default function Home() {
  return (
    <>
      <Header />
      {/* main mantém a altura fixa */}
      <main className="2xl:h-[1000px] h-[564px] max-lg:h-max w-full">
        {/* 1. SECTION: Deve usar h-full para ocupar 100% da altura do main. */}
        <section className="flex items-center h-full max-lg:flex-col">
          <div id="aside" className="flex flex-col gap-6 px-20">
            <p className="text-xl ">
              Há 7 anos desenvolvendo excelência em recuperação de crédito
              educacional
            </p>
            <p className="text-4xl font-light">
              A <span className="font-semibold">Clever</span> é referência em
              <span className="font-semibold">
                {" "}
                recuperação de crédito para redes de ensino franqueadas
              </span>
              , com atuação estratégica e alto índice de efetividade
            </p>
            <div className="mt-12 py-5 flex gap-7 items-center">
              <button className="h-[87px] w-64 font-bold text-xl rounded-4xl bg-orange-primary text-gray-primary shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#e0a92e] hover:cursor-pointer">
                Negocie suas Dívidas
              </button>
              <button className="h-[87px] w-60 font-bold text-xl rounded-4xl bg-[#ffffff] text-[#707372] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[rgb(247,246,246)]  hover:cursor-pointer">
                Fale Conosco
              </button>
            </div>
          </div>

          {/* 2. CONTAINER DA IMAGEM: Deve usar h-full para ocupar 100% da altura da section. */}
          <div className="flex h-full w-full max-lg:max-w-[500px]">
            <img
              className="w-full h-full object-fill"
              src={Homepage}
              alt="Clever Informações"
            />
          </div>
        </section>

        <section className="h-[540px] bg-gray-primary flex flex-col items-center pt-20 gap-10">
          {/* Container Serviços Clever */}
          <h1 className="font-family-roboto-slab font-bold text-8xl">
            Serviços Clever
          </h1>
          <div className="w-full flex justify-around">
            <div className="max-w-[482px]">
              <img src={DollarSign} alt="Ícone de cifrão" />
              <h2 className="fluid-h2 ml-3 mt-5 pt-4 border-t-[5px] border-orange-primary">
                Recuperação de Dívidas
              </h2>
            </div>
            <div className="max-w-[482px] ">
              <img src={Calendar} alt="Ícone de calendario" className="ml-3" />
              <h2 className="text-fluid-lg ml-3 mt-5 pt-4 border-t-[5px]  border-orange-primary">
                Cobrança Preventina
              </h2>
            </div>
            <div className="max-w-[482px]">
              <img src={Trophy} alt="Ícone de trofeu" />
              <h2 className=" text-[var(--font-title)] ml-3 mt-5 pt-4 border-t-[5px] border-orange-primary">
                Assessoria Jurídica
              </h2>
            </div>
          </div>
        </section>
        {/* Container vem ser Um Clever */}
        <section className="xl:h-[580px] h-[1080px] flex justify-around items-center flex-wrap">
          <div className="flex flex-col gap-11 items-start">
            <h1 className="text-8xl/tight  w-[500px] font-family-roboto-slab font-bold">
              Vem ser <p className="text-orange-primary">um Clever!</p>
            </h1>
            <p className="text-2xl font-normal h-[90px] max-w-[678px] ">
              Conheça as oportunidades de carreira na Clever e junte-se a nós em
              nossa missão de ser parte da solução para pessoas, empresas e
              comunidades.
            </p>
            <button className="text-[#707372] text-2xl font-bold h-16 w-3xs rounded-4xl shadow-[0px_4px_4px_rgba(0,0,0,0.75)] hover:cursor-pointer  hover:bg-[rgb(247,246,246)]">
              Saiba Mais
            </button>
          </div>
          <img
            alt="Seja um clever"
            src={SejaClever}
            className="max-w-[654px] max-h-[446px] "
          />
        </section>

        {/* Sessão de perguntas frequentes */}

        <section className="h-[600px] w-full px-20 bg-gray-primary flex flex-wrap pt-10 justify-around items-baseline">
          <h2 className="text-5xl/tight max-w-80 font-bold">
            Perguntas Frequentes
          </h2>
          <Accordion />
        </section>
      </main>
    </>
  );
}
