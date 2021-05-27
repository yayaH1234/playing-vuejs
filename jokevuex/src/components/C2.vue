<template>
<div>
  {{ valTest()  }}
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "C2",
  methods:{
    ...mapGetters({ valTest:'getTestVal' })
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