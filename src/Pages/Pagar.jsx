import { Header } from "../components/Header/Header";
import fundoLaura from "../assets/fundoLaura.png";
import { Footer } from "../components/Footer/Footer";
import fundoPagar from "../assets/fundoPagar.jpg"

export default function Pagar() {
  return (
    <>
      <Header />
      <main className="mt-25 md:mb-0 mb-10">
        <div className="flex justify-end">
          <img
            src={fundoLaura}
            alt="Laura Clever feliz"
            className="-z-10 fixed h-full max-sm:hidden md:hidden max-md:hidden lgs:block "
          />
        </div>

        <h1 className="text-3xl md:text-6xl font-family-roboto-slab mt-10 font-bold text-center">
          Quer quitar suas <span className="text-[#F1B434]">dívidas</span>?
        </h1>

        <div className="md:flex md:justify-center mt-10 mb:mt-0 text-center items-center flex-col h-full md:z-10 md: lgs:p-35">
          <h2 className="text-2xl md:text-4xl">
            Entre em contato com nossa assistente, a{" "}
            <span className="text-[#f1b534]">Laura</span>!
          </h2>
          <div className="flex mb:justify-between justify-center max-sm:px-2 gap-8 w-full mt-26">
            <a
              target="_blank"
              className="bg-[#f1b434] py-2 px-1  md:px-8 rounded-2xl text-[#fff] border-b-2 border-l-2 border-r-2 border-black/10 hover:bg-[#f1b734]/90 transition-all duration-300 cursor-pointer"
              href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Quero+saber+mais!&type=phone_number&app_absent=0"
            >
              Fale com a Laura
            </a>
            <a
              className=" py-2 px-1 md:px-8 rounded-2xl border-b-4 border-r-1 border-l-1 border-black/20 hover:bg-[#000]/5 transition-all duration-300 cursor-pointer"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Quero+segunda+via+do+boleto!&type=phone_number&app_absent=0"
            >
              Pedir a 2° via do boleto
            </a>
          </div>
        </div>
        <img src={fundoPagar} className="max-sm:hidden hidden max-lgs:block"/>
      </main>

      <Footer isBgGray />
    </>
  );
}