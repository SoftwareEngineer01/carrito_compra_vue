<template>
    <tr>
        <th scope="row">{{item.id}}</th>
        <td>{{item.title}}</td>
        <td>{{item.cantidad}}</td>
        <td>
            <button class="btn btn-info btn-sm">
                +
            </button>
            <button class="btn btn-danger btn-sm">
                -
            </button>
        </td>
        <td>$ <span>{{precioTotal}}</span></td>
      </tr>
</template>

<script>
import { computed } from '@vue/runtime-core'
 
export default {

    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    
    setup(props) {

        const precioTotal = computed(() => props.item.precio * props.item.cantidad)         
        
        return {
            precioTotal,            
        }           
    }
    
}

</script>
