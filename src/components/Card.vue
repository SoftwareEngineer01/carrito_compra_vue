<template>
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3">
        <div class="card">
            <img :src="producto.thumbnailUrl" alt="" class="card-img-top">
            <div class="card-body">                
                <h5 class="card-title">{{producto.title}}</h5>
                <p class="card-text">$ <span>{{producto.precio}}</span></p>
                <button class="btn btn-dark" @click="agregar(producto)">Comprar</button>
            </div>
        </div>
      </div>
</template>

<script>

import {useStore} from 'vuex'
import { click, computed, onMounted } from '@vue/runtime-core'

export default {
    name: 'Card',
    props: {
        producto: Object,
    },

    setup() {

        const store = useStore()

        const agregar = producto => {
            store.dispatch('agregarAlCarrito', producto)
            console.log(producto)
        }

        return {
            agregar,
        }

    }

}

</script>


