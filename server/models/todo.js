var mongoose=require('mongoose');
var todo=mongoose.model('todo',{
	text:{
		type:String	
	},
	completed:{
		type:Boolean
	},
	completedAt:{
		type:Number
	}
});

module.exports={todo};