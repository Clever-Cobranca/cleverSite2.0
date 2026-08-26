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

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
      const response = await fetch("http://localhost:5050/ebook", {
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
                      Conhecer o curso
                    </a>
                  </div>
                  <div className={styles.trust}>
                    <div>
                      <b>+R$ 180 mi</b>em dívida gerida
                    </div>
                    <div>
                      <b>Milhares</b>de contratos recuperados
                    </div>
                    <div>
                      <b>Método</b>firme, ético e legal
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
        {/* 2. ISCA */}
        <ScrollReveal variant="fadeUp">
          <section id="ebook">
            <div className={styles.isca}>
              <div className={styles.inner}>
                <div className={styles.iscaGrid}>
                  <div>
                    <div className={styles.eyebrow}>Comece grátis</div>
                    <h2>
                      Descubra a inadimplência real da sua empresa em 2 minutos
                    </h2>
                    <p>
                      Faça o Diagnóstico Clever e receba o e-book "
                      {ebookSelected?.title}" no seu e-mail. Sem custo, direto
                      ao ponto.
                    </p>
                    <a className={`${styles.btn} ${styles.tealb}`} href="#">
                      Fazer o diagnóstico gratuito
                    </a>
                  </div>

                  <form
                    type="submit"
                    className={`${styles.card} ${styles.form}`}
                    onSubmit={handleSubmit}
                  >
                    <b className={styles.inkText}>
                      Receba o e-book "{ebookSelected?.title}" no seu e-mail
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
                      placeholder="voce@escola.com.br"
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
                        value={formData.conteudos}
                        type="checkbox"
                        defaultChecked
                        onChange={handleInputChange}
                      />
                      <span>
                        Quero receber conteúdos educacionais da Clever.
                      </span>
                    </label>
                    <span className={styles.error}>{error}</span>
                    <span className={styles.success}>{successMessage}</span>
                    <button
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
        {/* 3. PRODUTO PRINCIPAL */}
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
                    <h4>O que você leva</h4>
                    <ul>
                      <li>
                        Descobrir a inadimplência real e prevenir o calote na
                        matrícula
                      </li>
                      <li>
                        Blindar o contrato e montar política e régua de cobrança
                      </li>
                      <li>
                        Cobrar com firmeza e dentro da lei, sem medo do Procon
                      </li>
                      <li>Negociar com roteiro e fechar o pagamento</li>
                      <li>
                        Ferramentas prontas: diagnóstico, régua, política,
                        painel, roteiro e resposta ao Procon
                      </li>
                    </ul>
                    <div className={styles.bump}>
                      <b>Order bump no checkout:</b> Caixa de Ferramentas Clever
                      (gerador de documentos, e-mails da régua e controle em
                      planilha) por + R$ 97.
                    </div>
                    <div className={styles.prodActions}>
                      <a
                        className={`${styles.btn} ${styles.dark}`}
                        href="https://pay.hotmart.com/Y107046224V?checkoutMode=10&offDiscount=METODOCLEVER"
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
                  <h2 className={styles.sec}>Escolha o seu caminho</h2>
                </div>

                <div className={styles.duo}>
                  <div className={styles.tr}>
                    <div className={styles.who}>Você tem uma escola</div>
                    <h3>Reduza a inadimplência da sua instituição</h3>
                    <p>
                      Para dono e gestor de escola que quer receber o que é seu
                      sem quebrar a relação com a família.
                    </p>
                    <div className={styles.steps}>
                      E-book grátis → Curso Cobrança Educacional na Prática →
                      Mentoria Escola sem Inadimplência
                    </div>
                    <a
                      className={`${styles.btn} ${styles.tealb}`}
                      href="#curso"
                    >
                      Ver o caminho da escola
                    </a>
                  </div>

                  <div className={`${styles.tr} ${styles.trGold}`}>
                    <div className={styles.who}>
                      Você cobra ou quer montar uma assessoria
                    </div>
                    <h3>Domine a cobrança e viva disso</h3>
                    <p>
                      Para o cobrador, a equipe e quem quer abrir a própria
                      empresa de cobrança.
                    </p>
                    <div className={styles.steps}>
                      E-book O Código da Cobrança → Curso Cobrança Inteligente →
                      Imersão Monte sua Assessoria
                    </div>
                    <a className={`${styles.btn} ${styles.dark}`} href="#">
                      Ver o caminho do cobrador
                    </a>
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
                        Grátis · Instituição
                      </span>
                      <p>
                        A isca do dono de uma instituição. Entregue por e-mail
                        na captura acima.
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
                      <span className={styles.tagfree}>Grátis · Cobrador</span>
                      <p>
                        A isca de quem cobra. Porta de entrada da trilha do
                        operador.
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
                        Os 3 ebooks de negociação entram como bônus do curso
                        Cobrança Inteligente, sem concorrer entre si.
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
              <div className={styles.inner}>
                <div className={styles.autGrid}>
                  <div className={styles.foto}>
                    <img
                      src={AlanCondutor}
                      alt="Alan Clever Condutor da Clever"
                    />
                  </div>
                  <div>
                    <div className={styles.eyebrow}>Quem conduz</div>
                    <h2>Alan Clever</h2>
                    <p>
                      Fundador da Clever Assessoria e Cobrança. Engenheiro de
                      formação, com pós em Direito Contratual e Processo Civil.
                      Depois de anos como gestor de escolas, transformou o
                      problema da inadimplência em um método firme, ético e
                      legal.
                    </p>
                    <div className={styles.nums}>
                      <div>
                        <b>+R$ 180 mi</b>em dívida educacional gerida
                      </div>
                      <div>
                        <b>Milhares</b>de contratos recuperados
                      </div>
                      <div>
                        <b>Brasil</b>todo atendido
                      </div>
                    </div>
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
                inadimplência da sua escola.
              </p>
              <a className={`${styles.btn} ${styles.gold}`} href="#isca">
                Fazer o diagnóstico gratuito
              </a>
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
          <div>
            WhatsApp (11) 95846-1450
            <br />
            @clevercobranca · @oalanclever
          </div>
        </div>
      </footer>
    </>
  );
}
