import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
    return new Router({
        mode: 'hash',
        routes: [
            {
                path: '/',
                name: 'index',
                component: () => import('../src/views/index').then((m) => m.default || m),
                meta:{
                    title:'home'
                },
                children:[]
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../src/views/user/index').then((m) => m.default || m)
            }
        ]
    })
}
