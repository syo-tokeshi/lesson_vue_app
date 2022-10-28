import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[]
  },
  getters: {
  },
    mutations: {
      addlist(state, payload) {
        state.lists.push({title: payload.title,card:[]})
      }
    },
    actions: {
      addlist({commit}, payload) {
        commit('addlist', payload);
      }
    },
  modules: {
  }
})
