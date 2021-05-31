<template>
  <div >
Inserting :
    <input type="text" v-model="sendedMsg" >
    <input type="submit" @click="clicking">
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "C1",
  data(){
   return{
     sendedMsg :''
   }
  },
  methods:{
      ...mapActions({clicking : 'incremntvl'})

  }
}
</script>

<style scoped>
div {
  height: 300px;
  width: 300px;
  text-align: center;
  color: #42b983;
  margin:0 auto;
}
</style>