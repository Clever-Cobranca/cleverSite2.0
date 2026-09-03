import { useMemo, useState } from "react";
import styles from "./Diagnostico.module.css";
import {
  FORM_ENDPOINT,
  INITIAL_FINANCIAL_DATA,
  INITIAL_LEAD,
  QUESTIONS,
  QUIZ_OPTIONS,
  TABS,
} from "./diagnostico.config";
import {
  calculateFinancialResult,
  createLeadPayload,
  evaluateQuiz,
  formatCurrency,
  formatIntegerInput,
  formatMoneyInput,
  formatPercentage,
  toNumber,
  validateLead,
} from "./diagnostico.utils";
import { Header } from "../../components/Header/Header";
import { StepHeading } from "../../components/Diagnostico/StepHeading";
import { NumberField } from "../../components/Diagnostico/NumberField";
import { Result } from "../../components/Diagnostico/Result";

const cx = (...names) =>
  names
    .filter(Boolean)
    .map((name) => styles[name])
    .join(" ");

export default function Diagnostico() {
  const [tab, setTab] = useState(0);
  const [financialData, setFinancialData] = useState(INITIAL_FINANCIAL_DATA);
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [formData, setFormData] = useState(INITIAL_LEAD);
  const [error, setError] = useState("");
  const [captured, setCaptured] = useState(false);
  const [sending, setSending] = useState(false);

  const result = useMemo(
    () => calculateFinancialResult(financialData),
    [financialData],
  );
  const quiz = useMemo(() => evaluateQuiz(answers), [answers]);
  console.log(result);

  //Navegação entre as etapas do diagnóstico
  const goTo = (next) => {
    if ((next === 2) & (quiz.answeredCount < QUESTIONS.length)) {
      return;
    }
    setTab(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Atualizar os dados financeiros da Etapa 1 "Inadimplência" com base no campo alterado(Evitando digite letras ou simbolos)
  const updateFinancialData = (field, isFloat) => (value) => {
    const formattedValue = isFloat
      ? formatMoneyInput(value)
      : formatIntegerInput(value); //Função para formatar value
    setFinancialData((current) => ({
      ...current,
      [field]: formattedValue,
    }));
  };

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

  const selectAnswer = (questionIndex, value) =>
    setAnswers((current) =>
      current.map((answer, index) =>
        index === questionIndex ? value : answer,
      ),
    );

  // Função para validar se todas as perguntas da Etapa 2 "Cultura" foram respondidas antes de ir para a próxima etapa
  const handleQuizNext = () => {
    if (quiz.answeredCount < QUESTIONS.length) {
      setError(
        "O formulário precisa ser preenchido completamente para ver o resultado.",
      );
      return;
    }
    goTo(2);
  };

  const submit = async (event) => {
    event.preventDefault();
    const validationError = validateLead(formData);

    if (validationError) return setError(validationError);
    if (!FORM_ENDPOINT) {
      return setError(
        "O envio do formulário não está configurado. Entre em contato com o suporte +55 11 96034-0341.",
      );
    }

    setError("");
    setSending(true);
    
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createLeadPayload(formData, result, quiz)),
      });
    } catch (error) {
      console.log(error);
      /* The original form also unlocks the local result if delivery fails. */
      return setError("Falha ao enviar diagnóstico, tente novamente");
    } finally {
      setSending(false);
    }

    setCaptured(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.wrap}>
          <h1>Diagnóstico Clever de Inadimplência</h1>
          <p className={styles.lead}>
            Em poucos minutos, a sua empresa descobre a inadimplência real, o
            valor em aberto e os hábitos que alimentam o problema. No fim, um
            plano de prioridades.
          </p>
          <div className={styles.tabs} role="tablist">
            {TABS.map((title, index) => (
              <button
                key={title}
                type="button"
                role="tab"
                aria-selected={tab === index}
                className={cx("tab", tab === index && "active")}
                onClick={() => goTo(index)}
              >
                <span className={styles.tn}>Etapa {index + 1}</span>
                <span className={styles.tt}>{title}</span>
              </button>
            ))}
          </div>

          {/* Etapa 1: Inadimplência do mês */}

          <section className={cx("section", tab === 0 && "visible")}>
            <div className={cx("card", "alert")}>
              <h3>Onde a conta costuma errar</h3>
              <p>
                Olhar só a inadimplência do mês esconde os clientes que saíram
                devendo. Somando esses casos, a inadimplência real aparece, e
                costuma ser bem maior.
              </p>
            </div>
            <div className={styles.card}>
              <StepHeading
                number="1"
                title="Inadimplência do mês"
                tag="o que você vê hoje"
              />
              <NumberField
                label="Parcelas que já venceram neste mês"
                hint="Some só as parcelas com vencimento até hoje."
                prefix="R$"
                value={financialData.overdueThisMonth}
                onChange={updateFinancialData("overdueThisMonth")}
              />
              <NumberField
                label="Valor vencido e não pago neste mês"
                hint="Do que já venceu, quanto não entrou."
                prefix="R$"
                value={financialData.unpaidThisMonth}
                onChange={updateFinancialData("unpaidThisMonth", true)}
              />
              <div className={styles.derived}>
                <span>Inadimplência do mês</span>
                <strong>
                  {toNumber(financialData.overdueThisMonth)
                    ? formatPercentage(result.monthlyRate)
                    : "-"}
                </strong>
              </div>
            </div>
            <div className={styles.card}>
              <StepHeading
                number="2"
                title="Inadimplência real"
                tag="últimos 12 meses"
              />
              <NumberField
                label="Total de clientes nos últimos 12 meses"
                value={financialData.totalCustomers}
                onChange={updateFinancialData("totalCustomers")}
              />
              <NumberField
                label="Clientes que saíram devendo"
                hint="Cancelados e encerrados com débito."
                value={financialData.inactiveDebtors}
                onChange={updateFinancialData("inactiveDebtors")}
              />
              <NumberField
                label="Clientes ativos hoje com parcela em atraso"
                value={financialData.activeDebtors}
                onChange={updateFinancialData("activeDebtors")}
              />
              <div className={styles.derived}>
                <span>Total de devedores no período</span>
                <strong>{result.debtorCount.toLocaleString("pt-BR")}</strong>
              </div>
              <div className={cx("derived", "derivedSpacing")}>
                <span>Inadimplência real (12 meses)</span>
                <strong>
                  {toNumber(financialData.totalCustomers)
                    ? formatPercentage(result.realRate)
                    : "-"}
                </strong>
              </div>
            </div>
            <div className={styles.card}>
              <StepHeading number="3" title="Valor em aberto" />
              <NumberField
                label="Valor médio em aberto por devedor"
                hint="Parcelas em aberto mais a multa contratual."
                prefix="R$"
                value={financialData.averageDebt}
                onChange={updateFinancialData("averageDebt", true)}
              />
              <div className={styles.derived}>
                <span>Valor total em aberto (estimado)</span>
                <strong>{formatCurrency(result.outstandingAmount)}</strong>
              </div>
            </div>
            <div className={styles.navButtons}>
              <span />
              <button
                className={cx("button", "primary")}
                onClick={() => goTo(1)}
              >
                Próxima etapa: Cultura
              </button>
            </div>
          </section>
          {/* Etapa 2: Cultura */}
          <section className={cx("section", tab === 1 && "visible")}>
            <div className={cx("card", "alert")}>
              <h3>A inadimplência também é cultural</h3>
              <p>
                Cada exceção aberta e cada atraso sem contato ensina o cliente a
                pagar quando quiser. Responda com sinceridade.
              </p>
            </div>
            <p className={styles.hint}>
              Para cada item, marque com que frequência isso acontece na sua
              empresa hoje.
            </p>
            <div className={styles.card}>
              {QUESTIONS.map(({ text }, index) => (
                <div className={styles.question} key={text}>
                  <div className={styles.questionText}>
                    <span>{index + 1}</span>
                    {text}
                  </div>
                  <div className={styles.options}>
                    {QUIZ_OPTIONS.map(({ value, label }) => (
                      <label
                        className={
                          answers[index] === value
                            ? styles[`selected${value}`]
                            : ""
                        }
                        key={value}
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={value}
                          checked={answers[index] === value}
                          onChange={() => selectAnswer(index, value)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.error} role="alert">
              {error}
            </div>
            <div className={styles.navButtons}>
              <button className={cx("button", "ghost")} onClick={() => goTo(0)}>
                Voltar
              </button>
              <button
                className={cx("button", "primary")}
                onClick={handleQuizNext}
              >
                Ver o resultado
              </button>
            </div>
          </section>
          {/* Etapa 3: Resultado */}
          <section className={cx("section", tab === 2 && "visible")}>
            {!captured ? (
              <div className={styles.capture}>
                <div className={styles.eyebrow}>
                  Seu diagnóstico está pronto
                </div>
                <h2>Para onde enviamos o seu resultado e o e-book grátis?</h2>
                <p>
                  Preencha para ver o resultado completo agora e receber o
                  e-book “O Código da Cobrança” no seu e-mail.
                </p>
                <form onSubmit={submit} noValidate>
                  <div className={styles.formGrid}>
                    <label>
                      Nome
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome"
                      />
                    </label>
                    <label>
                      Seu melhor e-mail
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="voce@empresa.com.br"
                      />
                    </label>
                    <label>
                      WhatsApp com DDD
                      <input
                        type="text"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="(11) 90000-0000"
                      />
                    </label>
                    <label>
                      Sua empresa
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nome da empresa"
                      />
                    </label>
                  </div>
                  <label className={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="conteudos"
                      checked={formData.conteudos}
                      onChange={handleInputChange}
                    />
                    Quero receber conteúdos educacionais da Clever.
                  </label>
                  <div className={styles.error} role="alert">
                    {error}
                  </div>
                  <button
                    disabled={sending}
                    className={cx("button", "primary", "fullButton")}
                    type="submit"
                  >
                    {sending
                      ? "Enviando..."
                      : "Ver meu resultado e receber o e-book"}
                  </button>
                  <div className={styles.privacy}>
                    Seus dados são usados só para enviar o material e o contato
                    da Clever, conforme a LGPD.
                  </div>
                </form>
                <div className={styles.navButtons}>
                  <button
                    className={cx("button", "ghost")}
                    type="button"
                    onClick={() => goTo(1)}
                  >
                    Voltar
                  </button>
                  <span />
                </div>
              </div>
            ) : (
              <Result
                result={result}
                quiz={quiz}
                goTo={goTo}
                formatCurrency={formatCurrency}
                formatPercentage={formatPercentage}
              />
            )}
          </section>
          <p className={styles.lgpd}>
            Os cálculos do diagnóstico rodam no seu navegador. Seus dados de
            contato só são enviados quando você preenche o formulário, com o seu
            aceite, para receber o material (LGPD).
          </p>
          <footer className={styles.footer}>
            <strong>
              <b>Alan Clever</b> · Clever Assessoria e Cobrança
            </strong>
            <br />
            Método Clever
          </footer>
        </div>
        <div className={styles.printFooter}>
          Alan Clever · Clever Assessoria e Cobrança
        </div>
      </main>
    </>
  );
}
