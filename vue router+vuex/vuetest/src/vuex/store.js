import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  count: 0,
  list: []
}

var mutations = {
  inCount (state, data) {
    state.list = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
