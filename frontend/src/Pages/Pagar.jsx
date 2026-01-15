import { Header } from "../components/Header/Header";
import fundoLaura from "../assets/fundoLaura.png";
import { Footer } from "../components/Footer/Footer";

export default function Pagar() {
  return (
    <>
      <Header />
      <main className="md:mb-0 mb-10">
        <div className="flex justify-end">
          <img
            src={fundoLaura}
            alt="Laura Clever feliz"
            className="-z-10 fixed max-sm:hidden md:hidden max-md:hidden lgs:block "
          />
        </div>

        <h1 className="text-3xl md:text-6xl font-family-roboto-slab mt-10 font-bold text-center">
          Quer quitar suas <span className="text-[#F1B434]">dívidas</span>?
        </h1>

        <div className="md:flex mt-10 mb:mt-0 max-sm:w-full w-2/4 items-center flex-col h-full md:z-10 md: lgs:p-35">
          <h2 className="text-2xl md:text-4xl max-sm:text-center font-bold">
            Entre em contato com nossa assistente, a{" "}
            <span className="text-[#f1b534]">Laura</span>!
          </h2>
          <div className="flex mb:justify-between max-sm:justify-center max-sm:px-2 gap-8 w-full">
            <div className="h-5 max-lgs:text-center items-center flex mt-10 mb-10">
              <a href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Vim+pelo+site+e+Quero+segunda+via+do+boleto!&type=phone_number&app_absent=0" target="_blank">
                <button className="pl-5 pr-5 pt-3 pb-3 border-2 border-[#F1B434] rounded-2xl text-[#707372] uppercase font-bold hover:bg-[#F1B434] hover:text-white transition-all duration-300 hover:cursor-pointer">Quero Segunda Via do Boleto</button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}