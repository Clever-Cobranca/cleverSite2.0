import { Header } from "../components/Header/Header"
import Alan from "../assets/Alan.png"
import EbookIMG from "../assets/EbookIMG.jpg"
import EbookCapa from "../assets/svgs/cobranca-sem-medo.svg"
import { Footer } from "../components/Footer/Footer"
import { useState } from "react"
import PostsCarousel from "../components/Blog/PostsCarousel"

export default function Educacao() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        whatsapp: "",
        empresa: "",
        novidades: false,
        form_proibido: "",
    });
    const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateForm = () => {
        if (!formData.nome.trim()) {
            setError("O nome é obrigatório.");
            return false;
        }
        if (!formData.email.trim()) {
            setError("O e-mail é obrigatório.");
            return false;
        }
        if (!isValidEmail(formData.email)) {
            setError("Digite um e-mail válido.");
            return false;
        }
        setError(null);
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot - se preenchido, é provável bot
        if (formData.form_proibido.trim() !== "") {
            console.warn("Honeypot preenchido: provável bot.");
            return;
        }

        if (!validateForm()) {
            return;
        }

        setStatus("loading");
        setError(null);

        try {
            const response = await fetch("https://agenda.clevercobranca.com.br/ebook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                // Limpa o formulário após sucesso
                setFormData({
                    nome: "",
                    email: "",
                    whatsapp: "",
                    empresa: "",
                    novidades: false,
                    form_proibido: "",
                });
            } else {
                setStatus("error");
                setError("Erro ao enviar. Tente novamente.");
            }
        } catch (err) {
            console.error("Erro ao enviar:", err);
            setStatus("error");
            setError("Erro ao enviar. Verifique sua conexão e tente novamente.");
        }
    };
    return (
        <>
            <Header />
            <main className="">
                <section className="max-md:flex md:justify-items-center lgs:flex max-sm:flex-col md:justify-between">
                    <div className="md:m-10 lgs:m-0 lgs:w-2/5 md:h-full bg-[#F1B434]">
                        <img className="lgs:ml-27" src={Alan} />
                    </div>

                    <div className="lgs:w-1/2 md:p-10 lgs:p-0 md:flex md:flex-col md:items-center mt-5 text-center lgs:text-start">
                        <h1 className="font-family-roboto-slab max-sm:text-3xl md:text-5xl lgs:text-8xl">Quem é <span className="text-[#707372]">Alan Clever?</span></h1>
                        <div className="flex flex-col items-center md:items-center gap-10">
                            <p>Fundador da Clever Assessoria e Cobrança, <a target="_blank" className="underline underline-offset-2" href="https://www.instagram.com/oalanclever/">Alan clever</a> é especialista em recuperação de crédito educacional, com formação em Engenharia e pós-graduação em Direito Contratual e Processo Civil.</p>
                            <p>Após anos como gestor de unidades escolares e enfrentar na prática os desafios da inadimplência, decidiu transformar o problema em solução, criando um método de cobrança estruturado, firme e ético, que já recuperou milhares de contratos em todo o Brasil.</p>
                            <p>Hoje, Alan lidera a Clever com foco absoluto em resultados, legalidade e transformação do setor educacional por meio da cobrança inteligente.</p>
                            <div className="border-t-4 border-[#F1B434] w-2/6 rounded-b-full" />
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
                                <a target="_blank" href="https://pay.hotmart.com/F99606678F?bid=1765816975227" className="bg-[#F1B434] w-full text-center rounded-3xl text-white p-3 hover:bg-black/70 transition-all duration-500 cursor-pointer">
                                    <button className="">Comprar</button>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row max-sm:min-w-11/12 max-sm:justify-center max-md:w-1/2 lgs:w-1/3 md:text-center h-4/12 gap-5 justify-around bg-[#E2E2E2] items-center p-3 rounded-4xl">
                            <img className="rounded-2xl md:h-full md:w-1/2" src={EbookCapa} />
                            <div className="flex flex-col mb:w-1/2 items-center justify-center gap-7">
                                <h3 className="font-bold text-2xl">Cobrança Sem medo, Escola Sem prejuízo</h3>
                                <p>Reduza a inadimplência, estruture processos eficazes e profissionalize a cobrança em sua escola. </p>
                                <a target="_blank" href="https://pay.hotmart.com/F99606678F?bid=1765816975227" className="bg-[#F1B434] w-full text-center rounded-3xl text-white p-3 hover:bg-black/70 transition-all duration-500 cursor-pointer">
                                    <button className="">Comprar</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-full">
                    <h4 className="text-[clamp(1.2rem,4vw,1.6rem)] font-bold max-w-max mx-auto mb-2">
                        Blog
                    </h4>
                    <PostsCarousel />
                </section>
                <section className="bg-gray-primary">
                    {/* Container */}
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 lg:py-14">
                        {/* Wrapper: 2 colunas (conteúdo + imagem) */}
                        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-14">

                            {/* LADO ESQUERDO */}
                            <div className="flex-1 flex flex-col gap-6 sm:gap-8">
                                <h1 className="font-family-roboto-slab font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight">
                                    E-Book
                                </h1>

                                <h3 className="font-family-roboto-slab font-bold text-xl sm:text-2xl lg:text-3xl uppercase m-0">
                                    Cobrança sem medo, escola sem prejuízo
                                </h3>

                                <h3 className="font-family-roboto-slab font-light text-lg sm:text-xl lg:text-2xl m-0">
                                    Transforme a inadimplência em um setor estratégico.
                                </h3>

                                <h3 className="font-family-roboto-slab font-bold text-xl sm:text-2xl lg:text-3xl m-0">
                                    Receba esse E-Book por e-mail!
                                </h3>

                                {/* FORM */}
                                <div className="w-full max-w-3xl">
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                        {/* Honeypot - Campo oculto para prevenir bots */}
                                        <div style={{ display: "none" }}>
                                            <label htmlFor="form_proibido">Não preencher este campo</label>
                                            <input
                                                type="text"
                                                name="form_proibido"
                                                id="form_proibido"
                                                autoComplete="off"
                                                value={formData.form_proibido}
                                                onChange={handleInputChange}
                                                tabIndex={-1}
                                            />
                                        </div>

                                        {/* Grid de inputs */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-4 sm:gap-y-5">

                                            {/* Nome */}
                                            <div className="relative w-full">
                                                <input
                                                    id="nome"
                                                    name="nome"
                                                    type="text"
                                                    placeholder="Nome"
                                                    value={formData.nome}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="
                                                peer h-12 w-full rounded-full bg-white px-6 text-base text-gray-700
                                                border border-gray-300 outline-none focus:outline-none focus:ring-0
                                                focus:border-[#F1B434]
                                                placeholder:text-gray-400
                                                lg:placeholder-transparent
                                                "
                                                />

                                                <label
                                                    htmlFor="nome"
                                                    className="
                                                sr-only lg:not-sr-only

                                                lg:pointer-events-none lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2
                                                lg:text-gray-500 lg:transition-all lg:duration-200

                                                lg:peer-placeholder-shown:top-1/2 lg:peer-placeholder-shown:text-base
                                                lg:peer-focus:top-[-0.75rem] lg:peer-focus:text-xs lg:peer-focus:text-[#F1B434]
                                                lg:peer-[:not(:placeholder-shown)]:top-[-0.75rem]
                                                lg:peer-[:not(:placeholder-shown)]:text-xs
                                                lg:peer-[:not(:placeholder-shown)]:text-gray-700
                                                "
                                                >
                                                    Nome
                                                </label>
                                            </div>

                                            {/* E-mail */}
                                            <div className="relative w-full">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Seu melhor e-mail"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="
                                                peer h-12 w-full rounded-full bg-white px-6 text-base text-gray-700
                                                border border-gray-300 outline-none focus:outline-none focus:ring-0
                                                focus:border-[#F1B434]
                                                placeholder:text-gray-400
                                                lg:placeholder-transparent
                                                "
                                                />

                                                <label
                                                    htmlFor="email"
                                                    className="
                                                sr-only lg:not-sr-only

                                                lg:pointer-events-none lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2
                                                lg:text-gray-500 lg:transition-all lg:duration-200

                                                lg:peer-placeholder-shown:top-1/2 lg:peer-placeholder-shown:text-base
                                                lg:peer-focus:top-[-0.75rem] lg:peer-focus:text-xs lg:peer-focus:text-[#F1B434]
                                                lg:peer-[:not(:placeholder-shown)]:top-[-0.75rem]
                                                lg:peer-[:not(:placeholder-shown)]:text-xs
                                                lg:peer-[:not(:placeholder-shown)]:text-gray-700
                                                "
                                                >
                                                    Seu melhor e-mail
                                                </label>
                                            </div>

                                            {/* WhatsApp */}
                                            <div className="relative w-full mt-4">
                                                <input
                                                    id="whatsapp"
                                                    name="whatsapp"
                                                    type="tel"
                                                    placeholder="WhatsApp com DDD"
                                                    value={formData.whatsapp}
                                                    onChange={handleInputChange}
                                                    className="
                                                peer h-12 w-full rounded-full bg-white px-6 text-base text-gray-700
                                                border border-gray-300 outline-none focus:outline-none focus:ring-0
                                                focus:border-[#F1B434]
                                                placeholder:text-gray-400
                                                lg:placeholder-transparent
                                                "
                                                />

                                                <label
                                                    htmlFor="whatsapp"
                                                    className="
                                                sr-only lg:not-sr-only

                                                lg:pointer-events-none lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2
                                                lg:text-gray-500 lg:transition-all lg:duration-200

                                                lg:peer-placeholder-shown:top-1/2 lg:peer-placeholder-shown:text-base
                                                lg:peer-focus:top-[-0.75rem] lg:peer-focus:text-xs lg:peer-focus:text-[#F1B434]
                                                lg:peer-[:not(:placeholder-shown)]:top-[-0.75rem]
                                                lg:peer-[:not(:placeholder-shown)]:text-xs
                                                lg:peer-[:not(:placeholder-shown)]:text-gray-700
                                                "
                                                >
                                                    WhatsApp com DDD
                                                </label>
                                            </div>

                                            {/* Empresa */}
                                            <div className="relative w-full mt-4">
                                                <input
                                                    id="empresa"
                                                    name="empresa"
                                                    type="text"
                                                    placeholder="Sua empresa"
                                                    value={formData.empresa}
                                                    onChange={handleInputChange}
                                                    className="
                                                peer h-12 w-full rounded-full bg-white px-6 text-base text-gray-700
                                                border border-gray-300 outline-none focus:outline-none focus:ring-0
                                                focus:border-[#F1B434]
                                                placeholder:text-gray-400
                                                lg:placeholder-transparent
                                                "
                                                />

                                                <label
                                                    htmlFor="empresa"
                                                    className="
                                                sr-only lg:not-sr-only

                                                lg:pointer-events-none lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2
                                                lg:text-gray-500 lg:transition-all lg:duration-200

                                                lg:peer-placeholder-shown:top-1/2 lg:peer-placeholder-shown:text-base
                                                lg:peer-focus:top-[-0.75rem] lg:peer-focus:text-xs lg:peer-focus:text-[#F1B434]
                                                lg:peer-[:not(:placeholder-shown)]:top-[-0.75rem]
                                                lg:peer-[:not(:placeholder-shown)]:text-xs
                                                lg:peer-[:not(:placeholder-shown)]:text-gray-700
                                                "
                                                >
                                                    Sua empresa
                                                </label>
                                            </div>
                                        </div>

                                        {/* CHECK + BOTÃO (responsivo) */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl sm:rounded-full border border-[#F1B434] bg-white px-5 sm:px-6 py-4 shadow-sm">
                                            <label className="flex items-start sm:items-center gap-4 cursor-pointer select-none">
                                                <input
                                                    type="checkbox"
                                                    name="novidades"
                                                    checked={formData.novidades}
                                                    onChange={handleInputChange}
                                                    className="mt-1 sm:mt-0 h-5 w-5 rounded border-gray-300 accent-[#F1B434]"
                                                />
                                                <span className="text-gray-700 text-sm sm:text-base leading-snug">
                                                    Quero receber conteúdos educacionais da Clever.
                                                </span>
                                            </label>

                                            <button
                                                type="submit"
                                                disabled={status === "loading" || status === "success"}
                                                className="w-full sm:w-auto shrink-0 rounded-full bg-[#F1B434] px-8 py-2.5 font-semibold text-white shadow-md
                                                border-2 border-transparent
                                                hover:bg-white hover:text-[#F1B434] hover:border-[#F1B434]
                                                transition hover:cursor-pointer
                                                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#F1B434] disabled:hover:text-white"
                                            >
                                                {status === "loading" ? "Enviando..." : status === "success" ? "Enviado!" : "Receber"}
                                            </button>
                                        </div>

                                        {/* Mensagens de Status */}
                                        {status === "success" && (
                                            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                                                <p className="text-green-800 text-sm sm:text-base">
                                                    ✓ E-book enviado! Verifique seu e-mail!
                                                </p>
                                            </div>
                                        )}

                                        {status === "error" && error && (
                                            <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                                                <p className="text-red-800 text-sm sm:text-base">
                                                    {error}
                                                </p>
                                            </div>
                                        )}

                                        {error && status !== "error" && (
                                            <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                                                <p className="text-red-800 text-sm sm:text-base">
                                                    {error}
                                                </p>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>

                            {/* LADO DIREITO: IMAGEM */}
                            <div className="flex-1 flex justify-center lg:justify-end">
                                <img
                                    src={EbookIMG}
                                    alt="E-book"
                                    className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] h-auto rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer isBgWhite />
        </>
    )
}