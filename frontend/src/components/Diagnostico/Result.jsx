import styles from "../../Pages/Diagnostico/Diagnostico.module.css";
import { QUESTIONS } from "../../Pages/Diagnostico/diagnostico.config";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const cx = (...names) =>
  names
    .filter(Boolean)
    .map((name) => styles[name])
    .join(" ");

export function Result({
  result,
  quiz,
  goTo,
  formatPercentage,
  formatCurrency,
}) {
  const pdfRef = useRef(null);

  const handleGeneratePDF = useReactToPrint({
    contentRef: pdfRef,

    documentTitle: "diagnostico-clever",

    pageStyle: `
    @page {
      size: A4 portrait;
      margin: 0;
    }

    @media print {
      html,
      body {
        margin: 0 !important;
        padding: 0 !important;
        background: #0e2f3c !important;
      }
    }
  `,
  });

  return (
    <>
      <div ref={pdfRef} className={styles.pdfArea}>
        <div className={styles.resultCard}>
          <h2>Sua inadimplência real</h2>
          <div className={styles.comparison}>
            <div>
              <span>Inadimplência do mês</span>
              <strong>
                {result.monthlyRate
                  ? formatPercentage(result.monthlyRate)
                  : "-"}
              </strong>
              <small>O que você vê olhando só o mês.</small>
            </div>
            <div>
              <span>Inadimplência real (12 meses)</span>
              <strong>
                {result.realRate ? formatPercentage(result.realRate) : "-"}
              </strong>
              <small>Inclui quem saiu devendo no ano.</small>
            </div>
          </div>
          <div className={styles.punch}>
            {/* Refatorar */}
            {[
              [
                result.monthlyRate && result.realRate
                  ? `${result.rateMultiplier.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}×`
                  : "-",
                "vezes maior que a conta do mês",
              ],
              [
                result.inactiveDebtors.toLocaleString("pt-BR"),
                "devedores fora da conta do mês",
              ],
              [
                formatCurrency(result.outstandingAmount),
                "em aberto (estimado)",
              ],
            ].map(([value, text]) => (
              <div key={text}>
                <strong>{value}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.resultCard}>
          <h2>Sua cultura de inadimplência</h2>
          <div className={cx("level", quiz.level)}>{quiz.label}</div>
          <div className={styles.meter}>
            <div
              style={{
                width: `${(quiz.score / (QUESTIONS.length * 2)) * 100}%`,
                background: quiz.color,
              }}
            />
          </div>
          <div className={styles.recommendations}>
            {quiz.recommendations.length ? (
              <>
                <h3>Por onde começar</h3>
                {quiz.recommendations.slice(0, 3).map((item) => (
                  <div className={styles.recommendation} key={item.text}>
                    <i
                      className={
                        item.severity === 2 ? styles.redDot : styles.amberDot
                      }
                    />
                    {item.text}
                  </div>
                ))}
                <p>
                  Estes são os primeiros passos. O plano completo trata todos os
                  pontos, de ponta a ponta.
                </p>
              </>
            ) : (
              <p>
                {quiz.answeredCount
                  ? "Nenhuma brecha marcada. Rotina saudável."
                  : "As prioridades aparecem aqui depois da Etapa 2."}
              </p>
            )}
          </div>
        </div>

        <div className={styles.cta}>
          <h3>
            O diagnóstico é o primeiro passo. O plano é o que muda o número.
          </h3>
          <p>
            Você viu o tamanho real da inadimplência e os hábitos que a
            alimentam. Reverter isso de forma consistente pede um plano sob
            medida: régua de cobrança, política clara, contrato blindado e
            equipe preparada. A Clever conduz esse processo com a sua empresa,
            do diagnóstico à recuperação.
          </p>
          <a
            className={styles.ctaButton}
            href="https://wa.me/5511958461450"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a Clever no WhatsApp
          </a>
          <div className={styles.contact}>
            <a
              href="https://www.clevercobranca.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              clevercobranca.com.br
            </a>{" "}
            ·{" "}
            <a
              href="https://instagram.com/clevercobranca"
              target="_blank"
              rel="noopener noreferrer"
            >
              @clevercobranca
            </a>{" "}
            ·{" "}
            <a
              href="https://wa.me/5511958461450"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 95846-1450
            </a>
          </div>
        </div>
      </div>
      <div className={styles.navButtons}>
        <button className={cx("button", "ghost")} onClick={() => goTo(1)}>
          Voltar
        </button>
        <button className={styles.button} onClick={handleGeneratePDF}>
          Baixar Diagnóstico em PDF
        </button>
      </div>
    </>
  );
}
