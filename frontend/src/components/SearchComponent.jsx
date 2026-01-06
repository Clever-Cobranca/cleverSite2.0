import { BiSearchAlt2 } from "react-icons/bi";

export function SearchComponent({ handleInputChange, children, bttnRef }) {
  return (
    <div className="w-full flex gap-1.5 items-center  min-w-[200px] border border-slate-200 rounded-md lg:mt-6 px-3 py-2 transition duration-300 ease  focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
      <button ref={bttnRef} type="submit" className="hover:cursor-pointer">
        <BiSearchAlt2 size={24} />
      </button>
      <input
        aria-label="Pesquisar notícias"
        onChange={(e) => handleInputChange(e.target.value)}
        name="barra-de-pesquisa"
        type="text"
        className="appearance-none bg-transparent w-[90%] placeholder:text-slate-400 text-slate-700 text-sm pb-0.5  focus:outline-none"
      />
      {children}
    </div>
  );
}
