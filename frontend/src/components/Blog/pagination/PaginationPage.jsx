import { useState } from "react";
import Pagination from "./Pagination";
import CardPosts from "../CardPosts";

const PaginationPage = ({ posts, setShowPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = posts.length;

  // Lógica para filtrar os dados que serão exibidos
  // 1. Calcula os índices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // 2. "Fatia" os dados para exibir apenas os atuais
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="w-full flex flex-wrap gap-3 justify-center">
        {currentItems.map((post) => (
          <CardPosts key={post.id} post={post} setShowPosts={setShowPosts} />
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
