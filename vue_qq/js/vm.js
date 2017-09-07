var vm=new Vue({
    el:"#app",
    data:{
        arr:[]
    },
    created(){
        var that=this;
        $.ajax({
            url:'http://127.0.0.1:8888',
            type:'POST'
        }).then(function (rs) {
            that.arr=rs;
        },function (err) {
            console.log(err)
        })
    }
});