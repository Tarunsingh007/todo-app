var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',(err)=>{
	if(err){
		console.log('not conected');
	}
	console.log('connected');
});
module.exports={mongoose};