<template>
<div>
  <router-link to="/foo">Go to Foo</router-link>
  <router-link to="/bar">Go to Bar</router-link>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "TestRouter"
}



</script>

<style scoped>

</style>