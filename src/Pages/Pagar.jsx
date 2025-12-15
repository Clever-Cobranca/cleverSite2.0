import { Header } from "../components/Header/Header";
import fundoLaura from "../assets/fundoLaura.png"

export default function Pagar() {
    return (
        <>
            <Header />
            <main className="mt-25">
                <div className="flex justify-end">
                    <img src={fundoLaura} alt="" className="-z-10 absolute h-screen" />
                </div>

                <h1 className="text-6xl font-family-roboto-slab mt-10 font-bold text-center">Quer quitar suas <span className="text-[#F1B434]">dívida</span>?</h1>
                
                <div className="flex justify-center items-center flex-col h-full z-10 w-1/2 p-35">
                    <h2 className="text-4xl">Entre em contato com nossa assistente, a <span className="text-[#f1b534]">Laura</span>!</h2>
                    <div className="flex justify-between w-full mt-26">
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Quero+saber+mais!&type=phone_number&app_absent=0">
                            <button className="bg-[#f1b434] pt-5 pl-8 pr-8 pb-5 rounded-2xl text-[#fff] border-b-2 border-l-2 border-r-2 border-black/10 hover:bg-[#f1b734]/90 transition-all duration-300 cursor-pointer">Fale com a Laura</button>
                        </a>
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Quero+segunda+via+do+boleto!&type=phone_number&app_absent=0">
                            <button className="pt-5 pl-8 pr-8 pb-5 rounded-2xl border-b-4 border-r-1 border-l-1 border-black/20 hover:bg-[#000]/5 transition-all duration-300 cursor-pointer">Pedir a 2° via do boleto</button>
                        </a>
                    </div>
                </div>

            </main>
        </>
    )
}