import IndexView from "../views/index"
import CityView from '../views/city'

export default [
    {
        name: 'index',
        path: '/',
        component: IndexView
    },
    {
        name: 'city',
        path: '/:city',
        component: CityView
    }
]
