var mongoclient=require('mongodb').MongoClient;
mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');
	db.collection('Todos').insertOne({
		text:"somthing to do",
		completed:false
	},(err,result)=>{
		if(err){
			return console.log('unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
var date =new Date();
	db.collection('users').insertOne({
		name:"tarun singh",
		age:20,
		location:"firozabad",
		time : date
	},(err,result)=>{
		if(err)
		{
			return console.log('unable to insert users',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.close();
});
