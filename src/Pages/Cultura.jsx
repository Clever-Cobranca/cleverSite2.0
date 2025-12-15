import LauraeEstagiario from '../assets/LauraeEstagiario.png'
import iconResultado from '../assets/iconResultado.png'
import iconTranparecia from '../assets/iconTransparencia.png'
import iconCompromisso from '../assets/iconCompromisso.png'
import iconRespeito from '../assets/iconRespeito.png'
import iconDesenvolvimento from '../assets/iconDesenvolvimento.png'
import iconFinanceiro from '../assets/iconFinanceiro.png'
import iconTrabalhoEquipe from '../assets/iconTrabalhoEquipe.png'
import iconLegalidade from '../assets/iconLegalidade.png'
import { Header } from '../components/Header/Header'

export default function Cultura() {
    return (
        <>
            <Header />
            <main className="mt-25">
                <div className="flex flex-col items-center w-full pr-20 pl-20">
                    <h1 className="text-7xl font-family-roboto-slab font-bold">Nossa Cultura</h1>
                    <h4 className="mt-5 text-3xl text-center font-light">A cultura organizacional é um conjunto de valores, crenças e ações que definem como a organização conduz o negócio.</h4>
                </div>

                <section className='flex items-center pr-20 pl-20 mt-5'>
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-8xl font-bold font-family-roboto-slab">Nossa <span className="text-[#F1B434]">Missão</span></h2>
                        <p>Defender os direitos dos credores com assertividade, eficiência e compromisso, garantindo a recuperação de crédito por meio de soluções práticas, firmes e alinhadas à legislação vigente, sempre priorizando resultados para os credores.</p>
                    </div>

                    <img src={LauraeEstagiario} />
                </section>

                <section className='bg-[#F1B434] flex justify-between items-center p-32'>
                    <p className='w-7/12 text-[#fff] font-bold   '>Consolidar-se até 2030 como referência no mercado de recuperação de crédito, contando com 400 colaboradores, sendo referência em treinamento e educação na área de recuperação de crédito no Brasil, atuando em diversos nichos: varejo, bancos, além do educacional.</p>
                    <h4 className='font-bold text-8xl text-[#fff]'>Visão</h4>
                </section>

                <section>
                    <h3 className='text-8xl font-bold font-family-roboto-slab text-center mt-5'>Nosso <span className='text-[#F1B434]'>Valores</span></h3>

                    <div className='grid grid-rows-3 grid-flow-col gap-5 mt-14 mb-15 justify-around'>
                        <div className='flex items-center w-full gap-10'>
                            <img className='w-[25px] h-[25px]' src={iconResultado} />
                            <p>Foco em resultado</p>
                        </div>

                        <div className='flex items-center w-full gap-10'>
                            <img className='w-[25px] h-[25px]' src={iconTranparecia} />
                            <p>Ética e Transparencia</p>
                        </div>

                        <div className='flex items-center w-full gap-10'>
                            <img className='w-[25px] h-[25px]' src={iconCompromisso} />
                            <p>Compromisso</p>
                        </div>

                        <div className='flex items-center w-full gap-10'>
                            <img className='w-[25px] h-[25px]' src={iconRespeito} />
                            <p>Respeito</p>
                        </div>

                        <div className='flex items-center w-full gap-10'>
                            <img className='w-[25px] h-[25px]' src={iconDesenvolvimento} />
                            <p>Desenvolvimento Contínuo</p>
                        </div>

                        <div className='flex items-center w-full gap-10'>
                            <img className='w-[25px] h-[25px]' src={iconFinanceiro} />
                            <p>Responsabilidade Financeira</p>
                        </div>

                        <div className='flex items-center w-full gap-10'>
                            <img className='w-[25px] h-[25px]' src={iconTrabalhoEquipe} />
                            <p>Trabalho em equipe</p>
                        </div>

                        <div className='flex items-center w-full gap-10'>
                            <img className='w-[25px] h-[25px]' src={iconLegalidade} />
                            <p>Legalidade</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}