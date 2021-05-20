<template>

  <div class="click-counter">

    <p>In HeyWord My msg {{ msg }} From HelloWorld</p>


  </div>
</template>

<script>
export default {
  name: "HayWord.vue",
  props: {
    msg: String,
    counter: {
      type: [String, Number],
      default: 0
    }
  }
}
</script>

<style scoped>

</style>