import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Exibe um documento HTML isolado do CSS do site.
 *
 * O arquivo deve estar dentro da pasta `public` do projeto Vite.
 */
export default function LegalDocumentFrame({ src, title }) {
  const iframeRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const [height, setHeight] = useState("100vh");

  const updateHeight = useCallback(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    try {
      const documentElement = iframe.contentDocument?.documentElement;
      const body = iframe.contentDocument?.body;

      if (!documentElement || !body) return;

      const contentHeight = Math.max(
        documentElement.scrollHeight,
        documentElement.offsetHeight,
        body.scrollHeight,
        body.offsetHeight,
      );

      if (contentHeight > 0) {
        setHeight(`${contentHeight}px`);
      }
    } catch (error) {
      console.error(`Não foi possível ajustar a altura de ${title}:`, error);
    }
  }, [title]);

  const handleLoad = useCallback(() => {
    updateHeight();

    const iframeDocument = iframeRef.current?.contentDocument;
    const documentElement = iframeDocument?.documentElement;

    resizeObserverRef.current?.disconnect();

    if (documentElement && "ResizeObserver" in window) {
      resizeObserverRef.current = new ResizeObserver(updateHeight);
      resizeObserverRef.current.observe(documentElement);
    }
  }, [updateHeight]);

  useEffect(() => {
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserverRef.current?.disconnect();
    };
  }, [updateHeight]);

  return (
    <main className="w-full bg-neutral-500">
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        onLoad={handleLoad}
        className="block w-full border-0"
        style={{ height }}
        loading="eager"
      />
    </main>
  );
}
