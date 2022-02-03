import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito : {}
  },
  mutations: {
    setProducto(state, productos) {
      state.productos = productos
      console.log(state.productos)
    },
    // Agrega un producto al carrito
    setCarrito(state, carrito) {
      state.carrito[carrito.id] = carrito
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
    },

    agregarAlCarrito({ commit, state }, producto) {
      // state.carrito.hasOwnProperty(producto.id) ? state.carrito[producto.id]++ : state.carrito[producto.id] = 1
      state.carrito.hasOwnProperty(producto.id) ? producto.cantidad = state.carrito[producto.id].cantidad + 1 : producto.cantidad = 1
      commit('setCarrito', producto)
    }
  },

  getters : {
    totalCantidad(state) {
      let total = 0
      for (let key in state.carrito) {
        total += state.carrito[key].cantidad
      }
      return total
    }
  },

  modules: {
  }
})
