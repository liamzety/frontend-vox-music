import { Home } from './views/Home'
import { Player } from './views/Player'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/player/:songName=:songId',
        component: Player
    }
]