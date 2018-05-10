import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    counter : 0
  },
  getters : {
    getCounter : (state) => {
      return state.counter
    }
  },
  mutations : {
    addCounter : (state, payload) => {
      return state.counter += payload
    },
    subCounter : (state, payload) => {
      return state.counter += payload
    }
  }
})
