import React from "react";

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


  return (
    <nav className="flex items-center justify-center space-x-2 my-8">
      {/* Botão Anterior */}
      <button
        onClick={() => {
          const prev = currentPage <= 1 ? totalPages : currentPage - 1;
          onPageChange(prev);
        }}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Anterior
      </button>

      {/* Números das Páginas */}
      <div className="flex space-x-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
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
        }}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Próximo
      </button>
    </nav>
  );
};

export default Pagination;
