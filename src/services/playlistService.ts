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
  try {
    return await httpService.post('playlist', playlist);
  } catch (err) {
    console.error('Error, playlistService.ts -> function: :', err);
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
async function getById(playlistId: string) {
  try {
    return await httpService.get(`playlist/${playlistId}`);
  } catch (err) {
    console.error('Error, playlistService.ts -> function: :', err);
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
async function update(playlistToUpdate: PlaylistType) {
  try {
    return await httpService.put(
      `playlist/${playlistToUpdate._id}`,
      playlistToUpdate
    );
  } catch (err) {
    console.error('Error, playlistService.ts -> function: :', err);
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
async function remove(playlistId: string) {
  try {
    await httpService.delete(`playlist/${playlistId}`);
  } catch (err) {
    console.error('Error, playlistService.ts -> function: :', err);
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
