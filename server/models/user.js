var mongoose=require('mongoose');
var users=mongoose.model('user',{
	 username:{
	 	type:String,
	 },
	 email:{
	 	type:String,
	 	required:true,
	 	trim:true
	 }
});

module.exports={users};