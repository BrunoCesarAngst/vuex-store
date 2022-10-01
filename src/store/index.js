import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
