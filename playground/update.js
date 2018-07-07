var mongoclient=require('mongodb').MongoClient;
mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
		{
			console.log('unable to connect');
		}
		console.log('connection established');
		db.collection('users').findOneAndUpdate({name :"TARUN"},
			{
				$set :{name:"TARUN"},
				$inc:{age:2}
		}).then((result)=>{
			console.log(result);
		});
		db.close();
});