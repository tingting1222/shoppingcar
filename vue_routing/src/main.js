import Vue from 'vue';
import Router from 'vue-router';
import first from './components/one.vue';
import second from './components/second.vue';
import types from './components/type.vue';
import jingpin from './components/jingpin.vue';
import guangbo from './components/guangbo.vue';
import zhibo from './components/zhibo.vue';
import music from './components/music.vue';

let router=new Router({
    linkActiveClass:'active',
    routes:[{
        name:'one',
        path:'/',
        component:first,
        children:[{
            name:'second',
            path:'/second',
            component:second
        },{
            name:'types',
            path:'/types',
            component:types
        },{
            name:'jingpin',
            path:'/jingpin',
            component:jingpin
        },{
            name:'guangbo',
            path:'/guangbo',
            component:guangbo
        },{
            name:'zhibo',
            path:'/zhibo',
            component:zhibo
        },
        {
            path:'/',
            redirect:'/second'
        },
        ]
    },{
        name:'music',
        path:'/music',
        component:music
    }]
});

Vue.use(Router);

var vm=new Vue({
    el:"#app",
    /*template:"<div><index></index></div>",
     components:{
     index:index
     },*/
    router
    /*render(h){

     return h(index)
     }*/
});