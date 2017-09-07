var data=require('./data/data.json');
module.exports={
    entry:__dirname+'/js/vm.js',
    devServer: {
        host:'127.0.0.1',
        port:8888,
        setup(app){
            app.post('/',function (req,res) {
                res.setHeader('Access-Control-Allow-Origin','*');
                res.setHeader('content-type','application/json;charset=utf-8');
                if(req.url=='/'){
                    res.write(JSON.stringify(data));
                    res.end();
                }

            })
        }
    }
};