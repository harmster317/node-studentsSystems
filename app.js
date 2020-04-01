var express=require('express')
var fs=require('fs')


var app=express()

// 配置
app.engine('html',require('express-art-template'))

app.use('/public',express.static('public'))
// 路由
app.get('/stu',function(req,res){
    fs.readFile('./db.json','utf8',function(err,data){
        
        if(err){res.send('db出现错误')}
        var newData=JSON.parse(data)
        res.render('index.html',{
          msgs:newData.stus
        })

    })    
})

app.get('/stu/new',function(req,res){
    res.render('new.html')
})
app.post('/stu/new',function(req,res){
    res.render('new.html')
})

app.listen(8000,function(){
    console.log('app is running')
})