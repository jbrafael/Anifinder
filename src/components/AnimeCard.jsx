export default function AnimeCard({ anime }) {
  return (
    <div className="bg-gray-800 p-3 rounded-lg hover:scale-105 transition-transform cursor-pointer">
      <img src={anime.images.jpg.image_url} alt={anime.title} className="rounded-md w-full h-64 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{anime.title}</h2>
      <p className="text-sm text-gray-400">Score: {anime.score || "N/A"}</p>
    </div>
  );
}
