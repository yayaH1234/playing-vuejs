
<template>
  <!--div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <input type="text" v-model="text">

    <h1>{{ text }}</h1>
     <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div-->
  <div class="hello">

    <div class="myDiv">
      <div style="float:left;width:0">
      <p style="white-space: nowrap">Please tape words :</p>
        <textarea   v-model="text"/>
      </div>
      <h2>EX-1 vue</h2>
      <p>This is some text in a div element.</p>
      <div >
        <p >Your words :</p>
        <h2>{{ text }}</h2>
      </div>
    </div>
    <div class="myDiv2">
      <div style="float:left;width:0">
        <p style="white-space: nowrap">Please tape words :</p>
        <input id="mywt"  type="text" value="" @keyup.enter="say"/>
        <input type="button" value="valide" @click="say()"/>
      </div>
      <h2>EX-2 show after tape</h2>
      <p>This is some text in a div element.</p>
      <div >
        <p >Your words :</p>
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'HelloWorld',
 props: {
   msg: String

 },
 data() {
   return{
     text: '',
     title: '',
     aff: ''
   }
 },
  methods:{
    say(e) {
      alert(e.target.value)
      this.title = e.target.value
      e.target.value = ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.myDiv {
  border: 5px outset red;
  background-color: lightblue;
  text-align: center;
}
.myDiv2 {
  border: 5px outset green;
  background-color: lightcyan;
  text-align: center;
}
</style>
