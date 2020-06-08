<template>
<ul class="list-group">
<li class="list-group-item">
<span class="item-name">Name</span>
<span class="item-price float-right">Price</span>
</li>
<hr>
<li v-for="(item,index) in items" :key="index" class="list-group-item">
<span class="item-name">{{item.title}}</span>
<button @click="removeItem" class="btn button-small btn-danger"></button>
<span class="item-price float-right">{{item.price}}</span>
</li>
<hr>
<li class="list-group-item">
<span class="item-name">Total</span>
<span class="item-price float-right">{{totalprice}}</span>
</li>
</ul>
</template>
<script>
export default{
//props:['items'],
computed:{
    items(){
        return this.$store.getters.getCart
    },
    totalprice(){
        var total = 0
        this.items.forEach(item=>{
            total+= parseFloat(item.price)
        })
        return total
    }
},
methods:{
    removeItem(index){
    //this.$emit('itemRemoved',index)
    this.$store.commit('removeItem',index)
    }
}
}
</script>
<style>
</style>