import httpService from "./httpService"

export const userService = {
    login,
    signup,
    logout,
    getLoggedUser
}


 async function login(userCred:{email:string,password:string}) {
  try {
      const user = await httpService.post('auth/login',userCred)
      console.log('logged in', user)
      return user
  } catch (err) {
      if(err.response) {
      // TODO: make userMsg
      console.log('err:', err.response.data)
          throw err.response.data
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
            console.error('err:', err)
            throw err
    }

}
async function logout() {
    console.log('loggin out...', )
    try {
       await httpService.post('auth/logout')
        console.log('logged out', )
    } catch (err) {
        console.error('err:', err)
        throw err
    }

}
async function getLoggedUser(userId:string) {
    try {
       const userFound = await httpService.get(`user/${userId}`)
       console.log('userFound ?',userFound )
          return userFound
    } catch (err) {
        if(err.response) {
            // TODO: make userMsg
            console.error('err:', err)
                throw err
            }
    }

}
