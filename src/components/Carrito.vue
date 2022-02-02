<template>
    <div class="my-5">
      <h4>Carrito de compras</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody id="items">
            <Item 
                v-for="item in items"
                :item="item"
                :key="item.id"
            />
        </tbody>
        <tfoot>
          <tr id="footer">
            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
          </tr>
        </tfoot>
      </table>
    </div>
</template>

<script>

import {useStore} from 'vuex'
import {computed} from 'vue'
import Item from './Item.vue'

export default {

    components: {
        Item,
    },

    setup() {

        const store = useStore()

        const items = computed(() => {
            return store.state.carrito
        })

        // const total = computed(() => {
        //     return store.state.carrito.total
        // })

        // const vaciar = () => {
        //     store.dispatch('vaciarCarrito')
        // }

        return {
            items,
            // total,
            // vaciar,
        }

    }
        
}


</script>
