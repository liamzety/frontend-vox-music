import httpService from './httpService';

export const userService = {
  login,
  signup,
  logout,
  getLoggedUser,
  updateUser,
  getInitials,
  favouritePlaylist,
  unFavouritePlaylist,
  getFavouritePlaylists,
};

async function login(userCred: { email: string; password: string }) {
  try {
    const user = await httpService.post('auth/login', userCred);
    return user;
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'alert' };
      throw composedErr;
    }
  }
}
interface signupProps {
  name: string;
  email: string;
  password: string;
  profile_img: string;
}
async function signup(userCred: signupProps) {
  try {
    const user = await httpService.post('auth/signup', userCred);
    return user;
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
async function logout() {
  try {
    await httpService.post('auth/logout');
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
async function updateUser(userId: string, playlist_id: string) {
  try {
    const userUpdated = await httpService.put(`user/${userId}`, {
      playlist_id,
    });
    return userUpdated;
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
async function getLoggedUser(userId: string) {
  try {
    const userFound = await httpService.get(`user/${userId}`);
    return userFound;
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
function getInitials(fullName: string) {
  const [firstName, lastName] = fullName.split(' ');
  let initials = firstName.charAt(0).toUpperCase();
  if (lastName) initials += lastName.charAt(0).toUpperCase();
  return initials;
}

async function getFavouritePlaylists(userId: string) {
  console.log('userid', userId);
  try {
    const favouritePlaylistsFound = await httpService.get(
      `favourite/user_playlists/${userId}`
    );
    return favouritePlaylistsFound;
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
async function unFavouritePlaylist(userId: string, playlist_id: string) {
  console.log('playlist_id', playlist_id);
  try {
    await httpService.delete(`favourite/user_playlists/${userId}`, {
      playlist_id,
    });
    return Promise.resolve();
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
async function favouritePlaylist(userId: string, playlist_id: string) {
  try {
    await httpService.post(`favourite/user_playlists/${userId}`, {
      playlist_id,
    });
    return Promise.resolve();
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.message, type: 'error' };
      throw composedErr;
    }
  }
}
