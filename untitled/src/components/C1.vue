<template>
<div class="c1">


  <div class="myDiv2">
    <div style="float:left;width:0">
      <p style="white-space: nowrap">Please tape words :</p>
      <textarea v-model="valueTxt2" style=""   value=""  />
      <input type="button" value="valide" @click="sendData2" />
    </div>
    <h2>C1 component</h2>
    <p>This is some text in a div element.</p>
    <div >
      <p >Your words :</p>
      <h2>{{ ok1 }}</h2>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "C1",
  props :{
    msg:String
  },
  data() {
    return {
    ok1:'',
    valueTxt2:''
  }
  },
  created() {
    this.$eventBus.$on('send-data1', (valueTxt) => {

      this.ok1=valueTxt
    });
  },
  methods:{

    sendData2() {
      this.$eventBus.$emit('send-data2', this.valueTxt2);
    }
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