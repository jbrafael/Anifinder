import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <Link
      to={`/anime/${anime.mal_id}`}
      className="bg-gray-800 hover:bg-gray-700 transition rounded-xl overflow-hidden shadow-md group"
    >
      <img
        src={anime.images?.jpg?.image_url}
        alt={anime.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-1 truncate">{anime.title}</h2>
        <p className="text-sm text-gray-400">
          {anime.type || "Tipo desconhecido"} • ⭐ {anime.score || "N/A"}
        </p>
      </div>
    </Link>
  );
}
