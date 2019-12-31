import IndexView from "../views/index"

export default [
    {
        name: 'index',
        path: '/',
        component: IndexView
    },
    {
        name: 'city',
        path: '/:city',
        component: IndexView
    }
]
