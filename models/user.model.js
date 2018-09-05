const mongoose = require('mongoose');

const user = mongoose.Schema({
	userName : {type : String, required : true},
	password : {type : String , required : true}
}, {usePushEach: true});

module.exports = mongoose.model('User', user);