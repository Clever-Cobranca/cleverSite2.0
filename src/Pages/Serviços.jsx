import LauraRecuperacao from "../assets/LauraRecuperacao.png";
import nossaHistoria from "../assets/nossaHistoria.png";
import nossaHistoriaFull from "../assets/nossaHistoriaFullScreen.png";
import lauraCalendario from "../assets/lauraCalendario.png";
import LauraTrofeu from "../assets/lauraTrofeu.png";
import Laura_Mic from "../assets/Laura_Mic.png";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export default function Serviços() {
  const nossaHistoriaFullUrl = `url('${nossaHistoriaFull}')`;

  return (
    <>
      <Header />
      <main className="mt-36">
        <h1 className="text-center text-[clamp(2.5rem,5vw,4.5rem)] font-family-roboto-slab font-bold">
          Nossos Serviços
        </h1>

        <section className="">
          <div className="flex items-center justify-center flex-wrap">
            <img
              className="max-md:hidden"
              src={LauraRecuperacao}
              alt="Laura recuperação de dinheiro"
            />

            <div className="sm:w-1/2 max-md:p-8 flex flex-col gap-16 md:mb-30 mb-20">
              <h2 className=" max-sm:text-center font-family-roboto-slab text-[clamp(2rem,5vw,5rem)]/tight font-bold">
                Recuperação de <span className="text-[#F1B434]">Dívidas</span>
              </h2>
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                É a recuperação daqueles Títulos, Contratos, Mensalidade, Notas
                Promissórias, Cheques, Dívidas . Que já estão com mais de 90
                (noventa) dias em atraso, e você já tentou negociar, já fez
                restrições nos Órgãos de Proteção ao Crédito, tentou fazer de
                tudo e mesmo assim o devedor insiste em não querer te pagar.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#E2E2E2] flex sm:p-12 p-8 items-center justify-between">
          <div className="flex flex-col gap-8">
            <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
              Realizamos a cobrança no local que o devedor adquiriu o produto ou
              serviço. Enviamos um de nossos representantes em qualquer lugar do
              Brasil. Este irá realizar atendimentos presenciais com hora
              marcada, negociações e também formalização dos acordos. Apenas
              solicitamos uma sala reservada, impressora e acesso à internet.
            </p>
            <img
              src={nossaHistoria}
              alt="Nossa História - Clever"
              className="lg:hidden"
            />

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
            src={nossaHistoria}
            alt="Nossa História - Clever"
            className="max-lg:hidden"
          />
        </section>

        <section>
          <div className="flex p-8 sm:p-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-[clamp(2.2rem,4vw,5.8rem)] leading-12 font-family-roboto-slab font-bold">
                Cobrança Preventiva
              </h3>
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                Serviço composto por lembretes de vencimento, envio de boletos e
                cobranças, incluindo renegociação de atrasos de até 90 dias.
                Atuamos em plataforma Omni-Channel (call center, e-mail, SMS,
                WhatsApp, redes sociais e boleto impresso) para reduzir até 95%
                dos atrasos recorrentes.
              </p>
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                A cobrança preventiva elimina custos de manter um setor interno,
                garante que o credor receba o que é devido e reduz vínculos
                empregatícios. A Clever estrutura toda a operação de lembretes e
                cobranças recorrentes.
              </p>
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                Trabalhamos com estratégia definida: aviso 3 dias antes do
                vencimento; reforço no dia; e contato humanizado 2 dias após o
                atraso para cobrança e acordos. Durante 30 dias, realizamos
                todos os contatos necessários. Pagamento por pacote mensal: sua
                empresa envia clientes e datas de vencimento, e paga apenas R$
                “consulte” por CPF pelo ciclo completo.
              </p>
            </div>
            <img className="w-1/2 max-lg:hidden" src={lauraCalendario} />
          </div>
        </section>

        <section className="bg-[#F1B434] md:p-20 p-8">
          <h4 className="text-[clamp(2.2rem,4vw,5.8rem)] leading-10 font-bold text-center">
            Assessoria Jurídica
          </h4>
          <div className="flex mt-5 gap-20">
            <img
              className="w-1/2 max-lg:hidden"
              src={LauraTrofeu}
              alt="Laura segurando troféu da melhor Assessoria BR"
            />
            <div className="flex flex-col md:gap-10 gap-5 md:mt-30">
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                Serviço composto por lembretes de vencimento, envio de boletos e
                cobranças, com renegociação de atrasos de até 90 dias. Atuamos
                via plataforma Omni-Channel (call center, e-mail, SMS, WhatsApp,
                redes sociais e boleto impresso), reduzindo até 95% dos atrasos
                recorrentes.
              </p>
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                A cobrança preventiva elimina custos internos, reduz vínculos
                empregatícios e garante que o credor receba o que é devido. A
                Clever assume toda a operação de lembretes e cobranças. A
                estratégia é objetiva: aviso 3 dias antes do vencimento, reforço
                no dia e contato humanizado 2 dias após o atraso. Durante 30
                dias, realizamos todos os contatos necessários.
              </p>
              <p className="text-[clamp(0.8rem,4vw,1rem)] text-left leading-5">
                Forma de pagamento: pacote mensal. Sua empresa envia os clientes
                e vencimentos, e paga apenas R$ “consulte” por CPF pelo ciclo
                completo.
              </p>
            </div>
          </div>
        </section>
        <section className="relative">
          <div
            style={{ "--bg-url": nossaHistoriaFullUrl }}
            className={`bg-[image:var(--bg-url)] bg-[#E2E2E2] opacity-60 -z-10  h-[600px] bg-cover bg-center`}
          ></div>
          <div class="bg-gradient-to-t absolute inset-0 from-black/50 to-transparent flex">
            <div className="flex sm:items-baseline items-center   gap-5 flex-col px-10 mb-3.5 justify-center w-full">
              <h4 className="text-[clamp(2.2rem,6vw,5.5rem)] font-bold ">
                SAC
              </h4>
              <p className="text-[clamp(0.8rem,4vw,1rem)] font-black text-left leading-5 max-w-[500px]">
                SAC significa Serviço de Atendimento ao Consumidor, um canal
                direto que empresas oferecem para clientes tirarem dúvidas,
                fazerem reclamações, solicitações ou darem sugestões, usando
                canais como telefone, e-mail, chat ou redes sociais, visando
                resolver problemas e melhorar a satisfação e fidelização do
                cliente, sendo obrigatório para algumas empresas e regulamentado
                por lei.
              </p>
            </div>
            <img src={Laura_Mic} alt="Laurinha Clever com microfone" height={600} className="max-md:hidden"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
