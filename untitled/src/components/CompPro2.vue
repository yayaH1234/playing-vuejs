<template>
<div  id="CompPro2">



  <div class="myDiv">
    <div style="float:left;width:0">
      <p style="white-space: nowrap">Please tape words :</p>
      <textarea v-model="valueTxt"  > </textarea>
      <input type="button" value="valide" @click="sendData"/>
    </div>

    <H1> <p>CompPro2 component </p></H1>

    <div >
      <p >Your words : {{   message }}</p>

    </div>
  </div>


</div>
</template>

<script>
export default {
  name: "CompPro2",
  props:{
    message:String
  },
  data(){
    return{
      valueTxt:''
    }
  }
  ,
  mounted() {
    this.$root.$on('comp1msg', (arg) =>{
      this.message=arg
    });
  },
  methods:{
    sendData(){
      this.$emit('comp2msg',this.valueTxt)
    }
  }
}
</script>

<style scoped>
.myDiv {
  border: 5px outset red;
  background-color: lightblue;
  text-align: center;
}
</style>