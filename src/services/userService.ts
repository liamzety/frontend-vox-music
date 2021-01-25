import httpService from "./httpService"

export const userService = {
    login,
    signup,
    logout,
    getLoggedUser,
    getInitials
}


 async function login(userCred:{email:string,password:string}) {
  try {
      const user = await httpService.post('auth/login',userCred)
      console.log('logged in', user)
      return user
  } catch (err) {
      if(err.response) {
      const composedErr = {msg: err.response.data ,type:'alert'}
          throw composedErr
      }
  }
 }
interface signupProps {
    name: string,
    email: string,
    password: string,
    // imgUrl:string
}
 async function signup(userCred:signupProps) {
  try {
     const user = await httpService.post('auth/signup',userCred)
    return user
    } catch (err) {
        if(err.response) {
            const composedErr = {msg: err.response.data ,type:'error'}
                throw composedErr
            }
  }

}
async function logout() {
    console.log('loggin out...', )
    try {
       await httpService.post('auth/logout')
        console.log('logged out', )
    } catch (err) {
        if(err.response) {
            const composedErr = {msg: err.response.data ,type:'error'}
                throw composedErr
            }
    }

}
async function getLoggedUser(userId:string) {
    try {
       const userFound = await httpService.get(`user/${userId}`)
       console.log('userFound ?',userFound )
          return userFound
    } catch (err) {
        if(err.response) {
            const composedErr = {msg: err.response.data ,type:'error'}
                throw composedErr
            }
    }

}
function getInitials(fullName:string) {
    const [firstName, lastName] = fullName.split(' ');
    let initials = firstName.charAt(0).toUpperCase();
    if (lastName) initials += lastName.charAt(0).toUpperCase();
    return initials;
}