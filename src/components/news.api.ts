import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=73ed881ac09540d098b8216cf7c24d37",
});

export async function getNews() {
  try {
    const { data } = await axiosClient.get("");
    return [null, data];
  } catch (error) {
    return [error];
  }
}
