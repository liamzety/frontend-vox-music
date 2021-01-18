import { Home } from './views/Home'
import { Main } from './views/Main'
import { Genre } from './views/Genre'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/:genre',
        component: Genre
    },
    {
        path: '/main/:songName=:songId',
        component: Main
    }
]