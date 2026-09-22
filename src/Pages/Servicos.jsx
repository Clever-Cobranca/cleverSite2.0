import { useEffect } from "react";
import recuperacaoServico from "../assets/recuperacao-servico.png";
import cobrancaPresencialServico from "../assets/cobranca-presencial-servico.png";
import cobrancaPreventivaServico from "../assets/cobranca-preventiva-servico.png";
import sacServico from "../assets/sac-servico.png";
import ButtonWhats from "../components/ButtonWhats";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import {
  FaBalanceScale,
  FaFileContract,
  FaShieldAlt,
  FaChartLine,
  FaHandHolding,
  FaClock,
} from "react-icons/fa";
import { motion as Motion } from "motion/react";
import ScrollReveal from "../components/scrollView";
import { useLocation } from "react-router";
import { DashboardImageWithText } from "../components/DashboardImageWithText";

export default function Servicos() {
  const location = useLocation();

  // ADICIONE ESTE useEffect
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);
  return (
    <>
      <Header />
      <main>
        <ScrollReveal variant="fadeRight" duration={0.4}>
          <section className="my-5 px-2">
            <DashboardImageWithText
              imgSrc={recuperacaoServico}
              position="right"
              title="Recuperação de Crédito"
              text="É a recuperação daqueles Títulos, Contratos, Mensalidades, Notas Promissórias, Cheques, Dívidas que estão em atraso e você já tentou negociar ou já fez restrições nos Órgãos de Proteção ao Crédito, tentou fazer de tudo e mesmo assim o devedor insiste em não querer pagar."
            />
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fadeLeft" duration={0.4}>
          <section className="my-5">
            <DashboardImageWithText
              imgSrc={cobrancaPresencialServico}
              position="left"
              title="Cobrança Presencial"
              text="Realizamos a cobrança no local que o devedor adquiriu o produto ou serviço. Enviamos um de nossos representantes em qualquer lugar do Brasil. Este irá realizar atendimentos presenciais com hora marcada, negociações e também formalização dos acordos. Apenas solicitamos uma sala reservada, impressora e acesso à internet."
            >
              <p className="mt-5 text-base font-semibold leading-relaxed md:text-sm xl:text-xl">
                Nosso trabalho consiste em localizar, notificar e levar o
                devedor até o dia do atendimento. Um de nossos representantes
                realiza o acordo e você recebe. Como resultado, nossa estratégia
                de cobrança presencial, entrega um retorno de 40% maior.
              </p>
            </DashboardImageWithText>
          </section>
        </ScrollReveal>
        <ScrollReveal variant="fadeRight" duration={0.5}>
          <section id="Preventiva" className="my-5">
            <DashboardImageWithText
              imgSrc={cobrancaPreventivaServico}
              position="right"
              title="Cobrança Preventiva"
              text="Consiste em lembretes de vencimento, envio de boletos e cobranças, incluindo renegociação de atrasos. Atuamos em plataforma Omni-Channel (call center, e-mail, SMS, WhatsApp, redes sociais e boleto impresso) para reduzir até 95% dos atrasos recorrentes."
            >
              <p className="mt-5 text-base font-semibold leading-relaxed md:text-sm xl:text-xl">
                A cobrança preventiva elimina custos de manter um setor interno,
                garante que o credor receba o que é devido e reduz vínculos
                empregatícios. A Clever estrutura toda a operação de lembretes e
                cobranças recorrentes.
              </p>
            </DashboardImageWithText>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section
            id="SAC"
            className="flex flex-col lg:flex-row min-h-[600px] -z-10"
          >
            <DashboardImageWithText
              position="left"
              imgSrc={sacServico}
              title="SAC"
              text="Nosso Serviço de Atendimento ao Cliente vai além do convencional. Utilizamos abordagem humanizada e respeitosa, transformando cada contato em uma oportunidade de solução.Entendemos que por trás de cada atendimento existe uma história, e nosso time está preparado para encontrar a melhor solução para ambas as partes."
            >
              <ScrollReveal variant="fadeLeft">
                <ul className="flex flex-col gap-2 font-family-headers mt-3">
                  <li className="p-2">
                    {/* Container do texto com fundo animado */}
                    <Motion.div
                      className="relative w-fit max-w-full cursor-pointer overflow-hidden rounded-sm"
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* Fundo animado que expande */}
                      <Motion.div
                        className="absolute inset-0 bg-[#F1B434] origin-left"
                        variants={{
                          initial: { width: "4px", x: 0 },
                          hover: {
                            width: "100%",
                            transition: { duration: 0.3, ease: "easeInOut" },
                          },
                        }}
                      />
                      <Motion.p
                        className="text-sm sm:text-[clamp(0.8rem,4vw,1.3rem)]   relative z-10 px-3"
                        variants={{
                          hover: {
                            transition: { duration: 0.3 },
                          },
                        }}
                      >
                        Equipe treinada em comunicação não-violenta
                      </Motion.p>
                    </Motion.div>
                  </li>

                  <li className="p-2">
                    {/* Container do texto com fundo animado */}
                    <Motion.div
                      className="relative w-fit max-w-full cursor-pointer overflow-hidden rounded-sm"
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* Fundo animado que expande */}
                      <Motion.div
                        className="absolute inset-0 bg-[#F1B434] origin-left"
                        variants={{
                          initial: { width: "4px", x: 0 },
                          hover: {
                            width: "100%",
                            transition: { duration: 0.3, ease: "easeInOut" },
                          },
                        }}
                      />
                      <Motion.p
                        className="text-sm sm:text-[clamp(0.8rem,4vw,1.3rem)]   relative z-10 px-3"
                        variants={{
                          hover: {
                            transition: { duration: 0.3 },
                          },
                        }}
                      >
                        Múltiplos canais de atendimento disponíveis
                      </Motion.p>
                    </Motion.div>
                  </li>

                  <li className="p-2">
                    {/* Container do texto com fundo animado */}
                    <Motion.div
                      className="relative w-fit max-w-full cursor-pointer overflow-hidden rounded-sm"
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* Fundo animado que expande */}
                      <Motion.div
                        className="absolute inset-0 bg-[#F1B434] origin-left"
                        variants={{
                          initial: { width: "4px", x: 0 },
                          hover: {
                            width: "100%",
                            transition: { duration: 0.3, ease: "easeInOut" },
                          },
                        }}
                      />
                      <Motion.p
                        className="text-sm sm:text-[clamp(0.8rem,4vw,1.3rem)]  relative z-10 px-3"
                        variants={{
                          hover: {
                            transition: { duration: 0.3 },
                          },
                        }}
                      >
                        Soluções personalizadas para cada perfil
                      </Motion.p>
                    </Motion.div>
                  </li>

                  <li className="p-2">
                    {/* Container do texto com fundo animado */}
                    <Motion.div
                      className="relative w-fit max-w-full cursor-pointer overflow-hidden rounded-sm"
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* Fundo animado que expande */}
                      <Motion.div
                        className="absolute inset-0 bg-[#F1B434] origin-left"
                        variants={{
                          initial: { width: "4px", x: 0 },
                          hover: {
                            width: "100%",
                            transition: { duration: 0.3, ease: "easeInOut" },
                          },
                        }}
                      />
                      <Motion.p
                        className="text-sm sm:text-[clamp(0.8rem,4vw,1.3rem)]   relative z-10 px-3"
                        variants={{
                          hover: {
                            transition: { duration: 0.3 },
                          },
                        }}
                      >
                        Atendimento ético, transparente e respeitoso
                      </Motion.p>
                    </Motion.div>
                  </li>
                </ul>
              </ScrollReveal>
            </DashboardImageWithText>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="Assessoria" className="py-12 px-8">
            <div className="max-w-7xl mx-auto">
              {/* Título */}
              <h2 className="text-[clamp(2.2rem,5vw,6rem)] text-center mb-6 font-family-headers text-[#F1B434]">
                Assessoria Jurídica
              </h2>

              {/* Parágrafo introdutório */}
              <p className="text-[clamp(0.8rem,4vw,1.3rem)] text-center text-gray-700 mb-12 max-w-4xl mx-auto">
                Contamos com equipe jurídica altamente qualificada que assegura
                conformidade legal em todas as etapas do processo.
              </p>

              {/* Grid de Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 - Conformidade Legal */}
                <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                  <FaBalanceScale className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="text-[#F1B434]  mb-3 font-family-headers text-[clamp(1rem,4vw,1.4rem)]">
                    Conformidade Legal
                  </h3>
                  <p className="text-gray-700  text-sm leading-6">
                    Todas as ações são realizadas em estrita conformidade com a
                    legislação vigente, garantindo segurança jurídica para sua
                    empresa.
                  </p>
                </div>

                {/* Card 2 - Análise de Contratos */}
                <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                  <FaFileContract className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="text-[#F1B434]  mb-3 font-family-headers text-[clamp(1rem,4vw,1.4rem)]">
                    Análise de Contratos
                  </h3>
                  <p className="text-gray-700  text-sm leading-6">
                    Revisão detalhada de contratos e documentos, identificando
                    as melhores estratégias para recuperação de crédito.
                  </p>
                </div>

                {/* Card 3 - Proteção Jurídica */}
                <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                  <FaShieldAlt className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="text-[#F1B434]  mb-3 font-family-headers text-[clamp(1rem,4vw,1.4rem)]">
                    Proteção Jurídica
                  </h3>
                  <p className="text-gray-700  text-sm leading-6">
                    Assessoria completa em processos judiciais e extrajudiciais,
                    protegendo os interesses da sua empresa.
                  </p>
                </div>

                {/* Card 4 - Estratégias Personalizadas */}
                <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                  <FaChartLine className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="text-[#F1B434]  mb-3 font-family-headers text-[clamp(1rem,4vw,1.4rem)]">
                    Estratégias Personalizadas
                  </h3>
                  <p className="text-gray-700  text-sm leading-6">
                    Desenvolvimento de estratégias jurídicas personalizadas para
                    maximizar a recuperação de crédito.
                  </p>
                </div>

                {/* Card 5 - Negociação Eficiente */}
                <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                  <FaHandHolding className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="text-[#F1B434]  mb-3 font-family-headers text-[clamp(1rem,4vw,1.4rem)]">
                    Negociação Eficiente
                  </h3>
                  <p className="text-gray-700  text-sm leading-6">
                    Mediação e negociação de acordos que beneficiam ambas as
                    partes, sempre dentro da legalidade.
                  </p>
                </div>

                {/* Card 6 - Agilidade Processual */}
                <div className="rounded-xl p-6 border border-[#F1B434]/30 shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#F1B434] hover:bg-white cursor-pointer">
                  <FaClock className="text-[#F1B434] text-4xl mb-4 transition-transform duration-300 hover:scale-110" />
                  <h3 className="text-[#F1B434]  mb-3 font-family-headers text-[clamp(1rem,4vw,1.4rem)]">
                    Agilidade Processual
                  </h3>
                  <p className="text-gray-700  text-sm leading-6">
                    Atuação rápida e eficiente em todos os processos, garantindo
                    celeridade na recuperação de crédito.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <ButtonWhats />
      <Footer />
    </>
  );
}
