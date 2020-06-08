import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: "home",
  },
  getters: {
    getActive(state) {
      return state.isActive
    },
  },
  mutations: {
    goto(state, page) {
      state.isActive = page
    },
  },
  actions: {},
  modules: {},
})
