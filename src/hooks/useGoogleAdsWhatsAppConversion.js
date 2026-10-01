import { useEffect } from "react";

const GOOGLE_ADS_CONVERSION = "AW-10847571731/ykcgCJid6IsdEJOew7Qo";


export function useRastreamentoWhatsApp(pagina, adsConversao = GOOGLE_ADS_CONVERSION) {
  useEffect(() => {
    function onClick(evento) {
      const botao = evento.target.closest('[data-track="whatsapp"]');

      if (!botao) return;

      const secao = botao.dataset.secao || "nao_informada";

      if (typeof window.gtag === "function") {
        window.gtag("event", "clique_whatsapp", {
          secao,
          pagina,
        });

        if (adsConversao) {
          window.gtag("event", "conversion", {
            send_to: adsConversao,
          });
        }
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "clique_whatsapp",
        secao,
        pagina,
      });

      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", {
          content_name: secao,
          content_category: pagina,
        });
      }
    }

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [pagina, adsConversao]);
}
