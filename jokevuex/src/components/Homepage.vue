<template>
  <div class="hello">
    <h2 class=""> Jokes please ?</h2>
    <h3 class="h-40 text-black">{{joke}}</h3>
    <button

        @click="addJoke"
    >Add Joke</button>


  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions({ addJoke: 'setJoke' })

  },
  computed: {
    ...mapGetters({ joke: 'getCurrentJoke' })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


div {
  width: 500px;
  height: 200px;
  background-color: #42b983;

  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
  border-radius:50px;
}
button {
  background-color: #4CAF50; /* Green */
  border-radius:50px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;


}
button:hover {
  background-color: #42b983; /* Green */
  color: black;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>
