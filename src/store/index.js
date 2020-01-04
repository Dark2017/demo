import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    Num: 0
  },
  mutations: {
    //增加count
    addCount (state, n = 0) {
      return (state.count += n)
    },
    //减少count
    reduceCount (state, n = 0) {
      return (state.count -= n)
    },
    //增加Num
    addNum (state, n = 0){
      return (state.Num += n)
    },
    clear (state) {
      state.count = 0
      state.Num = 0 
      return state
    }
  },
  actions: {
  },
  getters:{
    //增加或减少的总数
    totalCount(state){
      return(state.count + state.Num)
    }
  }

})
