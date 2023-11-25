const User = require("../Models/user");
const userController = {};

userController.saveUser = async (userName, sid) => {

  let user = await User.findOne({ name: userName });

  if (!user) {
    user = new User({
      name: userName,
      token: sid,
      online: true,
    });
  }

  user.token = sid;
  user.online = true;

  // check declare User
  console.log("saveUser user after check new user: ", user);

  await user.save();
  return user;
};

userController.checkUser = async(sid) => {
	const user = await User.findOne({ token: sid });
	if(!user) throw new Error("User not found");
	return user;
}

module.exports = userController;
