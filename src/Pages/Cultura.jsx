import LauraeEstagiario from "../assets/LauraeEstagiario.png";
import { Header } from "../components/Header/Header";

import { HiOutlineDocumentCheck, HiPaperClip } from "react-icons/hi2";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { FaRegChartBar, FaRegStar } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { PiBank } from "react-icons/pi";

export default function Cultura() {
  return (
    <>
      <Header />
      <main className="mt-25">
        <div className="flex flex-col items-center w-full pr-20 pl-20">
          <h1 className="text-[clamp(2.2rem,6vw,5rem)]/tight max-sm:text-center font-family-roboto-slab font-bold">
            Nossa Cultura
          </h1>
          <h4 className="mt-5 text-3xl text-[clamp(1.5rem,4vw,2rem)] text-center font-light">
            A cultura organizacional é um conjunto de valores, crenças e
            ações que definem como a organização conduz o negócio.
          </h4>
        </div>

        <section className="flex items-center justify-center lg:gap-24 md:pr-20 md:pl-20 max-sm:px-3.5 mt-5 flex-wrap">
          <div className="flex flex-col gap-5 lg:pb-40 max-lg:w-full max-lg:items-center">
            <h2 className="text-[clamp(2.8rem,5vw,6rem)]/tight max-sm:text-center font-bold font-family-roboto-slab">
              Nossa <span className="text-[#F1B434]">Missão</span>
            </h2>
            <p className="text-[clamp(0.8rem,4vw,1.5rem)] max-sm:text-justify max-w-[520px]">
              Defender os direitos dos credores com assertividade, eficiência e
              compromisso, garantindo a recuperação de crédito por meio de
              soluções práticas, firmes e alinhadas à legislação vigente, sempre
              priorizando resultados para os credores.
            </p>
          </div>

          <img
            alt="Laurinha e Estagiário"
            src={LauraeEstagiario}
            className="md:max-w-[500px]"
          />
        </section>

        <section className="bg-[#F1B434] flex justify-between items-center max-md:gap-6 max-md:flex-col-reverse p-3 sm:p-32">
          <p className="lg:w-7/12 text-[#fff] text-[clamp(1rem,4vw,1.6rem)] font-bold">
            Consolidar-se até 2030 como referência no mercado de recuperação de
            crédito, contando com 400 colaboradores, sendo referência em
            treinamento e educação na área de recuperação de crédito no Brasil,
            atuando em diversos nichos: varejo, bancos, além do educacional.
          </p>
          <h4 className="font-bold text-[clamp(4rem,8vw,7rem)] text-[#fff]">
            Visão
          </h4>
        </section>

        <section>
          <h3 className="text-[clamp(4rem,8vw,7rem)]/tight font-bold font-family-roboto-slab text-center mt-5">
            Nosso <span className="text-[#F1B434]">Valores</span>
          </h3>

          <div className="max-sm:p-2.5 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-rows-3 md:grid-flow-col gap-5 mt-14 mb-15 justify-around">
            <div className="flex items-center w-full  gap-2 sm:gap-10">
              <FaRegStar size={30} color="#707372" />
              <p>Foco em resultado</p>
            </div>

            <div className="flex items-center w-full  gap-2 sm:gap-10">
              <HiOutlineDocumentCheck size={30} color="#707372" />
              <p>Ética e Transparencia</p>
            </div>

            <div className="flex items-center w-full  gap-2 sm:gap-10">
              <HiPaperClip size={30} color="#707372" />
              <p>Compromisso</p>
            </div>

            <div className="flex items-center w-full  gap-2 sm:gap-10">
              <LiaHandHoldingHeartSolid size={30} color="#707372" />
              <p>Respeito</p>
            </div>

            <div className="flex items-center w-full  gap-2 sm:gap-10">
              <FaRegChartBar size={30} color="#707372" />
              <p>Desenvolvimento Contínuo</p>
            </div>

            <div className="flex items-center w-full  gap-2 sm:gap-10">
              <BsCurrencyDollar size={30} color="#707372" />
              <p>Responsabilidade Financeira</p>
            </div>

            <div className="flex items-center w-full  gap-2 sm:gap-10">
              <FiUserPlus size={30} color="#707372" />
              <p>Trabalho em equipe</p>
            </div>

            <div className="flex items-center w-full  gap-2 sm:gap-10">
              <PiBank size={30} color="#707372" />
              <p>Legalidade</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
