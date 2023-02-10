import React from 'react'
import Loadable from 'react-loadable'
 
const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Loadable({
            loader: () => import('../pages/home'),
            loading(){
                return  <div>loading...</div>
            },
        }),
    },
]

export default routes