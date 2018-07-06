var mongoclient=require('mongodb').MongoClient;
mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');

	db.collection('Todos').find().count().then((count)=>{
		console.log(`Todos count : ${count}`);
	},(err)=>{
		if(err)
		{
		console.log(err);
		}
	});
	db.collection('users').find({name :'tarun singh'}).toArray().then((docs)=>{
		console.log('Todos :');
		console.log(docs);
	},(err)=>{
		if(err)
		{
		console.log(err);
		}
	});
});
