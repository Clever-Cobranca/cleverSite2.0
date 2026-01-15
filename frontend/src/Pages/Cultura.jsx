import Logo3D from "../assets/Logo3D.png";
import { Header } from "../components/Header/Header";
import { HiOutlineDocumentCheck,  } from "react-icons/hi2";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { FaRegChartBar, FaRegStar, FaHandshake } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu"; 
import { BsCurrencyDollar } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { PiBank } from "react-icons/pi";
import { Footer } from '../components/Footer/Footer'
import ButtonWhats from "../components/ButtonWhats"

export default function Cultura() {
  return (
    <>
      <Header />
      <main className="">
        <div className="flex flex-col items-center w-full md:pr-20 md:pl-20">
          <h1 className="text-[clamp(2.2rem,6vw,5rem)]/tight max-sm:text-center font-family-roboto-slab font-bold">
            Nossa Cultura
          </h1>
          <h4 className="mt-5 text-3xl text-[clamp(1.5rem,4vw,2rem)] text-center font-light">
            A cultura organizacional é um conjunto de valores, crenças e
            ações que definem como a organização conduz o negócio.
          </h4>
        </div>

        <section className="flex items-center justify-evenly max-md:px-3.5 md:pl-20 max-lg:flex-wrap mt-5">
          <div className="flex flex-col gap-5 lg:pb-40 max-xl:w-full max-lg:items-center">
            <h2 className="text-[clamp(2.8rem,5vw,6rem)]/tight max-sm:text-center font-bold font-family-roboto-slab">
              Nossa <span className="text-[#F1B434]">Missão</span>
            </h2>
            <p className="text-[clamp(0.8rem,3vw,1.5rem)] max-w-[900px] text-wrap">
              Defender os direitos dos credores com assertividade, eficiência e
              compromisso, garantindo a recuperação de crédito por meio de
              soluções práticas, firmes e alinhadas à legislação vigente, sempre
              priorizando resultados para os credores.
            </p>
          </div>

          <img
            alt="Laurinha e Estagiário"
            src={Logo3D}
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

        <section className="">
          <h3 className="text-[clamp(4rem,8vw,7rem)]/tight font-bold font-family-roboto-slab text-center mt-5">
            Nosso <span className="text-[#F1B434]">Valores</span>
          </h3>

          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-none md:grid-rows-3 md:grid-flow-col gap-5 mt-14 mb-15 justify-around items-center">
              <div className="flex items-center w-full  gap-2 sm:gap-10 justify-center md:justify-start">
                <FaRegStar size={30} color="#F1B434" />
                <p className="max-sm:w-60">Foco em resultado</p>
              </div>

              <div className="flex items-center w-full gap-2 sm:gap-10 justify-center md:justify-start">
                <HiOutlineDocumentCheck size={30} color="#F1B434" />
                <p className="max-sm:w-60">Ética e Transparencia</p>
              </div>

              <div className="flex items-center w-full  gap-2 sm:gap-10 justify-center md:justify-start">
                <LuHandshake size={30} color="#F1B434" />
                <p className="max-sm:w-60">Compromisso</p>
              </div>

              <div className="flex items-center w-full  gap-2 sm:gap-10 justify-center md:justify-start">
                <LiaHandHoldingHeartSolid size={30} color="#F1B434" />
                <p className="max-sm:w-60">Respeito</p>
              </div>

              <div className="flex items-center w-full  gap-2 sm:gap-10 justify-center md:justify-start">
                <FaRegChartBar size={30} color="#F1B434" />
                <p className="max-sm:w-60">Desenvolvimento Contínuo</p>
              </div>

              <div className="flex items-center w-full  gap-2 sm:gap-10 justify-center md:justify-start">
                <BsCurrencyDollar size={30} color="#F1B434" />
                <p className="max-sm:w-60">Responsabilidade Financeira</p>
              </div>

              <div className="flex items-center w-full  gap-2 sm:gap-10 justify-center md:justify-start">
                <FiUserPlus size={30} color="#F1B434" />
                <p className="max-sm:w-60">Trabalho em equipe</p>
              </div>

              <div className="flex items-center w-full  gap-2 sm:gap-10 justify-center md:justify-start">
                <PiBank size={30} color="#F1B434" />
                <p className="max-sm:w-60">Legalidade</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ButtonWhats />
      <Footer isBgGray/>
    </>
  )
}
