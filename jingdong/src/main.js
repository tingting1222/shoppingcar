import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import $ from './static/js/jquery';
import iscroll from './static/js/iscroll.js';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

import index from './components/index.vue';
import type from './components/type.vue';
import find from './components/find.vue';
import shop from './components/shop.vue';
import mine from './components/mine.vue';
var data=require('./static/data/data.json');
var data2=require('./static/data/arr.json');

Vue.use(Router);
Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
       count:data,
       brr:data2
    },
    mutations:{
        render(state){
            console.log(state.count)
        }
    }
});
const router=new Router({
    linkActiveClass:'bg',
   routes:[{
       name:'index',
       path:'/',
       component:index
   },{
       name:'type',
       path:'/type',
       component:type
   },{
       name:'find',
       path:'/find',
       component:find
   },{
       name:'shop',
       path:'/shop',
       component:shop
   },{
       name:'mine',
       path:'/mine',
       component:mine
   }]
});


Vue.prototype.$=$;
Vue.prototype.$iscroll=iscroll;

Vue.use(Mint);
Vue.use(VueAwesomeSwiper);

var vm=new Vue({
    el:"#app",
    router,
    store
   /* render(h){
        return h(index)
    }*/
});
