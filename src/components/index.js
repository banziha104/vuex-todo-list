import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state : {
    todolist : [
      { todo : "영화보기", done:false}
    ]
  },
  mutations : {
    [Constant.ADD_TODO] :
  }
})
