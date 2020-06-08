<template>
  <div id="app">
  
  <!--<router-view></router-view>
  <router-link :to="{path:'/'}">Home</router-link>
  <router-link :to="{path:'/test/1'}">Test</router-link>
  <router-link :to="{path:'/test/2'}">Test2</router-link>-->
 <navbar @search="search"></navbar>
  
<div class="container">
<div class="row">
<div class="col-sm-9">
<router-view></router-view>
<!--<inventory @newitemadded="addCartItem" :items="items"></inventory>  -->
</div>
<div class="col-sm-3">
<cart :items="cart" @itemRemoved="removeItem"></cart>
</div>
</div>
  </div> 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Cart from '@/components/Cart'
//import Inventory from '@/components/Inventory'
import data from '@/data'
export default {
  components:{
    Navbar,
    Cart,
    //Inventory
  },
  data(){
    return{
      items:[],
      cart:[]
    }
  },
  mounted(){
    this.items=data
  },
  methods:{
    addCartItem(item){
      this.cart.push(item)
    },
    removeItem(index){
      this.cart.splice(index,1)
    },
    search(keyword){
    this.items = data.filter(item=>{
     return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !==-1
    })
    }
  }

}
</script>

<style>
.container{
  padding: 10px;
}
</style>
