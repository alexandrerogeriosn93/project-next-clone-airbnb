import { IconSearch } from "@/assets/icons";

const SearchBar = () => {
  return (
    <div className="mx-auto flex w-full max-w-2xl items-center overflow-clip rounded-full border border-gray-200 px-3 py-2 shadow-lg shadow-gray-200 dark:shadow-none">
      <input
        type="text"
        placeholder="Digite a sua pesquisa"
        className="w-full px-3 focus:outline-none"
      />
      <button className="rounded-full bg-[#FF5A5F] p-2">
        <IconSearch aria-label="Pesquisa" size={32} color="white" />
      </button>
    </div>
  );
};

export default SearchBar;
