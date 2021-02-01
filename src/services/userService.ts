import httpService from './httpService';

export const userService = {
  login,
  signup,
  logout,
  getLoggedUser,
  getInitials,
};

async function login(userCred: { email: string; password: string }) {
  try {
    const user = await httpService.post('auth/login', userCred);
    return user;
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.msg, type: 'alert' };
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
    console.log('user:', user);
    return user;
  } catch (err) {
    if (err.response) {
      console.log('err?', err.response);
      const composedErr = { msg: err.response.data.msg, type: 'error' };
      throw composedErr;
    }
  }
}
async function logout() {
  try {
    await httpService.post('auth/logout');
  } catch (err) {
    if (err.response) {
      const composedErr = { msg: err.response.data.msg, type: 'error' };
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
      const composedErr = { msg: err.response.data.msg, type: 'error' };
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
