import { Home } from './views/Home/Home'
import { Main } from './views/Main/Main'
import { Genre } from './views/Genre/Genre'

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
        path: '/main/:songName=:songId',
        exact: true,
        component: Main
    }
]
