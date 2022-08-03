import {login} from '@/api/user'
export default  {
  namespaced: true,
  state: {
    token:'',
    clientToken:'',
    userId:'',
    userInfo:{}

  },
  mutations: {
    setToken(state,payload){
      state.token = payload
      // state.userId = payload2
    },
    setClientToken(state,payload){
      state.clientToken = payload
    }
  },
  actions: {
    async getToken(context,payload){
      const res = await login(payload)
      // const res1 = await getInfo(res.data.userId)
      // console.log(res)
      // console.log(res1)
      context.commit('setToken',res.data.token)
    },
    // async getUserInfo(context,payload){
      
     
    //   // context.commit('setUserInfo',res.data.token,res.data.userId)
    // },
    getClientToken(context,payload){
      context.commit('setClientToken',payload)
    }
  }
}
