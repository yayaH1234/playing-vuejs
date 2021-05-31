import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };
export default new Vuex.Store({
  state: {
    myJoke:'Our joke',
    jokeList : [],
    testElm : 0
  },
  mutations: {
    setJoke(state,payload){
      state.myJoke = payload;
      state.jokeList.push(payload);
    }
  },
  actions: {
    async setJoke(state){
      const jokes=await fetch(url,{headers});
      const j=await jokes.json();
      state.commit("setJoke",j.joke);
    },
   async incremntvl(){
    //  this.state.testElm=payload;
     this.state.testElm++;
      console.log(this.state.testElm);
    }
  },
  modules: {
  },
  getters:{
    getCurrentJoke: state => state.myJoke,
    getAllJokes: state => state.jokeList,
    getTestVal : state => state.testElm,
  }
})

