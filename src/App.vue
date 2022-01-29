<template>
  <div class="container">
    <h1>Carrito</h1>
    <hr>
    <div class="row">
      <Card
        v-for="producto of productos"
        :producto="producto"
        :key="producto.id"
      />
    </div>
  </div>

</template>

<script>

import {useStore} from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
import Card from './components/Card.vue'
export default {
  name: 'App',
  components: {
    Card,
  },

  setup() {

    const store = useStore()

    onMounted(() => {
      store.dispatch('fetchProducts')
    })

    const productos  = computed(() => store.state.productos)

    return {
      productos,
    }

  }
}

</script>