<template>
<div id="CompPro1">



  <div class="myDiv2">
    <div style="float:left;width:0">
      <p style="white-space: nowrap">Please tape words :</p>
      <textarea v-model="commsg" style=""   value=""  />
      <input type="button" value="valide" @click="sendMessag" />
    </div>
    <h2>CompPro1 component</h2>
    <p>This is some text in a div element.</p>
    <div >
      <p >Your words : {{ message  }}  </p>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "CompPro1",
  props:{
    message:String
  },
  data(){
    return{
      commsg:''
    }
  },
  methods:{
    sendMessag(){
      this.$emit('comp1msg',this.commsg)
    }
  },
  mounted() {
    this.$root.$on('comp2msg', (arg) =>{
      this.message=arg
    });
  }
}
</script>

<style scoped>

.myDiv2 {
  border: 5px outset green;
  background-color: lightcyan;
  text-align: center;


  border-radius: 5px;
  padding: 20px;
}
</style>