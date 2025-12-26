import { BiSearchAlt2 } from "react-icons/bi";

export function SearchComponent() {
  return (
    <div class="w-full flex gap-1.5 items-center max-w-[264px] min-w-[200px] border border-slate-200 rounded-md lg:mt-6 px-3 py-2 transition duration-300 ease  focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
      <button type="button" className="hover:cursor-pointer">
        <BiSearchAlt2 size={24} />
      </button>
      <input
        aria-label="Pesquisar notícias"
        name="barra-de-pesquisa"
        type="text"
        className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm pb-0.5  focus:outline-none"
      />
    </div>
  );
}
