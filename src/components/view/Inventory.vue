<template>
<div v-if="!loading" class="row">
<div class="card" v-for="(item,index) in items" :key="index" style="width: 10rem;">
<router-link tag="div" :to="{path:'/item/' + item.id}">
  <img class="card-img-top" :src="item.photo" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
  </div>
</router-link>
<div class="card-footer">
    <p class="card-text">{{item.price}}</p>
    <a @click="addtoCart(item)" class="btn btn-primary">ADD</a>
</div>
  </div>
</div>
<h3 v-else>Loading..</h3>
</template>
<script>
import axios from 'axios'
export default{
   data(){
     return{
       loading:true,
     //items:[]
     }
   },
   computed:{
   items(){
     return this.$store.getters.getInventory
   }
   },
   mounted(){
   this.fetchInventory()
   },
   methods:{
       addtoCart(item){
           //this.$emit('newitemadded',item)
           this.$store.commit('addToCart',item)
       },
       fetchInventory(){
         var self = this
         axios.get('http://localhost:3000/items')
         .then(response=>{
           //self.items = response.data
           self.$store.commit('setInventory',response.data)
           self.loading=false
         })
       }
   }
}
</script>
<style>
</style>