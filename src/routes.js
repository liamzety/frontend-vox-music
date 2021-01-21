import { Home } from './views/Home/Home'
import { Main } from './views/Main/Main'
import { Genre } from './views/Genre/Genre'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/genre/:genre',
        component: Genre
    },
    {
        path: '/main/:songName=:songId',
        component: Main
    }
]