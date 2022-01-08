import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export function createRouter () {
    return new VueRouter({
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
            },
        ]
    })
}
