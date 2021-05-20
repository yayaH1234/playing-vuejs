<template>
<div >
  <CompPro1 @comp1msg="resvd" :message="message2" />
  <CompPro2 @comp2msg="resvd2" :message="message1"/>
</div>
</template>

<script>
import CompPro1 from "./CompPro1";
import CompPro2 from "./CompPro2";
export default {
  name: "InCompo",
  components: {CompPro2, CompPro1},
  props :{
    message1: String,
    message2: String
  },
  methods:{
    resvd(arg1){
    this.message1=arg1
    alert(this.message1)
    },
    resvd2(arg2){
      this.message2=arg2
      alert(this.message2)
    }
  },
  watch:{
    message1: function (){

    },
    message2: function (){

    }
  }
}
</script>

<style scoped>
div{
  color: #45a049;
}
</style>