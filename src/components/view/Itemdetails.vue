<template>
<div v-if="item" class="row">
<div class="col-sm-6">
<img :src="item.photo" alt="Photo">
</div>
<div class="col-sm-6">
<p>Title-{{item.title}}</p>
<p>Description-{{item.descriptipn}}</p>
<p>Price-{{item.price}}</p>
<button @click="addToCart(item)" class="btn btn-primary">Add</button>
</div>
</div>
<h3 v-else>Null</h3>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            item:null
        }
    },
    mounted(){
        this.fetchItem()
    },
    methods:{
        fetchItem(){
            var self = this
        axios.get('http://localhost:3000/item/' + this.$route.params.id)
        .then(response=>{
        this.item=response.data
        })
        },
        addToCart(item){
        this.$store.commit('addToCart',item)
        }
    }

}
</script>
<style>
    
</style>