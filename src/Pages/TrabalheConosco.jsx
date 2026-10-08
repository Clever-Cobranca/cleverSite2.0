import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CircleExpandButton } from "../components/button";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPortrait, MdLocationCity, MdOpacity } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import quemSomosFirst from "../assets/quem-somos-first.png";
import quemSomosSecond from "../assets/quem-somos-second.png";
import ScrollReveal from "../components/scrollView";
import ApplyingForm from "../components/ApplyingForm";

export default function TrabalheConosco() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <Header />
      <main>
        <ScrollReveal variant="fadeUp">
          <section className="pb-20 lg:mb-10 px-10">
            <div className="flex sm:pt-16 flex-col justify-center">
              <div className="flex w-full sm:px-7 max-sm:flex-col gap-4 wrap-break-word justify-center items-center">
                <div className="flex flex-col  gap-3">
                  <h1 className="text-[clamp(2.5rem,6vw,6.2rem)] font-family-headers">
                    Quem Somos?
                  </h1>
                  <p className="text-[clamp(0.8rem,4vw,1.4rem)] tracking-wide  pb-2 max-w-[620px] h-full">
                    Somos a Clever Assessoria Jurídica e Cobrança, uma empresa
                    especializada em recuperação de crédito que acredita que uma
                    boa cobrança também pode ser um caminho para reorganização e
                    solução. Atuamos de forma transparente, responsável e
                    orientada à construção de acordos viáveis, buscando
                    aproximar credores e devedores para encontrar alternativas
                    que permitam a regularização das pendências de forma segura
                    e respeitosa.
                  </p>
                  <img
                    className="max-w-[590px] w-full h-full"
                    src={quemSomosFirst}
                    alt="Equipe Clever"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-[clamp(2.5rem,6vw,6.2rem)] hover:cursor-default text-transparent">
                    ""
                  </h1>
                  <p className="text-[clamp(0.8rem,4vw,1.4rem)] tracking-tight pb-2 max-w-[620px] h-full">
                    Nosso trabalho vai além de cobrar. Buscamos entender cada
                    situação, facilitar o diálogo e criar oportunidades para que
                    quem possui uma dívida consiga regularizar sua vida
                    financeira, ao mesmo tempo em que ajudamos nossos clientes a
                    recuperar seus créditos com eficiência, segurança e
                    profissionalismo. A Clever nasceu para transformar a
                    cobrança em um processo mais claro, organizado e resolutivo,
                    gerando benefícios para ambas as partes e contribuindo para
                    relações financeiras mais saudáveis.
                  </p>
                  <img
                    className="max-w-[590px] w-full h-full"
                    src={quemSomosSecond}
                    alt="Usuário mexendo no celular"
                  />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fadeLeft">
          <section className="px-6 pb-8 flex max-sm:text-center justify-center max-lg:flex-wrap">
            <div className="flex-col flex gap-10 w-full items-center">
              <div className="flex max-sm:justify-center ">
                <div className="flex-col gap-2 flex max-sm:items-center max-sm:text-center">
                  <h2 className="font-family-headers text-[clamp(2.6rem,6vw,6.2rem)]/tight">
                    Vem fazer Parte da
                    <p className="text-[#F1B434]">Clever!</p>
                  </h2>
                  <div className="w-11/12 max-lgs:w-full border-t-3 rounded-2xl border-[#F1B434]" />
                  <p className="font-family-headers lg:text-3xl text-xl">
                    Conheça nossos cargos clicando em qualquer um abaixo:
                  </p>
                  {/* Cargos */}
                  <div className="relative flex w-full max-w-[720px] flex-col items-center">
                    <div className="relative z-10 w-4/5 sm:w-[50%]">
                      <CircleExpandButton
                        bgColor="bg-[#f1b434]"
                        hoverColor="bg-[#e0a92e]"
                        textColor="#000000"
                        text="Supervisor / Coordenador de operações"
                        hoverTextColor="#fff"
                        className="min-h-[108px] w-full !p-5"
                        onClick={() => setIsOpen("supervisor")}
                      />
                    </div>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[155px] text-[#d7d7d7]"
                    >
                      <div className="absolute left-[10%] top-[54px] h-0.5 w-[14%] bg-current sm:left-[18%]" />
                      <div className="absolute left-[24%] top-[54px] h-[94px] w-0.5 -translate-x-1/2 bg-current sm:left-[18%]" />
                      <div className="absolute left-[76%] top-[54px] h-0.5 w-[14%] bg-current sm:left-[68%]" />
                      <div className="absolute left-[76%] top-[54px] h-[94px] w-0.5 -translate-x-1/2 bg-current sm:left-[82%]" />
                      <div className="absolute left-[24%] top-[141px] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-current sm:left-[18%]" />
                      <div className="absolute left-[76%] top-[141px] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-current sm:left-[82%]" />
                    </div>

                    <div className="lg:mt-14 mt-6 flex w-full justify-between">
                      <div className="flex w-[48%] sm:w-[36%]">
                        <CircleExpandButton
                          bgColor="bg-white"
                          hoverColor="bg-[#e0a92e]"
                          textColor="#000000"
                          text="Operador de cobrança"
                          hoverTextColor="#fff"
                          className="h-full w-full !p-4"
                          onClick={() => setIsOpen("operadorCobranca")}
                        />
                      </div>
                      <div className="flex w-[48%] sm:w-[36%]">
                        <CircleExpandButton
                          bgColor="bg-white"
                          hoverColor="bg-[#e0a92e]"
                          textColor="#000000"
                          text="Operador de notificação"
                          hoverTextColor="#fff"
                          className="h-full w-full !p-4"
                          onClick={() => setIsOpen("oparadorNotificacao")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-[90%] max-lg:pt-6">
              <p className="font-semibold text-left max-lgs:px-10 text-[clamp(0.8rem,4vw,1.4rem)]">
                Estamos entre as melhores empresas para iniciar a carreira e 85%
                de nossas vagas administrativas e de liderança são preenchidas
                internamente! Então, se você sonha em fazer parte de um time que
                valoriza a carreira e seu desenvolvimento, conheça as novas
                vagas!
              </p>
              <ApplyingForm/>
            </div>
            <AnimatePresence initial={false}>
              {isOpen == "supervisor" && (
                <div className="flex justify-center items-center fixed inset-0 z-999 rounded-4xl">
                  <motion.div
                    className="absolute -z-10 inset-0 bg-black/30"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div
                    className="bg-[#fff] rounded-4xl p-5 max-sm:w-5/6 w-1/2 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain max-sm:p-4 [-webkit-overflow-scrolling:touch]">
                      <div className="w-full flex justify-end">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IoClose
                            className="hover:cursor-pointer"
                            size={30}
                            color="#f1b434"
                            onClick={() => setIsOpen(false)}
                          />
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-4xl max-lgs:md:text-xl font-bold text-center">
                          Supervisor/Coordenador
                          <br />
                          <span className="text-[#F1B434]">Clever</span> !
                        </h4>
                      </div>
                      <div className="flex max-sm:flex-col max-sm:gap-4 gap-16 border-t-2 border-[#D9D9D9] border-b-2 pt-10 pb-10">
                        <div className="flex flex-col gap-4 items-center flex-wrap">
                          <div className="flex gap-4 items-center">
                            <HiOutlineLocationMarker size={30} />
                            <p>Suzano-SP</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <MdLocationCity size={30} />
                            <p>Presencial</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center flex-wrap">
                          <div className="flex gap-4 items-center">
                            <IoBriefcaseOutline size={30} />
                            <p>Salário competitivo: fixo + variável</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-3">
                        <div>
                          <h4 className="text-2xl font-semibold">Requisitos</h4>
                          <ul>
                            <li>
                              -Ensino superior completo em Administração ou
                              áreas correlatas
                            </li>
                            <li>
                              -Experiência comprovada como Supervisor de
                              Cobrança
                            </li>
                            <li>-Liderança de equipes</li>
                            <li>
                              -Domínio de metas, KPIs e análise de performance
                            </li>
                            <li>-Comunicação assertiva e foco em resultados</li>
                            <li>
                              -Exemplo de postura (forma de comunicar-se, de
                              lidar e conduta com o time)
                            </li>
                            <li>-Disciplina e comprometimento</li>
                            <li>-Atuar com dinamismo</li>
                            <li>
                              -Foco em resultado, Agir com verdade, ética e
                              transparência
                            </li>
                            <li>-Controle emocional</li>
                            <li>-Alinhamento com a cultura Clever</li>
                            <li>-Proatividade</li>
                            <li>-Senso de urgência</li>
                            <li>-Lidar com pressão</li>
                            <li>-Visão analítica</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-2xl font-semibold">Beneficios</h4>
                          <ol className="ml-4">
                            <li className="list-disc">
                              Ambiente estruturado e profissional
                            </li>
                            <li className="list-disc">
                              Programas de desenvolvimento contínuo
                            </li>
                            <li className="list-disc">
                              Cultura de crescimento e meritocracia
                            </li>
                            <li className="list-disc">Vale Transporte</li>
                            <li className="list-disc">Vale Refeição</li>
                            <li className="list-disc">
                              Campanhas de reconhecimento com bônus mensais
                              (podendo adicionar até 5% sobre a variavel além de
                              prêmios)
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {isOpen == "operadorCobranca" && (
                <div className="flex justify-center items-center fixed inset-0 z-999 rounded-4xl">
                  <motion.div
                    className="absolute -z-10 inset-0 bg-black/30"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div
                    className="bg-[#fff] rounded-4xl p-5 w-1/2 max-sm:w-5/6 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain max-sm:p-4 [-webkit-overflow-scrolling:touch]">
                      <div className="w-full flex justify-end">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IoClose
                            className="hover:cursor-pointer"
                            size={30}
                            color="#f1b434"
                            onClick={() => setIsOpen(false)}
                          />
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-6xl font-bold text-center max-sm:text-3xl">
                          Operador
                          <br />
                          <span className="text-[#F1B434]">Clever</span> !
                        </h4>
                      </div>
                      <div className="flex max-sm:flex-col max-sm:gap-4 gap-16 border-t-2 border-[#D9D9D9] border-b-2 pt-10 pb-10">
                        <div className="flex flex-col gap-4 items-center flex-wrap">
                          <div className="flex gap-4 items-center">
                            <HiOutlineLocationMarker size={30} />
                            <p>Suzano-SP</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <MdLocationCity size={30} />
                            <p>Presencial</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center flex-wrap">
                          <div className="flex gap-4 items-center">
                            <MdPortrait size={30} />
                            <p>CLT</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <IoBriefcaseOutline size={30} />
                            <p>Salário competitivo: fixo + variável</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-3">
                        <div>
                          <h4 className="text-2xl font-semibold">
                            Descrição da vaga
                          </h4>
                          <p>Segunda a Sexta | 36h semanais</p>
                        </div>

                        <div>
                          <h4 className="max-sm:tex text-2xl font-semibold">
                            Requisitos
                          </h4>
                          <ul>
                            <li>-Experiência em cobrança</li>
                            <li>-Ter +18 anos</li>
                            <li>-Ensino médio completo</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-2xl font-semibold">Beneficios</h4>
                          <ol className="ml-4">
                            <li className="list-disc">Vale Transporte</li>
                            <li className="list-disc">Vale Refeição</li>
                            <li className="list-disc">Prêmios Especiais</li>
                            <li className="list-disc">
                              Campanhas de reconhecimento com bônus
                              mensais(podendo adicionar até 5% sobre a variavel
                              além de prêmios)
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {isOpen == "oparadorNotificacao" && (
                <div className="flex justify-center items-center fixed inset-0 z-999 rounded-4xl">
                  <motion.div
                    className="absolute -z-10 inset-0 bg-black/30"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div
                    className="bg-[#fff] rounded-4xl p-5 w-1/2 relative max-sm:w-5/6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="max-sm:max-h-[calc(100dvh-8rem)] max-sm:overflow-y-auto overscroll-contain max-sm:p-4 [-webkit-overflow-scrolling:touch">
                      <div className="w-full flex justify-end">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IoClose
                            className="hover:cursor-pointer"
                            size={30}
                            color="#f1b434"
                            onClick={() => setIsOpen(false)}
                          />
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-5xl font-bold text-center max-sm:text-3xl">
                          Estágio
                          <br />
                          <span className="text-[#F1B434]">Clever</span> !
                        </h4>
                      </div>
                      <div className="flex max-sm:flex-col max-sm:gap-4 gap-16 border-t-2 border-[#D9D9D9] border-b-2 pt-5 pb-5">
                        <div className="flex flex-col gap-4 items-center flex-wrap">
                          <div className="flex gap-4 items-center">
                            <HiOutlineLocationMarker size={30} />
                            <p>Suzano-SP</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <MdLocationCity size={30} />
                            <p>Presencial</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center flex-wrap">
                          <div className="flex gap-4 items-center">
                            <MdPortrait size={30} />
                            <p>Estágio</p>
                          </div>

                          <div className="flex gap-4 items-center">
                            <IoBriefcaseOutline size={30} />
                            <p>Bolsa Auxílio</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-3">
                        <div>
                          <h4 className=" font-semibold">Descrição da vaga</h4>
                          <p>
                            Segunda a Sexta | 9h as 15:20h (20min de almoço)
                          </p>
                          <p>
                            Segunda a Sabado | 13:30h as 18:50h (20min de
                            almoço)
                          </p>
                        </div>

                        <div>
                          <h4 className=" font-semibold">Requisitos</h4>
                          <ul>
                            <li>-Interesse em atuar com teleatendimento</li>
                            <li>-Boa comunicação</li>
                            <li>
                              -Vontade de aprender e crescer profissionalmente
                            </li>
                            <li>-Proatividade e comprometimento</li>
                            <li>
                              -Estar estudando (nível médio, técnico ou
                              superior)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className=" font-semibold">Beneficios</h4>
                          <ol className="ml-4">
                            <li className="list-disc">
                              {" "}
                              Equipe acolhedora e profissional
                            </li>
                            <li className="list-disc">
                              {" "}
                              Treinamentos e capacitação contínua
                            </li>
                            <li className="list-disc">
                              {" "}
                              Possibilidade real de efetivação
                            </li>
                            <li className="list-disc">
                              {" "}
                              Reconhecimento por desempenho
                            </li>
                            <li className="list-disc">
                              {" "}
                              Empresa referência nacional em recuperação de
                              crédito
                            </li>
                            <li className="list-disc"> Vale transporte</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
            
          </section>
        </ScrollReveal>
      </main>

      <Footer isBgGray={true} />
    </>
  );
}
