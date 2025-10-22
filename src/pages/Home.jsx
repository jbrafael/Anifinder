import { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchAnimes(query = "naruto") {
    setLoading(true);
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=12`);
      const data = await res.json();
      setAnimes(data.data || []);
    } catch (error) {
      console.error("Erro ao buscar animes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAnimes(); 
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      fetchAnimes(search);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">
        🎬 AniFinder
      </h1>

      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar anime..."
          className="w-64 md:w-96 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-500 transition"
        >
          Buscar
        </button>
      </form>

      {loading ? (
        <p className="text-center text-gray-400">Carregando animes...</p>
      ) : animes.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {animes.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">Nenhum anime encontrado 😢</p>
      )}
    </div>
  );
}
