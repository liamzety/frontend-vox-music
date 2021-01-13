import { Home } from './views/Home'
import { Main } from './views/Main'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/main/:songName=:songId',
        component: Main
    }
]