import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export default function Pagar() {
  return (
    <>
      <Header />
      <main className="bg-[url('/src/assets/quero-pagar-background.png')] bg-cover bg-center min-h-2/4 md:max-lg:h-[69%] lg:max-xl:min-h-[74%] xl:h-[90%] flex flex-col justify-center">
        <div className="flex flex-wrap justify-center items-baseline gap-2 pt-10">
          <h1 className="text-[clamp(2.6rem,6vw,5rem)] max-sm:h-10 font-family-headers">
            Quer quitar suas
          </h1>
          <italic className="text-[#F1B434] max-sm:h-10 font-medium text-[clamp(2.8rem,6.3vw,6rem)]  italic font-family-garamond">
            Dívidas?
          </italic>
        </div>

        <div className="md:flex mt-10 w-full max-lgs:px-8  flex-col md:z-10 lgs:px-35 lgs:pb-35">
          <div className="text-[clamp(2em,4vw,3.2rem)] tracking-wide font-family-headers leading-11">
            <h2>Entre em contato com nossa <span className="text-[#f1b534]">Equipe!</span></h2>
            
          </div>
          <div className="flex mb:justify-between max-xl:justify-center max-sm:px-2 gap-8 w-max">
            <div className="h-5 w-full max-lgs:text-center items-center flex mt-10   mb-22">
              <a
                className="h-[50px] md:h-[87px] flex items-center justify-center max-sm:p-1 w-[380px] 2xl:w-[500px] max-sm:w-64 max-md:w-38 max-lgs:w-auto max-lgs:p-5 text-[clamp(1.9rem,4vw,2.3rem)] text-black-primary font-family-headers rounded-4xl bg-orange-primary shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#e0a92e] hover:cursor-pointer"
                href="https://api.whatsapp.com/send/?phone=5508000004820&text=Ol%C3%A1,+quero+negociar!&type=phone_number&app_absent=0"
                target="_blank"
              >
                Quero Regularizar
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
