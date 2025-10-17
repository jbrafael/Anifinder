import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() !== "") onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-4 bg-gray-800">
      <input
        type="text"
        placeholder="Buscar anime..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-1/2 p-2 rounded-l-lg text-black"
      />
      <button type="submit" className="bg-red-600 px-4 py-2 rounded-r-lg hover:bg-red-700">
        Buscar
      </button>
    </form>
  );
}
