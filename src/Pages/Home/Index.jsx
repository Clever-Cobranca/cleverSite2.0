import { Header } from "../../components/Header/index";
import Homepage from "../../assets/Homepage_Image.png";

export default function Home() {
  return (
    <>
      <Header />
      {/* main mantém a altura fixa */}
      <main className="h-[698px]">
        {/* 1. SECTION: Deve usar h-full para ocupar 100% da altura do main. */}
        <section className="flex items-center h-full max-lg:flex-col">
          <div id="aside" className="flex flex-col gap-6 pl-12 max-w-[980px]">
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
              <button className="h-[87px] w-64 font-bold text-xl rounded-4xl bg-[#F1B434] text-[#F2F2F2] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#e0a92e] hover:cursor-pointer">
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
      </main>
    </>
  );
}
