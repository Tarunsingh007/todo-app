var express=require('express');
var bodyparser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {todo}=require('./models/todo');
var {user}=require('./models/user');

var app=express();

app.use(bodyparser.json());
app.post('/todos',(req,res)=>{
	var newtodo=new todo({
		text:req.body.text
	});
	newtodo.save().then((docs)=>{
		res.send(docs);
	},(err)=>{
		res.status(400).send(err);
	});
});


app.listen(3000,()=>{
	console.log('started on port 3000');
});