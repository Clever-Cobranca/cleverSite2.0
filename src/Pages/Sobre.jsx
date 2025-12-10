import { Header } from "../components/Header";
import Banner from "../assets/Banner.png" 
import LauraManifesto from "../assets/lauraManifesto.png"

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
        </main>
    )
}