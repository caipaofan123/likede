import {login} from '@/api/user'
export default  {
  namespaced: true,
  state: {
    token:'',
    clientToken:''
  },
  mutations: {
    setToken(state,payload){
      state.token = payload
    },
    setClientToken(state,payload){
      state.clientToken = payload
    }
  },
  actions: {
    async getToken(context,payload){
      const res = await login(payload)
      console.log(res)
      context.commit('setToken',res.data.token)
    },
    getClientToken(context,payload){
      context.commit('setClientToken',payload)
    }
  }
}
