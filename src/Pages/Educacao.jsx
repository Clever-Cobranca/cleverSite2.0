import { Header } from "../components/Header/Header"
import Alan from "../assets/Alan.png"
import EbookCapa from "../assets/svgs/cobranca-sem-medo.svg"
export default function Educacao(){
    return(
        <>
            <Header />
            <main className="mt-25">
                <section className="flex justify-between">
                    <div className="w-2/5 p-14 bg-[#F1B434]">
                        <img className="ml-27   " src={Alan}/>
                    </div>

                    <div className="w-1/2 mt-5">
                        <h1 className="font-family-roboto-slab text-8xl">Quem é <span className="text-[#707372]">Alan Clever?</span></h1>
                        <div className="flex flex-col gap-10">
                            <p>Fundador da Clever Assessoria e Cobrança, @Alanclever é especialista em recuperação de crédito educacional, com formação em Engenharia e pós-graduação em Direito Contratual e Processo Civil.</p>
                            <p>Após anos como gestor de unidades escolares e enfrentar na prática os desafios da inadimplência, decidiu transformar o problema em solução, criando um método de cobrança estruturado, firme e ético, que já recuperou milhares de contratos em todo o Brasil.</p>
                            <p>Hoje, Alan lidera a Clever com foco absoluto em resultados, legalidade e transformação do setor educacional por meio da cobrança inteligente.</p>
                            <div className="border-t-4 border-[#F1B434] w-2/6 rounded-b-full"/>
                            <p>CONHEÇA MELHOR QUEM CRIOU O CONTEÚDO</p>
                        </div>
                    </div>
                </section>

                <section className="justify-center">
                    <h2>Peodutos Pagos</h2>
                    <div className="flex w-2/5 h-4/12 justify-around bg-[#E2E2E2] items-center p-3 rounded-4xl">
                        <img className="size-4/12 rounded-2xl" src={EbookCapa} />
                        <div className="flex flex-col w-1/2 items-center justify-center gap-7">
                            <h3 className="font-bold ">Cobrança Sem medo, Escola Sem prejuízo</h3>
                            <p>Reduza a inadimplência, estruture processos eficazes e profissionalize a cobrança em sua escola. </p>
                            <button className="bg-[#F1B434] text-[#fff] p-3 rounded-3xl">Comprar</button>
                        </div>
                    </div>
                        
                </section>
            </main>
        </>
    )
}