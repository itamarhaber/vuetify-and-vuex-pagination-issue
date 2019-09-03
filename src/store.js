import Vue from 'vue'
import Vuex from 'vuex'
import { PaginationPlugin, createResource } from 'vuex-pagination'

Vue.use(Vuex)
Vue.use(PaginationPlugin)

async function fetchPage(opts) {
  return {
    page: 1,
    pageSize: 10,
    totalItems: 3,
    data: [
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
    ],
  }
}

createResource('items', fetchPage)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
