var mongoclient=require('mongodb').MongoClient;
mongoclient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');

	db.close();
});
