//1.引入
var express = require('express');
var app = new  express();

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
//   npm install    supervisor    -g

let  cors =  require('cors');
app.use( cors() )

//2.配置路由
app.get('/products', function(req, res) {
    res.send({
		result:[
			{name:"小米1", price:99,id:7},
			{name:"小米2", price:99,id:8},
			{name:"小米3", price:99,id:9},
			{name:"小米3", price:99,id:9},
			{name:"小米3", price:99,id:9},
			{name:"小米3", price:99,id:9},
			{name:"小米3", price:99,id:9},
		]
	})
});
app.post('/login', function(req, res) {
    res.send({
		result:{
			data:req.body,
			msg:"登录成功"
		}
	})
});
//3.监听端口
app.listen(3000, '127.0.0.1');