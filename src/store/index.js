import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    Num: 0
  },
  mutations: {
    addCount (state, n = 0) {
      return (state.count += n)
    },
    reduceCount (state, n = 0) {
      return (state.count -= n)
    },
    addNum (state, n = 0){
      return (state.Num += n)
    }
  },
  actions: {
  },
  getters:{
    totalCount(state){
      return(state.count + state.Num)
    }
  }

})
