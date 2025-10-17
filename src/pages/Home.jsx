import { useEffect, useState } from "react";
import { fetchAnimes } from "../services/api";
import AnimeCard from "../components/AnimeCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [query, setQuery] = useState("one piece");

  useEffect(() => {
    fetchAnimes(query).then(setAnimes);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SearchBar onSearch={setQuery} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {animes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}
