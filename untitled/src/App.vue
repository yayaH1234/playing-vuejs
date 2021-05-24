<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TestRouter />
    <router-view/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <c2 />
    <c1 />
    <InCompo />
  </div>


</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import C1 from "./components/C1";
import C2 from "./components/C2";
import InCompo from "./components/InCompo";
import TestRouter from "./components/TestRouter";

export default {
  name: 'App',
  components: {
    TestRouter,
    InCompo,
    C2,
    C1,
    HelloWorld
  },data(){
    return {
      msg:'some text'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
