var express=require('express');
const _=require('lodash');
var bodyparser=require('body-parser');
var {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var {todo}=require('./models/todo');
var {user}=require('./models/user');
var port=process.env.PORT||3000;
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


app.get('/todos',(req,res)=>{
	todo.find().then((todos)=>{
		res.send({todos});
	},(e)=>{
			res.status(400).send(e);
	});
});

app.get('/todos/:id',(req,res)=>{
	var id=req.params.id;
	if(!ObjectID.isValid(id))
	{
		return res.status(404).send();
	}
	todo.findById(id).then((todo)=>{
			if(!todo)
			{
				return res.status(404).send();
			}
			res.send({todo});
	}).catch((e)=>{
		res.status(400).send(e);
	});
});

app.post('/user',(req,res)=>{
	var newuser= new user({
		email:req.body.email,
		password:req.body.password
	});

	newuser.save().then(()=>
	{
		return  newuser.generateAuthToken();
	}).then((token)=>{
		res.header('x-auth', token).send(newuser);
	}).catch((e)=>{
		res.status(400).send(e);
	})
});

app.listen(port,()=>{
	console.log(`started on port ${port}`);
});