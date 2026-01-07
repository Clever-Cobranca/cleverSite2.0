import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // useLayoutEffect executa antes da pintura do navegador
    // Rola a janela
    window.scrollTo(0, 0);
    
    // Força o scroll em todos os elementos possíveis
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
      document.documentElement.scrollLeft = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
      document.body.scrollLeft = 0;
    }
    
    // Rola o elemento #root se ele tiver scroll
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.scrollTop = 0;
      rootElement.scrollLeft = 0;
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
