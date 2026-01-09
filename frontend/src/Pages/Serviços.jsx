import LauraRecuperacao from "../assets/LauraRecuperacao.png";
import lauraAtendendo from "../assets/lauraAtendendo.png";
import nossaHistoriaFull from "../assets/nossaHistoriaFullScreen.png";
import lauraFechandoContrato from "../assets/lauraFechandoContrato.png";
import Group12 from "../assets/Group12.png"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { 
  FaBalanceScale, 
  FaFileContract, 
  FaShieldAlt,
  FaChartLine,
  FaHandHolding,
  FaClock
} from "react-icons/fa";
import { motion } from "motion/react";

export default function Serviços() {

  return (
    <>
      <Header />
      <main>
        <section className="">
          <div className="flex items-center">
            <img
              className="max-md:hidden h-[80vh]"
              src={LauraRecuperacao}
              alt="Laura recuperação de dinheiro"
            />

            <div className="sm:w-1/2 max-md:p-8 flex flex-col gap-5 md:mb-30 mb-20">
              <h1 className="max-sm:text-center font-family-roboto-slab text-[clamp(2rem,4vw,5rem)]/tight font-bold">
                Recuperação de <span className="text-[#F1B434]">Crédito</span>
              </h1>
              <p className="text-[clamp(0.8rem,4vw,1.5rem)] text-left leading-7 w-5/6 font-light">
                É a recuperação daqueles Títulos, Contratos, Mensalidades, Notas Promissórias, Cheques, Dívidas que estão em atraso e você já tentou negociar ou já fez restrições nos Órgãos de Proteção ao Crédito, tentou fazer de tudo e mesmo assim o devedor insiste em não querer pagar.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f4f4] flex flex-col gap-7 sm:p-12 max-lgs:flex-col p-8 max-sm:items-center justify-between">
          <h2 className="max-sm:text-center text-start font-family-roboto-slab text-[clamp(2rem,4vw,5rem)]/tight font-bold">
            Negociação<span className="text-[#F1B434]">Presencial</span>
          </h2>
          <div className="flex gap-35 max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-col gap-7">
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                Realizamos a cobrança no local que o devedor adquiriu o produto ou
                serviço. Enviamos um de nossos representantes em qualquer lugar do
                Brasil. Este irá realizar atendimentos presenciais com hora
                marcada, negociações e também formalização dos acordos. Apenas
                solicitamos uma sala reservada, impressora e acesso à internet.
              </p>

              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                Nosso trabalho consiste em localizar, notificar e levar o devedor
                até o dia do atendimento. Um de nossos representantes realiza o
                acordo e você recebe. Como resultado, nossa estratégia de cobrança
                presencial, entrega um retorno de 40% maior que as soluções de
                negociações digitais ou apenas via call center. Dentro da
                recuperação de dívida a sua empresa pode optar entre 2 (duas)
                formas de pagamento de honorários.
              </p>
            </div>
            <img
              src={lauraFechandoContrato}
              alt="Nossa História - Clever"
              className=""
            />
          </div>
        </section>
        <section className=" flex flex-col gap-7 sm:p-12 max-lgs:flex-col p-8 max-sm:items-center justify-between">
          <h2 className="max-sm:text-center text-end font-family-roboto-slab text-[clamp(2rem,4vw,5rem)]/tight font-bold">
            Negociação<span className="text-[#F1B434]">Preventiva</span>
          </h2>
          <div className="flex gap-15 max-sm:flex-col max-sm:gap-4">
          <img
              src={lauraAtendendo}
              alt="Nossa História - Clever"
              className=""
            />
            <div className="flex flex-col gap-7">
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
              Nosso consiste em lembretes de vencimento, envio de boletos e cobranças, incluindo renegociação de atrasos. Atuamos em plataforma Omni-Channel (call center, e-mail, SMS, WhatsApp, redes sociais e boleto impresso) para reduzir até 95% dos atrasos recorrentes.
              </p>

              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
              A cobrança preventiva elimina custos de manter um setor interno, garante que o credor receba o que é devido e reduz vínculos empregatícios. A Clever estrutura toda a operação de lembretes e cobranças recorrentes.
              </p>
            </div>

          </div>
        </section>

        <section className="bg-[#EAEAEA] py-12 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Título */}
            <h2 className="text-[clamp(2.2rem,4vw,5.8rem)] font-bold text-center mb-6 font-family-roboto-slab text-[#F1B434]">
              Assessoria Jurídica
            </h2>
            
            {/* Parágrafo introdutório */}
            <p className="text-[clamp(0.9rem,2vw,1.2rem)] text-center text-gray-700 mb-12 max-w-4xl mx-auto">
              Contamos com equipe jurídica altamente qualificada que assegura conformidade legal em todas as etapas do processo.
            </p>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Conformidade Legal */}
              <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                <FaBalanceScale className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-[#F1B434] font-bold text-xl mb-3 font-family-roboto-slab">
                  Conformidade Legal
                </h3>
                <p className="text-gray-700 text-sm leading-6">
                  Todas as ações são realizadas em estrita conformidade com a legislação vigente, garantindo segurança jurídica para sua empresa.
                </p>
              </div>

              {/* Card 2 - Análise de Contratos */}
              <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                <FaFileContract className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-[#F1B434] font-bold text-xl mb-3 font-family-roboto-slab">
                  Análise de Contratos
                </h3>
                <p className="text-gray-700 text-sm leading-6">
                  Revisão detalhada de contratos e documentos, identificando as melhores estratégias para recuperação de crédito.
                </p>
              </div>

              {/* Card 3 - Proteção Jurídica */}
              <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                <FaShieldAlt className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-[#F1B434] font-bold text-xl mb-3 font-family-roboto-slab">
                  Proteção Jurídica
                </h3>
                <p className="text-gray-700 text-sm leading-6">
                  Assessoria completa em processos judiciais e extrajudiciais, protegendo os interesses da sua empresa.
                </p>
              </div>

              {/* Card 4 - Estratégias Personalizadas */}
              <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                <FaChartLine className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-[#F1B434] font-bold text-xl mb-3 font-family-roboto-slab">
                  Estratégias Personalizadas
                </h3>
                <p className="text-gray-700 text-sm leading-6">
                  Desenvolvimento de estratégias jurídicas personalizadas para maximizar a recuperação de crédito.
                </p>
              </div>

              {/* Card 5 - Negociação Eficiente */}
              <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                <FaHandHolding className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-[#F1B434] font-bold text-xl mb-3 font-family-roboto-slab">
                  Negociação Eficiente
                </h3>
                <p className="text-gray-700 text-sm leading-6">
                  Mediação e negociação de acordos que beneficiam ambas as partes, sempre dentro da legalidade.
                </p>
              </div>

              {/* Card 6 - Agilidade Processual */}
              <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                <FaClock className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                <h3 className="text-[#F1B434] font-bold text-xl mb-3 font-family-roboto-slab">
                  Agilidade Processual
                </h3>
                <p className="text-gray-700 text-sm leading-6">
                  Atuação rápida e eficiente em todos os processos, garantindo celeridade na recuperação de crédito.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row min-h-[600px] -z-10">
          <div className="flex-1 bg-white flex flex-col justify-center px-8 py-12 lg:px-16">
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold font-family-roboto-slab text-black mb-2">
              SAC
            </h2>
            {/* Linha amarela embaixo do título */}
            <div className="w-7/12 h-1 bg-[#F1B434] mb-5"></div>

            {/* Parágrafos */}
            <div className="flex flex-col gap-6 mb-8">
              <p className="text-[clamp(0.9rem,2vw,1.1rem)] text-gray-800 leading-7">
                Nosso Serviço de Atendimento ao Cliente vai além do convencional. Utilizamos abordagem humanizada e respeitosa, transformando cada contato em uma oportunidade de solução.
              </p>
              <p className="text-[clamp(0.9rem,2vw,1.1rem)] text-gray-800 leading-7">
                Entendemos que por trás de cada atendimento existe uma história, e nosso time está preparado para encontrar a melhor solução para ambas as partes.
              </p>
            </div>

            {/* Lista de características */}
            <ul className="flex flex-col gap-4">
              <motion.li 
                className="flex items-start gap-4 p-2 cursor-pointer"
                whileHover="hover"
                initial="initial"
              >
                {/* Container do texto com fundo animado */}
                <div className="relative inline-block rounded-sm overflow-hidden">
                  {/* Fundo animado que expande */}
                  <motion.div 
                    className="absolute inset-0 bg-[#F1B434] origin-left"
                    variants={{
                      initial: { width: "4px", x: 0 },
                      hover: { width: "100%", transition: { duration: 0.3, ease: "easeInOut" } }
                    }}
                  />
                  <motion.p 
                    className="text-[clamp(0.9rem,2vw,1.1rem)] text-gray-800 relative z-10 px-3 py-2"
                    variants={{
                      initial: { color: "#1f2937" },
                      hover: { color: "#ffffff", transition: { duration: 0.2 } }
                    }}
                  >
                    Equipe treinada em comunicação não-violenta
                  </motion.p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start gap-4 p-2 cursor-pointer"
                whileHover="hover"
                initial="initial"
              >
                {/* Container do texto com fundo animado */}
                <div className="relative inline-block rounded-sm overflow-hidden">
                  {/* Fundo animado que expande */}
                  <motion.div 
                    className="absolute inset-0 bg-[#F1B434] origin-left"
                    variants={{
                      initial: { width: "4px", x: 0 },
                      hover: { width: "100%", transition: { duration: 0.3, ease: "easeInOut" } }
                    }}
                  />
                  <motion.p 
                    className="text-[clamp(0.9rem,2vw,1.1rem)] text-gray-800 relative z-10 px-3 py-2"
                    variants={{
                      initial: { color: "#1f2937" },
                      hover: { color: "#ffffff", transition: { duration: 0.2 } }
                    }}
                  >
                    Múltiplos canais de atendimento disponíveis
                  </motion.p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start gap-4 p-2 cursor-pointer"
                whileHover="hover"
                initial="initial"
              >
                {/* Container do texto com fundo animado */}
                <div className="relative inline-block rounded-sm overflow-hidden">
                  {/* Fundo animado que expande */}
                  <motion.div 
                    className="absolute inset-0 bg-[#F1B434] origin-left"
                    variants={{
                      initial: { width: "4px", x: 0 },
                      hover: { width: "100%", transition: { duration: 0.3, ease: "easeInOut" } }
                    }}
                  />
                  <motion.p 
                    className="text-[clamp(0.9rem,2vw,1.1rem)] text-gray-800 relative z-10 px-3 py-2"
                    variants={{
                      initial: { color: "#1f2937" },
                      hover: { color: "#ffffff", transition: { duration: 0.2 } }
                    }}
                  >
                    Soluções personalizadas para cada perfil
                  </motion.p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start gap-4 p-2 cursor-pointer"
                whileHover="hover"
                initial="initial"
              >
                {/* Container do texto com fundo animado */}
                <div className="relative inline-block rounded-sm overflow-hidden">
                  {/* Fundo animado que expande */}
                  <motion.div 
                    className="absolute inset-0 bg-[#F1B434] origin-left"
                    variants={{
                      initial: { width: "4px", x: 0 },
                      hover: { width: "100%", transition: { duration: 0.4, ease: "easeInOut" } }
                    }}
                  />
                  <motion.p 
                    className="text-[clamp(0.9rem,2vw,1.1rem)] text-gray-800 relative z-10 px-3 py-2"
                    variants={{
                      initial: { color: "#1f2937" },
                      hover: { color: "#ffffff", transition: { duration: 0.2 } }
                    }}
                  >
                    Atendimento ético, transparente e respeitoso
                  </motion.p>
                </div>
              </motion.li>
            </ul>
          </div>
            <img
              src={Group12}
              alt="Laura Clever - SAC"
              className="-z-10 w-1/2"
            />
        </section>
      </main>
      <Footer />
    </>
  );
}
