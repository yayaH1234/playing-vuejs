import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import okCompo from "../components/okCompo";
import dycomp from "../components/dycomp";
import inputpage from "../components/inputpage";

Vue.use(Router)

const  routes= [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/okCompo',
        name: 'okCompo',
        component: okCompo
    },
    {
        path: '/dycomp',
        name: 'dycomp',
        component: dycomp
    },
    {
        path: '/inp/',
        name: 'inputpage',
        component: inputpage
    }
];

export default new Router({
   routes,
    mode: 'history'
})