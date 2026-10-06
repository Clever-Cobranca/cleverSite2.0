import { useLayoutEffect } from "react";
import { Link } from "react-router";

export default function NotFound() {
  useLayoutEffect(() => {
    let robots = document.head.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content");
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex";

    return () => {
      if (previous === null || previous === undefined) robots.remove();
      else robots.content = previous;
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-orange-primary">404</p>
      <h1 className="mt-4 text-3xl font-semibold">Página não encontrada</h1>
      <p className="mt-3 text-lg">O endereço acessado não existe ou foi removido.</p>
      <Link to="/" className="mt-8 rounded-md bg-orange-primary px-6 py-3 text-white">
        Voltar para o início
      </Link>
    </main>
  );
}
