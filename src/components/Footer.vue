<template>
    <th scope="row" colspan="2">Total productos</th>
    <td>{{totalCantidad}}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciarCarrito">
            vaciar todo
        </button>
    </td>
    <td class="font-weight-bold"><span>{{totalPrecios}}</span></td>
</template>
 
<script>

import {useStore} from 'vuex'
import { computed } from '@vue/runtime-core'
export default {

    setup() {

        const store = useStore()

        const totalCantidad = computed(() => store.getters.totalCantidad)
        const totalPrecios = computed(() => store.getters.totalPrecios)
        const vaciarCarrito = () => {store.commit('vaciarCarrito')}            
        
        return {
            totalCantidad,
            totalPrecios,  
            vaciarCarrito,          
        }

    }    

}
</script>

