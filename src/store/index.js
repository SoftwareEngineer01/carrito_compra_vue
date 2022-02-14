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
    },
    // Vacia el carrito
    vaciarCarrito(state) {
      state.carrito = {}
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
    // totalCantidad(state) {
    //   let total = 0
    //   for (let key in state.carrito) {
    //     total += state.carrito[key].cantidad
    //   }
    //   return total
    // },
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    },
    totalPrecios(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0).toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      })
    },
  },

  modules: {
  }
})
