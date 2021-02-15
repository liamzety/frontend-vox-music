import axios from 'axios';

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

export const youtubeService = {
  get,
};
async function get(query: string): Promise<any> {
  if (!query) return;
  try {
    const res = await axios.get(
      `${SEARCH_URL}?videoCategoryId=10&part=id,snippet&videoEmbeddable=true&type=video&maxResults=5&q=${query}&key=${API_KEY}`
    );
    return res.data;
  } catch (err) {
    console.dir(err);
    throw err;
  }
}
