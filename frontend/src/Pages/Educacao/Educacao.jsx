import styles from "./Educacao.module.css";
import { Header } from "../../components/Header/Header";
import Alan from "../../assets/Alan.jpeg";
import AlanCondutor from "../../assets/alan-condutor.jpeg";
import CobrancaInteligente from "../../assets/cobranca-inteligente.jpeg";
import CobrancaSemMedo from "../../assets/cobranca-sem-medo.jpg";
import PareCobrarErrado from "../../assets/pare-de-cobrar-errado.jpeg";
import { useState } from "react";
import PostsCarousel from "../../components/Blog/PostsCarousel";
import ScrollReveal from "../../components/scrollView";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Educacao() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    conteudos: true,
    form_proibido: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [error, setError] = useState(null);
  const [ebookSelected, setEbookSelected] = useState({
    id: 1,
    title: "Cobrança Sem Medo, Escola Sem Prejuízo",
  }); // Default selected ebook
  const [successMessage, setSuccessMessage] = useState("");
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    //Formatação campo de telefone
    if (name === "whatsapp") {
      let input = value;
      // Remove tudo que não for número
      input = input.replace(/\D/g, "");
      if (input.length > 11) {
        input = input.slice(0, 11);
      }

      // Aplica a formatação do placeholder passo a passo
      if (input.length > 0) {
        input = `(${input}`;
      }
      if (input.length > 3) {
        input = `${input.slice(0, 3)}) ${input.slice(3)}`;
      }
      if (input.length > 10) {
        input = `${input.slice(0, 10)}-${input.slice(10)}`;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: input,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const validateForm = () => {
    const keys = Object.keys(formData);
    for (let key of keys) {
      if (
        key !== "form_proibido" &&
        key !== "conteudos" &&
        !formData[key].trim()
      ) {
        setError(`O campo ${key} é obrigatório.`);
        return false;
      }
    }
    if (!isValidEmail(formData.email)) {
      setError("Digite um email válido.");
      return false;
    }
    if (formData.whatsapp.length < 15) {
      setError("Digite um Whatsapp válido.");
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
      setStatus("error");
      return;
    }

    const payload = {
      nome: formData.nome.trim(),
      email: formData.email.trim(),
      whatsapp: formData.whatsapp.trim(),
      empresa: formData.empresa.trim(),
      novidades: formData.conteudos,
      form_proibido: formData.form_proibido,
      ebookId: ebookSelected.id,
    };

    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("https://agenda.clevercobranca.com.br/ebook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const responseData = await response.json();
        setStatus("success");
        setSuccessMessage(`${responseData.message}`);

        // Limpa o formulário após sucesso
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          empresa: "",
          conteudos: true,
          form_proibido: "",
        });
      } else {
        console.log("Erro na resposta do servidor:", response.statusText);
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
      <main className={styles.page}>
        {/* 1. HERO */}
        <ScrollReveal variant="fadeLeft">
          <section>
            <div className={styles.hero}>
              <div className={`${styles.inner} ${styles.heroInner}`}>
                <div>
                  <div className={styles.eyebrow}>
                    Método Clever · Cobrança Educacional
                  </div>
                  <h1>
                    A inadimplência da sua empresa é{" "}
                    <b>maior do que você enxerga</b>. Aprenda a recuperar o que
                    já é seu.
                  </h1>
                  <p>
                    Do contrato à recuperação, com o método que já geriu mais de
                    R$ 180 milhões em dívida educacional. Ferramentas prontas
                    para usar hoje, dentro da lei e sem medo do Procon.
                  </p>
                  <div className={styles.cta}>
                    <a className={`${styles.btn} ${styles.gold}`} href="#ebook">
                      Baixar o e-book grátis
                    </a>
                    <a
                      className={`${styles.btn} ${styles.ghost}`}
                      href="#curso"
                    >
                      Conhecer o Método
                    </a>
                  </div>
                  <div className={styles.trust}>
                    <div>
                      <b>+R$ 180 mi</b>em dívida gerida
                    </div>
                    <div>
                      <b>+350 Empresas</b>validaram nosso método
                    </div>
                    <div>
                      <b>+22 Estados</b>em todo o Brasil
                    </div>
                  </div>
                </div>
                <div className={styles.mock}>
                  <img src={Alan} alt="Alan Clever" />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 2. DIAGNÓSTICO */}
        <ScrollReveal variant="fadeUp">
          <section id="diagnostico" className={styles.diagnostico}>
            <div className={styles.inner}>
              <div className={styles.diagnosticoContent}>
                <div className={styles.eyebrow}>Comece grátis</div>
                <h2>
                  Descubra a inadimplência real da sua empresa em 2 minutos
                </h2>
                <p>
                  Faça o Diagnóstico Clever e ganhe um presente exclusivo para
                  ajudar sua instituição a cobrar melhor, proteger o caixa e
                  reduzir os impactos da inadimplência
                </p>
                <Link
                  className={`${styles.btn} ${styles.tealb}`}
                  to="/diagnostico"
                >
                  Fazer o diagnóstico gratuito
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 3. E-BOOK */}
        <ScrollReveal variant="fadeUp">
          <section id="ebook" className={styles.ebookSection}>
            <div className={styles.innerEbook}>
              <div className={styles.ebookGrid}>
                <div className={styles.ebookInfo}>
                  <div className={styles.ebookCover}>
                    {ebookSelected.id === 1 ? (
                      <img
                        src={CobrancaSemMedo}
                        alt="Capa do e-book Cobrança Sem Medo, Escola Sem Prejuízo"
                      />
                    ) : (
                      <img
                        src={CobrancaInteligente}
                        alt="Capa do e-book Cobrança Inteligente"
                      />
                    )}
                  </div>
                  <div className={styles.ebookHeading}>
                    <div className={styles.eyebrow}>E-book gratuito</div>
                    <h2>{ebookSelected.title}</h2>
                  </div>

                  {ebookSelected.id === 1 ? (
                    <ul className={styles.ebookDescription}>
                      <li>
                        Um guia direto e prático para gestores escolares que
                        desejam profissionalizar sua cobrança, estruturando
                        processos eficazes e reduzindo a inadimplência com base
                        legal, técnica e estratégica.
                      </li>
                      <li>
                        Como montar uma régua de cobrança inteligente, com ações
                        antes, no vencimento e após o atraso.
                      </li>
                      <li>
                        Quais são os erros que mais atrapalham a cobrança
                        escolar e como eliminá-los do dia a dia.
                      </li>
                      <li>
                        O que dizer (e o que nunca dizer) em uma cobrança, com
                        modelos prontos e linguagem assertiva.
                      </li>
                      <li>
                        Como aplicar scripts de negociação, lidar com objeções e
                        manter o controle da conversa.
                      </li>
                      <li>
                        Quando e como encaminhar contratos para assessoria
                        especializada, com respaldo jurídico.
                      </li>
                    </ul>
                  ) : (
                    <ul className={styles.ebookDescription}>
                      <li>
                        Cobrar de forma inteligente significa compreender
                        pessoas, conduzir conversas estratégicas e transformar
                        cada contato em uma oportunidade real de recuperação de
                        crédito.
                      </li>
                      <li>
                        Alan Clever apresenta um método prático para
                        profissionais e empresas que desejam elevar o nível da
                        operação de cobrança e alcançar resultados consistentes.
                      </li>
                      <li>
                        O material reúne técnicas aplicadas diariamente em
                        operações que lidam com milhares de negociações e altos
                        volumes financeiros.
                      </li>
                      <li>
                        Você aprenderá a transformar contatos com devedores em
                        negociações produtivas, aplicar comunicação estratégica
                        e conduzir a conversa até o fechamento do acordo.
                      </li>
                      <li>
                        O conteúdo mostra como compreender o comportamento do
                        devedor, estruturar abordagens eficazes e aumentar as
                        taxas de recuperação.
                      </li>
                      <li>
                        Um guia construído a partir de situações reais, que
                        demonstra como pequenas mudanças na comunicação podem
                        gerar grandes resultados.
                      </li>
                      <li>
                        Princípios para proteger o faturamento, manter a saúde
                        financeira do negócio e transformar a cobrança em um
                        processo mais estratégico.
                      </li>
                    </ul>
                  )}
                </div>

                <div className={styles.card}>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <b className={styles.inkText}>
                      Receba o e-book "{ebookSelected.title}" no seu e-mail
                    </b>
                    {/* Honeypot - Campo oculto para prevenir bots */}
                    <div style={{ display: "none" }}>
                      <label htmlFor="form_proibido">
                        Não preencher este campo
                      </label>
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
                    <label htmlFor="nome">Nome</label>
                    <input
                      name="nome"
                      type="text"
                      id="nome"
                      value={formData.nome}
                      placeholder="Seu nome"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="email">Seu melhor e-mail</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      id="email"
                      placeholder="voce@empresa.com.br"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="whatsapp">WhatsApp com DDD</label>
                    <input
                      name="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      id="whatsapp"
                      placeholder="(11) 90000-0000"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="empresa">Sua empresa</label>
                    <input
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      id="empresa"
                      placeholder="Nome da empresa"
                      onChange={handleInputChange}
                    />
                    <label className={styles.chk} htmlFor="conteudos">
                      <input
                        name="conteudos"
                        id="conteudos"
                        type="checkbox"
                        checked={formData.conteudos}
                        onChange={handleInputChange}
                      />
                      <span>
                        Quero receber conteúdos educacionais da Clever.
                      </span>
                    </label>
                    <span className={styles.error}>{error}</span>
                    <span className={styles.success}>{successMessage}</span>
                    <button
                      disabled={status === "loading"}
                      className={`${styles.btn} ${styles.gold} ${styles.fullButton}`}
                      type="submit"
                    >
                      Quero o e-book
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 4. PRODUTO PRINCIPAL */}
        <ScrollReveal variant="fadeRight">
          <section id="curso">
            <div className={styles.principal}>
              <div className={styles.inner}>
                <div className={styles.center}>
                  <div className={styles.eyebrow}>O curso</div>
                  <h2 className={styles.sec}>
                    Método Clever: Cobrança Educacional na Prática
                  </h2>
                </div>

                <div className={styles.prod}>
                  <div className={styles.capa}>
                    <div className={styles.tagp}>Curso completo em vídeo</div>
                    <h3>Do contrato à recuperação, com ferramentas prontas</h3>
                    <div className={styles.price}>
                      De R$ 1.497 por <b>R$ 697</b>
                      <br />
                      ou 12x no cartão
                    </div>
                    <a
                      className={`${styles.btn} ${styles.gold} ${styles.courseButton}`}
                      href="https://pay.hotmart.com/Y107046224V?checkoutMode=10&offDiscount=METODOCLEVER"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero o curso
                    </a>
                  </div>

                  <div className={styles.prodBody}>
                    <h4>Neste método você irá aprender: </h4>
                    <ul>
                      <li>
                        Descobrir a inadimplência real e prevenir o prejuízo na
                        matrícula.
                      </li>
                      <li>
                        Blindar o contrato e montar política e régua de
                        cobrança.
                      </li>
                      <li>
                        Cobrar com firmeza e dentro da lei, sem medo do Procon.
                      </li>
                      <li>Melhores roteiros para negociação.</li>
                      <li>
                        Ferramentas prontas: Diagnóstico, Régua de cobrança,
                        Política, Painel, Roteiros de negociação e Resposta ao
                        Procon.
                      </li>
                    </ul>
                    <div className={styles.prodActions}>
                      <a
                        className={`${styles.btn} ${styles.dark}`}
                        href="https://pay.hotmart.com/Y107046224V?checkoutMode=10&offDiscount=METODOCLEVER&bid=1788272087273"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver o conteúdo completo
                      </a>
                      <span>Garantia de 7 dias, risco zero.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        {/* 4. TRILHAS */}

        <ScrollReveal variant="fadeRight">
          <section>
            <div className={styles.trilhas}>
              <div className={styles.inner}>
                <div className={styles.center}>
                  <div className={styles.eyebrow}>Qual é o seu caso</div>
                  <h2 className={styles.sec}>Escolha sua trilha</h2>
                </div>

                <div className={styles.duo}>
                  <div className={styles.tr}>
                    <div className={styles.who}>Instituição</div>
                    <h3>Você tem uma Empresa</h3>
                    <p>
                      Para empresários ou gestores que não querem mais sofrer
                      com inadimplência, sem deixar de manter uma boa relação
                      com os seus clientes.
                    </p>
                    <div className={styles.steps}>
                      E-book grátis → Curso Cobrança Educacional na Prática →
                      Mentoria Escola sem Inadimplência
                    </div>
                    <Link
                      className={`${styles.btn} ${styles.tealb}`}
                      to="/diagnostico"
                    >
                      Ver o caminho da escola
                    </Link>
                  </div>

                  <div className={`${styles.tr} ${styles.trGold}`}>
                    <div className={styles.who}>
                      Você cobra ou quer montar uma assessoria
                    </div>
                    <h3>Domine a cobrança e viva disso</h3>
                    <p>
                      Para o negociador, equipe de cobrança ou você que quer
                      abrir a sua própria empresa de cobrança.
                    </p>
                    <div className={styles.steps}>
                      E-book O Código da Cobrança → Curso Cobrança Inteligente →
                      Imersão Monte sua Assessoria
                    </div>
                    <Link
                      className={`${styles.btn} ${styles.dark}`}
                      to="/diagnostico"
                    >
                      Ver o caminho do cobrador
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        {/* 5. EBOOKS */}

        <ScrollReveal variant="fadeUp">
          <section>
            <div className={styles.ebooks}>
              <div className={styles.inner}>
                <div className={styles.center}>
                  <div className={styles.eyebrow}>E-books</div>
                  <h2 className={styles.sec}>Materiais de apoio</h2>
                  <p className={`${styles.lead2} ${styles.centerLead}`}>
                    Um material de entrada para cada público. Os demais entram
                    como bônus dos cursos.
                  </p>
                </div>

                <div className={styles.threeColumns}>
                  <div className={styles.eb}>
                    <div className={styles.cv}>
                      <img
                        src={CobrancaSemMedo}
                        alt="Capa do e-book Cobrança Sem Medo"
                      />
                    </div>
                    <div className={styles.ebCt}>
                      <span className={styles.tagfree}>
                        Grátis · Instituição de Ensino
                      </span>
                      <p>
                        Um guia prático para gestores escolares estruturarem uma
                        cobrança segura, estratégica e juridicamente respaldada,
                        reduzindo a inadimplência e protegendo o faturamento da
                        escola.
                      </p>
                      <a
                        href="#ebook"
                        onClick={() =>
                          setEbookSelected({
                            id: 1,
                            title: "Cobrança Sem Medo, Escola Sem Prejuízo",
                          })
                        }
                      >
                        <b className={styles.tealText}>Baixar grátis</b>
                      </a>
                    </div>
                  </div>
                  <div className={styles.eb}>
                    <div className={styles.cv}>
                      <img
                        src={CobrancaInteligente}
                        alt="Capa do e-book Cobrança Inteligente"
                      />
                    </div>
                    <div className={styles.ebCt}>
                      <span className={styles.tagfree}>
                        Grátis · Negociador
                      </span>
                      <p>
                        Descubra o método prático de Alan Clever para
                        transformar contatos em negociações estratégicas,
                        aumentar a recuperação de crédito e proteger o
                        faturamento da sua empresa.
                      </p>
                      <a
                        href="#ebook"
                        onClick={() =>
                          setEbookSelected({
                            id: 2,
                            title: "O Código da Cobrança Inteligente",
                          })
                        }
                      >
                        <b className={styles.tealText}>Baixar grátis</b>
                      </a>
                    </div>
                  </div>
                  <div className={styles.eb}>
                    <div className={styles.cv}>
                      <img
                        src={PareCobrarErrado}
                        alt="Capa do e-book Pare de Cobrar Errado"
                      />
                    </div>
                    <div className={styles.ebCt}>
                      <span className={styles.tagbonus}>Bônus do curso</span>
                      <p>
                        Um guia prático de Alan Clever para cobrar com
                        estratégia, comunicação e respaldo legal, transformando
                        inadimplência em negociação e resultado financeiro.
                      </p>
                      <a href="#curso">
                        <b className={styles.goldText}>Incluído no curso</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        {/* 6. AUTORIDADE */}

        <ScrollReveal variant="fadeLeft">
          <section>
            <div className={styles.aut}>
              <div className={styles.innerConductor}>
                <div className={styles.autGrid}>
                  <div className={styles.numbersContainer}>
                    <div className={styles.foto}>
                      <img
                        src={AlanCondutor}
                        alt="Alan Clever Condutor da Clever"
                      />
                    </div>

                    <div className={styles.nums}>
                      <div>
                        <b>+R$ 180 mi</b>em dívida educacional gerida
                      </div>
                      <div>
                        <b>+150 Negociadores</b>de cobrança capacitados
                      </div>
                      <div>
                        <b>8 anos desenvolvendo</b>estratégia de recuperação de
                        crédito
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.eyebrow}>Quem conduz</div>
                    <h2>Alan Clever</h2>
                    <p>
                      Alan Clever é fundador e CEO da Clever Assessoria Jurídica
                      e Cobrança e especialista em recuperação de crédito, com
                      atuação especialmente voltada ao mercado educacional.
                      <br />
                      <br />
                      Sua história na cobrança não começou apenas estudando
                      inadimplência. Começou vivendo o problema do lado do
                      credor.
                      <br />
                      <br />
                      Antes da Clever, Alan esteve à frente da gestão de duas
                      unidades de cursos profissionalizantes e enfrentou
                      diretamente um dos maiores problemas financeiros das
                      instituições de ensino: vender, prestar o serviço e não
                      receber.
                      <br />
                      <br />
                      Após buscar empresas de cobrança e não encontrar o nível
                      de transparência, acompanhamento e resultado que esperava
                      como credor, identificou uma oportunidade:
                      <br />
                      <br />
                      criar uma empresa de recuperação de crédito pensada a
                      partir da realidade de quem precisa receber.
                      <br />
                      <br />
                      Foi dessa experiência que nasceu a Clever, em 2019.
                      <br />
                      <br />
                      <strong>Construção da operação</strong>
                      <br />
                      Nos primeiros meses, Alan participou pessoalmente da
                      cobrança, notificações, negociações, acompanhamento
                      financeiro e relacionamento com as unidades.
                      <br />
                      <br />
                      <strong>Especialização</strong>
                      <br />
                      A experiência operacional passou a ser combinada com
                      conhecimento jurídico, gestão, dados, negociação e
                      tecnologia.
                      <br />
                      <br />
                      <strong>Hoje</strong>
                      <br />
                      Alan transforma essa experiência em metodologia,
                      treinamento e estratégia para empresas que precisam
                      profissionalizar sua recuperação de crédito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
        {/* 7. BLOG */}
        <section>
          <div className={styles.blog}>
            <div className={styles.inner}>
              <div className={styles.center}>
                <div className={styles.eyebrow}>Conteúdo</div>
                <h2 className={styles.sec}>Blog Clever</h2>
              </div>

              <PostsCarousel />
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section>
          <div className={styles.final}>
            <div className={styles.inner}>
              <h2>Pronto para parar de perder o que é seu?</h2>
              <p>
                Comece pelo diagnóstico gratuito e veja o tamanho real da
                inadimplência da sua empresa.
              </p>
              <Link
                className={`${styles.btn} ${styles.gold}`}
                to="/diagnostico"
              >
                Fazer o diagnóstico gratuito
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={`${styles.inner} ${styles.footerInner}`}>
          <div>
            <b>CLEVER</b> · Assessoria Jurídica e Cobrança
            <br />
            clevercobranca.com.br
          </div>
          <div className={styles.footerContact}>
            <a
              href="https://wa.me/5511986037555"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp (11) 98603-7555
            </a>
            <div
              className={styles.socialLinks}
              aria-label="Redes sociais da Clever"
            >
              <a
                href="https://www.instagram.com/clevercobranca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://web.facebook.com/clevercobranca?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.tiktok.com/@cleverassessoria1?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com/@clevercobranca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/clevercobranca/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
