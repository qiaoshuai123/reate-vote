import Home from '../views/Home'
import Dynamic from '../views/Dynamic'
import Data from '../views/Data'
import Chat from '../views/Chat'
import My from '../views/My'
import Release from '../views/Release'
import Register from '../views/Register'
import Vote from '../views/Vote'
import Join from '../views/Join'
let routers = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/join',
        component:Join
    },
    {
        path:'/dynamic',
        component:Dynamic
    },
    {
        path:'/data',
        component:Data
    },
    {
        path:'/chat',
        component:Chat
    },
    {
        path:'/vote',
        component:Vote
    },
    {
        path:'/release',
        component:Release
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/my',
        component:My
    },{
        path:'/',
        redirect:'/home'
    }
]
export default routers