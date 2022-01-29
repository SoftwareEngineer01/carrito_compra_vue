import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
  },
  mutations: {
    setProducto(state, productos) {
      state.productos = productos
      console.log(state.productos)
    },
    getProductos(state) { 
      return state.productos
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('api.json')
        const data = await response.json()
        commit('setProducto', data)
      } catch (err) {
        console.error(err)
      }
    }
  },
  modules: {
  }
})
