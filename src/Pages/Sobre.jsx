import Banner from "../assets/svgs/Banner.svg" 
import LauraManifesto from "../assets/lauraManifesto.png"
import NossaHistoria from "../assets/nossaHistoria.png"
import LinhadoTempo from "../assets/svgs/linhadoTempo.svg"

export default function Sobre(){
    return(
        <main className="mt-25">
            <img src={Banner} />
            <div className="flex justify-between w-full mt-5">
                <img className="" src={LauraManifesto} />
                <div className="w-1/2 p-5">
                    <h1 className="text-8xl font-bold font-family-roboto-slab">Nosso Manifesto</h1>
                    <p className="">Negociaremos e você recebe! Sem dor de cabeça e sem arranhar a imagem do seu business ante o cliente! Todo o processo de Cobrança será acompanhado pelo nosso setor Jurídico, tanto na cobrança extrajudicial quanto nas cobranças judiciais que se fizerem necessárias.</p>
                </div>
            </div>

            <section className="flex mt-10 bg-[#F2F2F2] gap-3 p-4 justify-between w-full items-center">
                <div className="w-1/2">
                    <div className=" p-2">
                        <h2 className="text-8xl font-bold font-family-roboto-slab">Nossa Historia</h2>
                        <p className="">A Clever surgiu em 2019 quando Alan Clever identificou que as assessorias do mercado não entregavam resultados reais na recuperação de crédito. Criou então uma empresa transparente, voltada ao credor e focada em resultado.</p>                   
                    </div>
                </div>
                <img src={NossaHistoria}/>
            </section>

            <section>
                <img className="select-none" draggable='false' onContextMenu={(e) => e.preventDefault()} src={LinhadoTempo} />
            </section>
        </main>
    )
}