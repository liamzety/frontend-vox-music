import { Home } from './views/Home/Home'
import { Main } from './views/Main/Main'
import { Genre } from './views/Genre/Genre'
import { Login } from './views/Login/Login'
import { Signup } from './views/Signup/Signup'

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/genre/:genre?',
        exact: false,
        component: Genre
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: '/signup',
        exact: true,
        component: Signup
    },
    {
        path: '/main/:playlistName=:playlistId',
        exact: true,
        component: Main
    }
]
