import clsx from "clsx";
import { Link } from "react-router";

const pageHref = (page) => page === 1 ? "/blog" : `/blog/pagina/${page}`;

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  usePageLinks = false,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Gera um array com os números das páginas: [1, 2, 3...]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  function handleScrollToTop() {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.scrollTop = 100;
      rootElement.scrollLeft = 0;
    }
  }

  return (
    <nav
      className={clsx(
        "flex items-center space-x-2 my-8 overflow-x-auto justify-center pb-4 max-sm:w-full",
        { "justify-center": pages.length < 5 }
      )}
    >
      {/* Botão Anterior */}
      {usePageLinks ? (
        currentPage > 1 && <Link to={pageHref(currentPage - 1)} className="px-3 max-sm:hidden py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Anterior</Link>
      ) : (
        <button
          onClick={() => {
            onPageChange(currentPage - 1);
            handleScrollToTop();
          }}
          disabled={currentPage === 1}
          className="px-3 max-sm:hidden py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Anterior
        </button>
      )}

      {/* Números das Páginas */}
      <div className="flex space-x-1">
        {pages.map((page) => (
          usePageLinks ? <Link
            key={page}
            to={pageHref(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              currentPage === page
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {page}
          </Link> : <button
            key={page}
            onClick={() => {
              onPageChange(page);
              handleScrollToTop();
            }}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
              currentPage === page
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Botão Próximo */}
      {usePageLinks ? (
        currentPage < totalPages && <Link to={pageHref(currentPage + 1)} className="max-sm:hidden px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Próximo</Link>
      ) : (
        <button
          onClick={() => {
            onPageChange(currentPage + 1);
            handleScrollToTop();
          }}
          disabled={currentPage === totalPages}
          className="max-sm:hidden px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Próximo
        </button>
      )}
    </nav>
  );
};

export default Pagination;
