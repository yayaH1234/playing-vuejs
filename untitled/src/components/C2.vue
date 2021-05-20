<template>
  <div class="c2">


    <div class="myDiv">
      <div style="float:left;width:0">
        <p style="white-space: nowrap">Please tape words :</p>
        <textarea v-model="valueTxt"  > </textarea>
        <input type="button" value="valide" @click="sendData"/>
      </div>

      <H1> <p>C2 component </p></H1>

      <div >
        <p >Your words : {{  sendedmsg }}</p>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "C2",
  props: {
    msg: String,
    counter: {
      type: [String, Number],
      default: 0
    }
  },data(){
    return {
      valueTxt : '',
      sendedmsg:''
    }
  },
  methods:{

    sendData() {
      this.$eventBus.$emit('send-data1', this.valueTxt);
    }
  },
  created() {
    this.$eventBus.$on('send-data2', (valueTxt) => {

      this.sendedmsg=valueTxt
    });
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