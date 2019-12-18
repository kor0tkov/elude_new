import App from "../App";
import CityLp from '../components/city-lp'

export default [
    {
        name: 'index',
        path: '/',
        component: App
    },
    {
        name: 'city',
        path: '/:city',
        component: CityLp
    }
]
