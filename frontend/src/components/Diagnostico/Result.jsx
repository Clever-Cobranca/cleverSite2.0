import styles from "../../Pages/Diagnostico/Diagnostico.module.css";
import { QUESTIONS } from "../../Pages/Diagnostico/diagnostico.config";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

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
          <div className={styles.resultActions}>
            <a
              className={styles.ctaButton}
              href="https://wa.me/5511986037555"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a Clever no WhatsApp
            </a>
            <button
              className={cx("button", "primary", "pdfButton")}
              type="button"
              onClick={handleGeneratePDF}
            >
              Baixar Diagnóstico em PDF
            </button>
          </div>
          <div className={styles.contact}>
            <div>
              <strong>CLEVER</strong> · Assessoria Jurídica e Cobrança
              <br />
              <a href="https://www.clevercobranca.com.br" target="_blank" rel="noopener noreferrer">
                clevercobranca.com.br
              </a>
            </div>
            <div className={styles.contactDetails}>
              <a href="https://wa.me/5511986037555" target="_blank" rel="noopener noreferrer">
                WhatsApp (11) 98603-7555
              </a>
              <div className={styles.resultSocialLinks} aria-label="Redes sociais da Clever">
                <a href="https://www.instagram.com/oalanclever" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://web.facebook.com/clevercobranca?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://www.tiktok.com/@cleverassessoria1?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                <a href="https://www.youtube.com/@clevercobranca" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
                <a href="https://www.linkedin.com/company/clevercobranca/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navButtons}>
        <button className={cx("button", "ghost")} onClick={() => goTo(1)}>
          Voltar
        </button>
      </div>
    </>
  );
}
