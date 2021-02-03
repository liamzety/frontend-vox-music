import httpService from './httpService';
import { PlaylistType } from '../types/Playlist';

export const playlistService = {
  query,
  update,
  remove,
  add,
  getById,
};

async function query() {
  const playlists = await httpService.get('playlist');
  return playlists;
}
async function add(playlist: PlaylistType) {
  return await httpService.post('playlist', playlist);
}
async function getById(playlistId: string) {
  return await httpService.get(`playlist/${playlistId}`);
}
async function update(playlistToUpdate: PlaylistType) {
  return await httpService.put(
    `playlist/${playlistToUpdate._id}`,
    playlistToUpdate
  );
}
function remove(playlistId: string) {
  httpService.delete(`playlist/${playlistId}`);
}
