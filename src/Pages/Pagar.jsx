import { Header } from "../components/Header/Header";
import fundoLaura from "../assets/fundoLaura.png"
import { Footer } from "../components/Footer/Footer";

export default function Pagar() {
    return (
        <>
            <Header />
            <main className="mt-25 md:mb-0 mb-10">
                <div className="flex justify-end">
                    <img src={fundoLaura} alt="" className="-z-10 absolute fixed h-full hidden md:block" />
                </div>

                <h1 className="text-3xl md:text-6xl font-family-roboto-slab mt-10 font-bold text-center">Quer quitar suas <span className="text-[#F1B434]">dívida</span>?</h1>
                
                <div className="md:flex md:justify-center mt-10 mb:mt-0 text-center items-center flex-col h-full md:z-10 md:w-1/2 md:p-35">
                    <h2 className="text-2xl md:text-4xl">Entre em contato com nossa assistente, a <span className="text-[#f1b534]">Laura</span>!</h2>
                    <div className="flex mb:justify-between justify-center gap-8 w-full mt-26">
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Quero+saber+mais!&type=phone_number&app_absent=0">
                            <button className="bg-[#f1b434] pt-2 pb-2 pl-1 pr-1 mb:pt-5 mb:pl-8 mb:pr-8 mb:pb-5 rounded-2xl text-[#fff] border-b-2 border-l-2 border-r-2 border-black/10 hover:bg-[#f1b734]/90 transition-all duration-300 cursor-pointer">Fale com a Laura</button>
                        </a>
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Quero+segunda+via+do+boleto!&type=phone_number&app_absent=0">
                            <button className="pt-2 pb-2 pl-2 pr-2 mb:pt-5 mb:pl-8 mb:pr-8 mb:pb-5 rounded-2xl border-b-4 border-r-1 border-l-1 border-black/20 hover:bg-[#000]/5 transition-all duration-300 cursor-pointer">Pedir a 2° via do boleto</button>
                        </a>
                    </div>
                </div>
            </main>

            <Footer isBgGray/>
        </>
    )
}