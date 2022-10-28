import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem("trello-lists")

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists):[
      {
        title: "neko",
        cards: [
          {body: "wanko"},
          {body: "salu"},
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ]
  },
  getters: {
  },
    mutations: {
      addlist(state, payload) {
        state.lists.push({title: payload.title,card:[]})
      },
      addCardToList(state, payload) {
        state.lists[payload.listIndex].cards.push({ body: payload.body })
      },
      removelist(state, payload) {
        state.lists.splice(payload.listindex,1)
      },
    },
    actions: {
      addlist({commit}, payload) {
        commit('addlist', payload);
      },
      removelist({commit}, payload) {
        commit('removelist', payload);
      },
      addCardToList({commit}, payload) {
        commit('addCardToList', payload);
      }
    },
  modules: {
  }
})

// mutationが呼ばれたら実行される
store.subscribe((mutation,state) => {
  localStorage.setItem("trello-lists",JSON.stringify(state.lists))
})

export default store