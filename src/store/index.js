import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: "home",
    projects: [
      {
        id: 1,
        name: "Esele ",
        description: " A web app for POS business",
        website: "esele.netlify.app",
        github: "https://github.com/whytepeter/sele",

        img: "esele.png",
      },
      {
        id: 2,
        name: "Calculator ",
        description: " A web calculator app",
        website: "https://whytepeter.github.io/whyte-calculator/",
        github: "https://github.com/whytepeter/whyte-calculator",
        img: "whyte-cal-2.jpg",
      },
    ],
  },
  getters: {
    getActive(state) {
      return state.isActive
    },
    getProjects(state) {
      return state.projects
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
