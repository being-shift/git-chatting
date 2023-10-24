const User = require("../Models/user");
const userController = {};

userController.saveUser=async(userName, sid)=>{
	// TODO: DELL
	console.log("saveUser params: ", userName, sid);
	// check declare User 
	console.log("saveUser User: ", User || "cant find User");
	
	let user = await User.findOne({name: userName});

	// check declare User 
	console.log("saveUser user before check new user: ", user || "cant find user");
	
	if(!user){
		user = new User({
			name: userName,
			token: sid,
			online: true,
		});
	}
	
	user.token = sid;
	user.online = true;

	// check declare User 
	console.log("saveUser user after check new user: ", user || "cant find user");

	await user.save();
	return user;
}

module.exports = userController;
