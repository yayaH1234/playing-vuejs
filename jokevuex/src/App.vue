<template>
  <div id="app">
    <div id="nav"  >


      <ul class="nav">
        <li>
          <router-link to="/">Home</router-link></li>
        <li><router-link to="/Ourjokes">Jokes</router-link></li>
      </ul>



    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["setJoke"])
  },
  mounted() {
    this.setJoke();
  }
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border:1px solid #ccc;
  border-width:1px 0;
  list-style:none;
  margin:0;
  padding:0;
  text-align:center;
}

#nav a {
  font-weight: bold;
  color: green;
  text-decoration: none;
  display:inline-block;
  padding:10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



.nav li{
  display:inline;
}

</style>
