var gulp=require('gulp');
var server=require('gulp-webserver');
var urlTool=require('url');
var qs=require('qs');
var data=require('./data/data.json');
gulp.task('mockServer',function(){
    gulp.src('gulp')
        .pipe(server({
            port:3333,
            middleware:function(req,res,next){
                var urlObj=urlTool.parse(req.url);
                var method=req.method;
                var pathname=urlObj.pathname;

                if(method==='POST'){
                    res.setHeader('Access-Control-Allow-Origin','*');
                    var postData='';
                    req.on('data',function(chunk){
                        postData+=chunk;
                        console.log(postData)
                    });
                    req.on('end',function(){
                        switch(pathname){
                            case "/":
                                res.setHeader('content-type','application/json;charset=utf-8');
                                res.write(JSON.stringify(data));
                                res.end();
                        }
                    })
                }else if ( method === "OPTIONS" ) {

                    res.writeHead(200,{
                        "Content-Type":"application/json",
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                    res.end();
                }
            }
        }))
});
gulp.task('default',['mockServer']);

