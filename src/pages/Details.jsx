import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnime() {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do anime:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnime();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-lg">Carregando detalhes...</p>
      </div>
    );
  }

  if (!anime) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-lg">Anime não encontrado 😢</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <div className="max-w-5xl w-full px-4">
        <Link
          to="/"
          className="text-blue-400 hover:underline mb-6 inline-block text-sm"
        >
          ← Voltar
        </Link>

        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
          <img
            src={anime.images?.jpg?.large_image_url}
            alt={anime.title}
            className="w-64 h-96 object-cover rounded-xl"
          />
          <div>
            <h1 className="text-3xl font-bold mb-3">{anime.title}</h1>
            <p className="text-gray-300 mb-4 text-justify">
              {anime.synopsis || "Sem sinopse disponível."}
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              {anime.genres?.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="bg-blue-600/30 border border-blue-400 px-3 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p>
              <strong>Episódios:</strong> {anime.episodes || "N/A"}
            </p>
            <p>
              <strong>Status:</strong> {anime.status || "Desconhecido"}
            </p>
            <p>
              <strong>Avaliação:</strong> {anime.score || "N/A"}
            </p>
            <p>
              <strong>Tipo:</strong> {anime.type || "N/A"}
            </p>
            <p>
              <strong>Data de Lançamento:</strong>{" "}
              {anime.aired?.string || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
