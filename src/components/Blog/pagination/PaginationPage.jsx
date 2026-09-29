import { useState } from "react";
import Pagination from "./Pagination";
import CardPosts from "../CardPosts";

const PaginationPage = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalItems = posts.length;

  // Lógica para filtrar os dados que serão exibidos
  // 1. Calcula os índices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // 2. "Fatia" os dados para exibir apenas os atuais
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5">
        {currentItems.map((post) => (
          <CardPosts key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default PaginationPage;
