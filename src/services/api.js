const BASE_URL = "https://api.jikan.moe/v4";

export async function fetchAnimes(query = "naruto") {
  const response = await fetch(`${BASE_URL}/anime?q=${query}&limit=12`);
  const data = await response.json();
  return data.data;
}
