import { Header } from "../components/Header/Header";
import fundoLaura from "../assets/fundoLaura.png";
import { Footer } from "../components/Footer/Footer";

export default function Pagar() {
  return (
    <>
      <Header />
      <main className="md:mb-0 mb-10 min-h-2/4 md:max-lg:h-[69%] lg:max-xl:min-h-[74%] xl:h-screen">
        <div className="flex justify-end">
          <img
            src={fundoLaura}
            alt="Laura Clever feliz"
            className="-z-10 fixed max-sm:hidden md:hidden max-md:hidden xl:h-full lgs:block object-cover object-right "
          />
        </div>

        <h1 className="text-[clamp(2.6rem,4vw,3.75rem)] font-family-roboto-slab mt-10 md:max-lg:mt-[80px] font-bold text-center">
          Quer quitar suas <span className="text-[#F1B434]">dívidas</span>?
        </h1>

        <div className="md:flex mt-10 mb:mt-0 max-xl:w-full w-2/4 items-center max-lg:px-6  flex-col md:z-10 lgs:p-35">
          <h2 className="text-[clamp(1.8rem,4vw,2.25rem)] max-sm:text-center font-bold">
            Entre em contato com nossa assistente, a{" "}
            <span className="text-[#f1b534]">Laura</span>!
          </h2>
          <div className="flex mb:justify-between max-xl:justify-center max-sm:px-2 gap-8 w-full">
            <div className="h-5 max-lgs:text-center items-center flex mt-10 mb-10">
              <a
                href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+Vim+pelo+site+e+Quero+segunda+via+do+boleto!&type=phone_number&app_absent=0"
                target="_blank"
              >
                <button className="pl-5 pr-5 pt-3 pb-3 border-2 border-[#F1B434] rounded-2xl text-[#707372] uppercase font-bold hover:bg-[#F1B434] hover:text-white transition-all duration-300 hover:cursor-pointer">
                  Quero Segunda Via do Boleto
                </button>
              </a>
            </div>
          </div>
          <img
            src={fundoLaura}
            alt="Laura Clever feliz"
            className="lg:max-xl:block hidden w-full min-h-[800px] object-cover object-right"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
