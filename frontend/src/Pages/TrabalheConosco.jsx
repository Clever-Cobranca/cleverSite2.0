import SejaClever from "../assets/SejaUmClever.png";
import LogoCleverTrabalhe from "../assets/Logo_Clever_Trabalhe.png";
import lauraTrabalheConosco from "../assets/lauraTrabalheConosco.png";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CircleExpandButton } from "../components/button";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPortrait, MdLocationCity, MdOpacity } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import InteractiveForm from "../components/InteractiveForm";
import LauraSeusAmigos from "../assets/LauraSeusAmigos.png";


export default function TrabalheConosco() {
  const [isOpen, setIsOpen] = useState(null)
  const [Aberto, estaAbrindo] = useState(false)


  return (
    <>
      <Header />
      <main>
        <div className="w-full p-5">
          <div className="relative">
            <img
              src={SejaClever}
              alt="Trabalhe Conosco - Seja um Clever"
              className="block w-full h-auto object-cover"
            />

            <div className="absolute inset-0 w-full h-[115%] flex justify-center items-end">
              <span className="h-full flex items-end justify-center">
                <img
                  src={LogoCleverTrabalhe}
                  alt="Logo Clever Assessoria Escrita"
                  className="lg:w-[75%] max-md:w-1/3 max-sm:w-2/12 w-1/3 object-contain"
                />
              </span>
            </div>
          </div>
        </div>
        <section className="px-6 pt-10 pb-20 lg:mb-10">
          <div className="lg:pl-12 flex flex-col">
            <h1 className="text-[clamp(2.5rem,6vw,6.2rem)] max-lgs:max-w-[645px]   max-sm:text-4xl max-sm:pl-0 md:max-lg:pl-12 lg:max-xl:pl-6 lg:max-xl:text-center leading-tight font-family-roboto-slab font-bold py-2">
              Quem Somos?
            </h1>
            <div className="flex justify-between max-lgs:justify-center items-start wrap-break-word flex-wrap gap-4">
              <div className="flex flex-col items-center gap-3">
                <p className="text-[clamp(0.8rem,4vw,1.3rem)] max-w-[645px]">
                  Somos a Clever Assessoria Jurídica e Cobrança, uma empresa
                  especializada em recuperação de crédito com atuação firme,
                  transparente e totalmente orientada ao credor. Nascemos para
                  preencher uma lacuna do mercado: entregar resultado real, sem
                  promessas vazias e sem favorecer manobras que afastem o devedor
                  de sua obrigação legal.
                </p>
                <img
                  className="max-w-[540px] w-full h-full"
                  src={LauraSeusAmigos}
                  alt="Equipe clever fantasiada"
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-[clamp(0.8rem,4vw,1.3rem)] max-w-[645px] max-lgs:hidden">
                  Trabalhamos em todo o ciclo da cobrança, da fase extrajudicial
                  às medidas mais severas quando necessárias, sempre com base
                  jurídica sólida, estratégia e foco absoluto em eficiência. Nosso
                  compromisso é simples: garantir que o credor receba o que lhe é
                  devido, preservando direitos, fortalecendo relações e elevando o
                  padrão de cobrança no Brasil.
                </p>

                <img
                  className="max-w-[540px] w-full h-full"
                  src={lauraTrabalheConosco}
                  alt="Trio 1 fantasiado"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pl-6 pb-10 pr-6 flex justify-between max-sm:text-center max-sm:justify-center max-lgs:flex-col">
          <div className="flex-col flex gap-10 w-4/5 max-sm:w-full max-sm:items-center">
            <div className="flex max-sm:justify-center">
              <div className="flex-col lg:pl-12 gap-5 flex max-sm:items-center max-sm:text-center">
                <h2 className="text-4xl font-family-roboto-slab font-bold text-[clamp(2.5rem,6vw,6.2rem)]">Vem fazer Parte da <br /> <span className="text-[#F1B434]">#CleverFamily</span></h2>
                <div className="w-11/12 max-lgs:w-full border-t-3 rounded-2xl border-[#F1B434]" />
                <p>Conheça nossos cargos clicando em qualquer um abaixo:</p>
                <div className="flex flex-col items-center flex-wrap">

                  <button onClick={() => setIsOpen('supervisor')}>
                    <CircleExpandButton
                      bgColor="bg-white"
                      hoverColor="bg-[#F1B434]"
                      textColor="#000"
                      text="Supervisor / Coordenador de operações"
                      hoverTextColor="#fff"
                      className="text-center p-4 rounded-4xl hover:cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    />
                  </button>
                  <div className="flex items-center w-full justify-center">
                    <div className="w-px h-6 bg-gray-300"></div>
                  </div>

                  <div className="flex items-center justify-center w-full">
                    <div className="max-sm:w-42 w-62 h-px bg-gray-300"></div>
                    <div className="w-0 h-px bg-gray-300"></div>
                  </div>

                  <div className="flex justify-center max-sm:gap-40 gap-60">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-8 bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 -mt-1"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-px h-8 bg-gray-300"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-300 -mt-1"></div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-10">
                    <button onClick={() => setIsOpen('operadorCobranca')}>
                      <CircleExpandButton
                        bgColor="bg-white"
                        hoverColor="bg-[#F1B434]"
                        textColor="#000"
                        text="Operação de cobrança"
                        hoverTextColor="#fff"
                        className="text-center p-4 rounded-4xl hover:cursor-pointer"
                      />
                    </button>
                    <button onClick={() => setIsOpen('oparadorNotificacao')}>
                      <CircleExpandButton
                        bgColor="bg-white"
                        hoverColor="bg-[#F1B434]"
                        textColor="#000"
                        text="Operador de notificação"
                        hoverTextColor="#fff"
                        className="text-center p-4 rounded-4xl hover:cursor-pointer"
                        onClick={() => setIsOpen(true)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/12 max-lgs:w-full max-lgs:pt-10 pt-6 flex flex-col gap-30 h-full">
            <p>Estamos entre as melhores empresas para iniciar a carreira e 85% de nossas vagas administrativas e de liderança são preenchidas internamente! Então, se você sonha em fazer parte de um time que valoriza a carreira e seu desenvolvimento, conheça as novas vagas!</p>
            <div className="h-5 max-lgs:text-center justify-center items-center flex mt-10 mb-10">
              <button onClick={() => estaAbrindo(true)} className="pl-10 pr-10 pt-3 pb-3 border-2 border-[#F1B434] rounded-4xl text-2xl text-[#F1B434] uppercase font-bold hover:bg-[#F1B434] hover:text-white transition-all duration-300 hover:cursor-pointer">Candidatar-se</button>
            </div>
          </div>
            <AnimatePresence initial={false}>
              {isOpen == 'supervisor' && (
                <div className="flex justify-center items-center fixed inset-0 z-50 rounded-4xl">
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
                      ease: "easeOut"
                    }}
                  >
                    <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain max-sm:p-4 [-webkit-overflow-scrolling:touch]">
                      <div className="w-full flex justify-end">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IoClose className="hover:cursor-pointer" size={30} color="#f1b434" onClick={() => setIsOpen(false)} />
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-4xl font-bold text-center max-[320px]:text-[15px] max-sm:text-[19px]">Supervisor/Coordenador<br /><span className="text-[#F1B434]">Clever</span> !</h4>
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
                            <li>-Ensino superior completo em Administração ou áreas correlatas</li>
                            <li>-Experiência comprovada como Supervisor de Cobrança</li>
                            <li>-Liderança de equipes</li>
                            <li>-Domínio de metas, KPIs e análise de performance</li>
                            <li>-Comunicação assertiva e foco em resultados</li>
                            <li>-Exemplo de postura (forma de comunicar-se, de lidar e conduta com o time)</li>
                            <li>-Disciplina e comprometimento</li>
                            <li>-Atuar com dinamismo</li>
                            <li>-Foco em resultado, Agir com verdade, ética e transparência</li>
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
                            <li className="list-disc">Ambiente estruturado e profissional</li>
                            <li className="list-disc">Programas de desenvolvimento contínuo</li>
                            <li className="list-disc">Cultura de crescimento e meritocracia</li>
                            <li className="list-disc">Vale Transporte</li>
                            <li className="list-disc">Vale Refeição</li>
                            <li className="list-disc">Campanhas de reconhecimento com bônus mensais (podendo adicionar até 5% sobre a variavel além de prêmios)</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {isOpen == 'operadorCobranca' && (
                <div className="flex justify-center items-center fixed inset-0 z-50 rounded-4xl">
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
                      ease: "easeOut"
                    }}
                  >
                    <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto overscroll-contain max-sm:p-4 [-webkit-overflow-scrolling:touch]">
                      <div className="w-full flex justify-end">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IoClose className="hover:cursor-pointer" size={30} color="#f1b434" onClick={() => setIsOpen(false)} />
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-6xl font-bold text-center max-sm:text-3xl">Operador<br /><span className="text-[#F1B434]">Clever</span> !</h4>
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
                          <h4 className="text-2xl font-semibold">Descrição da vaga</h4>
                          <p>Segunda a Sexta | 36h semanais</p>
                        </div>

                        <div>
                          <h4 className="max-sm:tex text-2xl font-semibold">Requisitos</h4>
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
                            <li className="list-disc">Campanhas de reconhecimento com bônus mensais(podendo adicionar até 5% sobre a variavel além de prêmios)</li>
                            <li className="list-disc">Exemplo de postura (forma de comunicar-se, de lidar e conduta com o time)</li>
                            <li className="list-disc">Disciplina e comprometimento</li>
                            <li className="list-disc">Comunicação clara</li>
                            <li className="list-disc">direta e assertiva</li>
                            <li className="list-disc">Atuar com dinamismo</li>
                            <li className="list-disc">Foco em resultado</li>
                            <li className="list-disc">Agir com verdade, ética e transparência</li>
                            <li className="list-disc">Controle emocional</li>
                            <li className="list-disc">Alinhamento com a cultura Clever</li>
                            <li className="list-disc">Proatividade</li>
                            <li className="list-disc">Senso de urgência</li>
                            <li className="list-disc">Lidar com pressão.</li>

                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {isOpen == 'oparadorNotificacao' && (
                <div className="flex justify-center items-center fixed inset-0 z-50 rounded-4xl">
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
                      ease: "easeOut"
                    }}
                  >
                    <div className="max-sm:max-h-[calc(100dvh-8rem)] max-sm:overflow-y-auto overscroll-contain max-sm:p-4 [-webkit-overflow-scrolling:touch">
                      <div className="w-full flex justify-end">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IoClose className="hover:cursor-pointer" size={30} color="#f1b434" onClick={() => setIsOpen(false)} />
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-5xl font-bold text-center max-sm:text-3xl">Estágio<br /><span className="text-[#F1B434]">Clever</span> !</h4>
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
                          <p>Segunda a Sexta | 9h as 15:20h (20min de almoço)</p>
                          <p>Segunda a Sabado | 13:30h as 18:50h (20min de almoço)</p>
                        </div>

                        <div>
                          <h4 className=" font-semibold">Requisitos</h4>
                          <ul>
                            <li>-Interesse em atuar com teleatendimento</li>
                            <li>-Boa comunicação</li>
                            <li>-Vontade de aprender e crescer profissionalmente</li>
                            <li>-Proatividade e comprometimento</li>
                            <li>-Estar estudando (nível médio, técnico ou superior)</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className=" font-semibold">Beneficios</h4>
                          <ol className="ml-4">
                            <li className="list-disc"> Equipe acolhedora e profissional</li>
                            <li className="list-disc"> Treinamentos e capacitação contínua</li>
                            <li className="list-disc"> Possibilidade real de efetivação</li>
                            <li className="list-disc"> Reconhecimento por desempenho</li>
                            <li className="list-disc"> Empresa referência nacional em recuperação de crédito</li>
                            <li className="list-disc"> Vale transporte</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          <AnimatePresence initial={false}>
            {Aberto == true && (
              <div className="flex justify-center items-center fixed inset-0 z-50 rounded-4xl">
                <motion.div
                  className="absolute -z-10 inset-0 bg-black/30"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="bg-[#fff] rounded-4xl p-3 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.1,
                    ease: "easeOut"
                  }}
                >
                  <div className="">
                    <div className="w-full flex justify-end">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IoClose className="hover:cursor-pointer" size={30} color="#f1b434" onClick={() => estaAbrindo(false)} />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="text-4xl font-bold text-center">Candidaturar<br /><span className="text-[#F1B434]">Clever</span> !</h4>
                    </div>
                    <InteractiveForm />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </section>

      </main>

      <Footer isBgGray={true} />
    </>
  );
}
