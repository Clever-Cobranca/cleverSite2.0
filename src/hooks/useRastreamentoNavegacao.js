import { useEffect } from "react";

const GOOGLE_ADS_CONVERSION = "AW-10847571731/tAaVCJWd6IsdEJOew7Qo";

export function useRastreamentoNavegacao(adsConversao = GOOGLE_ADS_CONVERSION) {
  useEffect(() => {
    function aoClicar(evento) {
      //Rastreia elemento que tenha o data-track=navegacao
      const elemento =
        evento.target instanceof Element
          ? evento.target.closest('[data-track="navegacao"]')
          : null;

      if (!elemento) return;

      //Destino da onde o clique o levaria
      const destino =
        elemento.getAttribute("href") || elemento.dataset.destino || "";

      const dados = {
        pagina_origem: window.location.pathname,
        destino,
        secao: elemento.dataset.secao || "nao_informada",
        rotulo: elemento.dataset.rotulo || elemento.textContent.trim(),
      };

      if (typeof window.gtag === "function") {
        window.gtag("event", "navegacao_interna", dados);
      }

      
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "navegacao_interna",
        ...dados,
      });
    }
    //Registrar acesso à pagina
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
    
    document.addEventListener("click", aoClicar, true);

    return () => {
      document.removeEventListener("click", aoClicar, true);
    };
  }, []);
}
