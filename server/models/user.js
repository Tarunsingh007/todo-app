var mongoose=require('mongoose');
var validator=require('validator');
var _=require('lodash');
var jwt=require('jsonwebtoken');
var schema=require('mongoose').Schema;

var userschema=new schema({
	email:{
		type:String,
		required:true,
		minlength:1,
		trim:true,
		unique:true,
		validate:{
			validator:(value)=>{
				return validator.isEmail(value);
		}		
	}
},
	password:{
		type:String,
		minlegth:6,
		required:true
	},
	tokens:[{
			access:{
				type:String,
				required:true
			},
			token:{
				type:String,
				required:true
			}
	}]

});

userschema.methods.toJSON=function () {
	var newuser= this;
	var userobject=newuser.toObject();
	return _.pick(userobject,['_id','email']);
};

userschema.methods.generateAuthToken=function () {
	var newuser=this;
	var access='auth';
	var token=jwt.sign({_id:newuser._id.toHexString(),access},'abc123').toString();
	newuser.tokens=newuser.tokens.concat([{access,token}]);
	return newuser.save().then(()=>{
		return token;
	});
};

var user=mongoose.model('user',userschema);


module.exports={user};