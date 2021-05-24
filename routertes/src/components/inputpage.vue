<template>
<div>
  <input type="text" v-model="valt" >
<input type="submit" v-on:click="getview">
</div>
</template>

<script>
export default {
  name: "inputpage",
  data(){
   return { valt : ''

   };
  },
  methods :{
  getview(){
    console.log(this.valt)
    this.$router.push({name: 'dycomp', params: { id: this.valt }})
  }
  },
  watch:{
/*    valt : function (){
      //this.$router.push({path: '/inp/',params: {id:this.valt}})
          }*/
  }
}
</script>

<style scoped>

</style>