<template>
    <tr>
        <th scope="row">{{item.id}}</th>
        <td>{{item.title}}</td>
        <td>{{item.cantidad}}</td>
        <td>
            <button class="btn btn-info btn-sm" @click="aumentar(item.id)">
                +
            </button>
            <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">
                -
            </button>
        </td>
        <td>$ <span>{{precioTotal}}</span></td>
      </tr>
</template>

<script>
import {useStore} from 'vuex'
import { computed } from '@vue/runtime-core'
 
export default {

    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    
    setup(props) {

        const store = useStore()

        const precioTotal = computed(() => props.item.precio * props.item.cantidad)         
        const aumentar = id => {store.commit('aumentar', id)}
        const disminuir = id => {store.commit('disminuir', id)}
        
        return {
            precioTotal,
            aumentar, 
            disminuir,           
        }           
    }
    
}

</script>
