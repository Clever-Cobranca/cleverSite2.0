import clsx from "clsx";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
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
        "flex items-center space-x-2 my-8 overflow-x-auto sm:justify-center pb-4 max-sm:w-full",
        { "justify-center": pages.length < 5 }
      )}
    >
      {/* Botão Anterior */}
      <button
        onClick={() => {
          const prev = currentPage <= 1 ? totalPages : currentPage - 1;
          onPageChange(prev);
          handleScrollToTop();
        }}
        disabled={currentPage === 1}
        className="px-3 max-sm:hidden py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Anterior
      </button>

      {/* Números das Páginas */}
      <div className="flex space-x-1">
        {pages.map((page) => (
          <button
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
      <button
        onClick={() => {
          const next = currentPage >= totalPages ? 1 : currentPage + 1;
          onPageChange(next);
          handleScrollToTop();
        }}
        disabled={currentPage === totalPages}
        className="max-sm:hidden px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Próximo
      </button>
    </nav>
  );
};

export default Pagination;
