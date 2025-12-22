import SejaClever from "../assets/SejaUmClever.png";
import LogoCleverTrabalhe from "../assets/Logo_Clever_Trabalhe.png";
import EquipeClever from "../assets/Equipe_Clever.png";
import TrioClever1 from "../assets/Trio_Clever1.png";
import TrioClever2 from "../assets/Trio_Clever2.png";
import { Header } from "../components/Header/Header";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPortrait, MdLocationCity, MdOpacity } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const handMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

}



export default function TrabalheConosco() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="pt-24">
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
                  className="lg:w-[55%] max-md:w-1/3 max-sm:w-2/12 w-1/3 object-contain"
                />
              </span>
            </div>
          </div>
        </div>
        <section className="px-6 py-14">
          <div>
            <h1 className="text-[clamp(2.5rem,6vw,6.2rem)]  leading-tight font-family-roboto-slab font-bold py-2 pl-2 md:max-lgs:pl-16">
              Quem Somos?
            </h1>
            <div className="flex justify-around items-center wrap-break-word flex-wrap gap-4">
              <p className="text-[clamp(0.8rem,4vw,1.3rem)] max-w-[645px]">
                Somos a Clever Assessoria Jurídica e Cobrança, uma empresa
                especializada em recuperação de crédito com atuação firme,
                transparente e totalmente orientada ao credor. Nascemos para
                preencher uma lacuna do mercado: entregar resultado real, sem
                promessas vazias e sem favorecer manobras que afastem o devedor
                de sua obrigação legal.
              </p>
              <p className="text-[clamp(0.8rem,4vw,1.3rem)] max-w-[645px] max-lgs:hidden">
                Trabalhamos em todo o ciclo da cobrança, da fase extrajudicial
                às medidas mais severas quando necessárias, sempre com base
                jurídica sólida, estratégia e foco absoluto em eficiência. Nosso
                compromisso é simples: garantir que o credor receba o que lhe é
                devido, preservando direitos, fortalecendo relações e elevando o
                padrão de cobrança no Brasil.
              </p>
              <img
                className="max-w-[540px] w-full h-full md:mb-48"
                src={EquipeClever}
                alt="Equipe clever fantasiada"
              />
              <div className="flex flex-col max-md:pt-20 gap-6">
                <img
                  className="max-w-[540px] w-full"
                  src={TrioClever1}
                  alt="Trio 1 fantasiado"
                />
                <p className="text-[clamp(0.8rem,4vw,1.3rem)] max-w-[540px] lgs:hidden">
                  Trabalhamos em todo o ciclo da cobrança, da fase extrajudicial
                  às medidas mais severas quando necessárias, sempre com base
                  jurídica sólida, estratégia e foco absoluto em eficiência.
                  Nosso compromisso é simples: garantir que o credor receba o
                  que lhe é devido, preservando direitos, fortalecendo relações
                  e elevando o padrão de cobrança no Brasil.
                </p>
                <img
                  className="max-w-[540px] w-full"
                  src={TrioClever2}
                  alt="Trio 2 fantasiado"
                />
              </div>
            </div>{" "}
          </div>
        </section>

        <section className="p-10 flex">
          <div className="flex-col flex gap-10">
            <div className="flex">
              <div className="flex-col gap-5 flex">
                <h2 className="text-7xl font-family-roboto-slab font-bold">Vem fazer Parte da <br /> <span className="text-[#F1B434]">#CleverFamily</span></h2>
                <p>Estamos entre as melhores empresas para iniciar a carreira e 85% de nossas vagas administrativas e de liderança são preenchidas internamente! Então, se você sonha em fazer parte de um time que valoriza a carreira e seu desenvolvimento, conheça as novas vagas!</p>
              </div>
            </div>


            <div className="flex flex-col items-center gap-10 flex-wrap">
              <div className="bg-[#F1B434] text-center p-4 rounded-4xl">
                <h3>Supervisor/ <br />coordenador de operações</h3>
              </div>

              <div className="flex justify-center gap-10">
                <div className=" bg-[#F1B434] text-center p-4 rounded-4xl">
                  <h3>Operação de cobrança</h3>
                </div>

                <div className=" bg-[#F1B434] text-center p-4 rounded-4xl hover:cursor-pointer" onClick={() => setIsOpen(true)}>
                  <h3>Operador de notificação</h3>
                </div>
              </div>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <div className="flex justify-center items-center fixed inset-0 z-50 rounded-4xl">
                  <motion.div
                    className="absolute -z-10 inset-0 bg-black/30"
                    onClick={() => setIsOpen(false)}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                  />
                  <motion.div
                    className="bg-[#fff] rounded-4xl p-5 w-1/2 relative"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.8}}
                    transition={{
                      duration: 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <div className="">
                      <div className="w-full flex justify-end">
                        <motion.div
                          whileHover={{scale: 1.1}}
                          whileTap={{scale: 0.9}}
                        >
                          <IoClose className="hover:cursor-pointer" size={30} color="#f1b434" onClick={() => setIsOpen(false)} />
                        </motion.div>
                      </div>
                      <div>
                        <h4 className="text-6xl font-bold text-center">Estágio Clever<br /><span className="text-[#F1B434]">Clever</span> !</h4>
                      </div>
                      <div className="flex gap-16 border-t-2 border-[#D9D9D9] border-b-2 pt-10 pb-10">
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

                        <div className="flex flex-col gap-4 justify-center flex-wrap">
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
                          <h4 className="text-2xl font-semibold">Descrição da vaga</h4>
                          <p>A pergunta agora não é 'se', a pergunta é onde ele vai atacar! Porque ele vai atacar! Ele tem pneu para isso, ele tem carro para isso e ele tem o arrojo necessário! É agora ou nunca para Max Verstappen!"</p>
                        </div>

                        <div>
                          <h4 className="text-2xl font-semibold">Requisitos</h4>
                          <ul>
                            <li>-Possuir 16 ou 17 anos</li>
                            <li>-Estar Cursando o ensino medio</li>
                            <li>-Residir na Região</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-2xl font-semibold">Descrição da vaga</h4>
                          <ol className="ml-4">
                            <li className="list-disc"><strong>Etapa 1:</strong> Cadastro</li>
                            <li className="list-disc"><strong>Etapa 2:</strong> Entrevista</li>
                            <li className="list-disc"><strong>Etapa 3:</strong> Exames</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
          <div className="w-11/12">
            <div className="w-11/12 border-t-3 rounded-2xl border-[#F1B434]" />
          </div>
        </section>
      </main>
    </>
  );
}
