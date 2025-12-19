import SejaClever from "../assets/SejaUmClever.png";
import LogoCleverTrabalhe from "../assets/Logo_Clever_Trabalhe.png";
import EquipeClever from "../assets/Equipe_Clever.png";
import TrioClever1 from "../assets/Trio_Clever1.png";
import TrioClever2 from "../assets/Trio_Clever2.png";
import { Header } from "../components/Header/Header";

export default function TrabalheConosco() {
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
        
        <section className="p-10">
          <div className="flex">
            <div className="flex-col gap-5 flex">
              <h2 className="text-7xl font-family-roboto-slab font-bold">Vem fazer Parte da <br/> <span className="text-[#F1B434]">#CleverFamily</span></h2>
              <p>Estamos entre as melhores empresas para iniciar a carreira e 85% de nossas vagas administrativas e de liderança são preenchidas internamente! Então, se você sonha em fazer parte de um time que valoriza a carreira e seu desenvolvimento, conheça as novas vagas!</p>
            </div>
            <div className="w-11/12">
              <div className="w-11/12 border-t-3 rounded-2xl border-[#F1B434]"/>
            </div>
          </div>
        </section>

        <section className="flex gap-10 flex-wrap">
          <div className="w-full items-center">           
            <div className="w-3/12 bg-[#F1B434]">
              <h3>Supervisor/<br/>coordenador de operações</h3>
            </div>
          </div>

          <div className="w-3/12 bg-[#F1B434]">
            <h3>Operação de cobrança</h3>
          </div>

          <div className="w-3/12 bg-[#F1B434]">
            <h3>Operador de notificação</h3>
          </div>
        </section>
      </main>
    </>
  );
}
