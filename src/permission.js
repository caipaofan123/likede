import router from '@/router'
import store from '@/store'
router.beforeEach((to,from,next)=>{
    const token = store.state.user.token
    const wightlist=['/login','/404']
    const isCludes=wightlist.includes(to.path)
    if (token) {
        // if(!store.state.user.userId){
        //     store.dispatch('user/getUserInfo')
        // }
        if (to.path==='/login') {
            next('/')
        }else{
            next()
        }
    }else{
        if (isCludes) {
            next()
        }else{
            next('/login')
        }
    }
})