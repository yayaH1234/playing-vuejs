<template>
<div>
  <C1 />
  <C2 />
</div>
</template>

<script>

import C1 from './C1.vue'
import C2 from './C2.vue'

export default {
  name: "IndependentTest",
  components:{
    C1,
    C2
  }
}
</script>

<style scoped>

</style>