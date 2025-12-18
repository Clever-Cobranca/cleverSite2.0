import { Header } from "../components/Header/Header"
import Alan from "../assets/Alan.png"
import EbookCapa from "../assets/svgs/cobranca-sem-medo.svg"
import { Footer } from "../components/Footer/Footer"
export default function Educacao() {
    return (
        <>
            <Header />
            <main className="mt-25 mb-25">
                <section className="max-md:flex md:justify-items-center lgs:flex max-sm:flex-col md:justify-between">
                    <div className="md:m-10 lgs:m-0 lgs:w-2/5 md:h-full bg-[#F1B434]">
                        <img className="lgs:ml-27" src={Alan} />
                    </div>

                    <div className="lgs:w-1/2 md:p-10 lgs:p-0 md:flex md:flex-col md:items-center mt-5 text-center lgs:text-start">
                        <h1 className="font-family-roboto-slab max-sm:text-3xl md:text-5xl lgs:text-8xl">Quem é <span className="text-[#707372]">Alan Clever?</span></h1>
                        <div className="flex flex-col items-center md:items-center gap-10">
                            <p>Fundador da Clever Assessoria e Cobrança, @Alanclever é especialista em recuperação de crédito educacional, com formação em Engenharia e pós-graduação em Direito Contratual e Processo Civil.</p>
                            <p>Após anos como gestor de unidades escolares e enfrentar na prática os desafios da inadimplência, decidiu transformar o problema em solução, criando um método de cobrança estruturado, firme e ético, que já recuperou milhares de contratos em todo o Brasil.</p>
                            <p>Hoje, Alan lidera a Clever com foco absoluto em resultados, legalidade e transformação do setor educacional por meio da cobrança inteligente.</p>
                            <div className="border-t-4 border-[#F1B434] w-2/6 rounded-b-full" />
                            <p>CONHEÇA MELHOR QUEM CRIOU O CONTEÚDO</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-center font-family-roboto-slab font-bold text-4xl mb:text-8xl p-7">Produtos Pagos</h2>

                    <div className="flex flex-col max-sm:flex-col max-md:flex-row p-10 md:p-10 justify-center gap-5 md:gap-15 md:items-center max-sm:items-center lgs:flex-row">

                        <div className="flex flex-col md:flex-row max-sm:min-w-11/12 max-sm:justify-center max-md:w-1/2 lgs:w-1/3 md:text-center h-4/12 gap-5 justify-around bg-[#E2E2E2] items-center p-3 rounded-4xl">
                            <img className="rounded-2xl md:h-full md:w-1/2" src={EbookCapa} />
                            <div className="flex flex-col mb:w-1/2 items-center justify-center gap-7">
                                <h3 className="font-bold text-2xl">Cobrança Sem medo, Escola Sem prejuízo</h3>
                                <p>Reduza a inadimplência, estruture processos eficazes e profissionalize a cobrança em sua escola. </p>
                                <a target="_blank" href="https://pay.hotmart.com/F99606678F?bid=1765816975227" className="bg-[#F1B434] w-full text-center rounded-3xl text-[#fff] p-3 hover:bg-[#000]/70 transition-all duration-500 cursor-pointer">
                                    <button className="">Comprar</button>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row max-sm:min-w-11/12 max-sm:justify-center max-md:w-1/2 lgs:w-1/3 md:text-center h-4/12 gap-5 justify-around bg-[#E2E2E2] items-center p-3 rounded-4xl">
                            <img className="rounded-2xl md:h-full md:w-1/2" src={EbookCapa} />
                            <div className="flex flex-col mb:w-1/2 items-center justify-center gap-7">
                                <h3 className="font-bold text-2xl">Cobrança Sem medo, Escola Sem prejuízo</h3>
                                <p>Reduza a inadimplência, estruture processos eficazes e profissionalize a cobrança em sua escola. </p>
                                <a target="_blank" href="https://pay.hotmart.com/F99606678F?bid=1765816975227" className="bg-[#F1B434] w-full text-center rounded-3xl text-[#fff] p-3 hover:bg-[#000]/70 transition-all duration-500 cursor-pointer">
                                    <button className="">Comprar</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="">Blog</h3>

                </section>
            </main>
            <Footer isBgGray />
        </>
    )
}