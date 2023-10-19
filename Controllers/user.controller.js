const User = require("../Models/user");
const userController = {};

userController.saveUser=async(userName, sid)=>{
	// �̹� �ִ� �������� Ȯ��
	let user = await User.findOne({name: userName});
	// ���ٸ� ���� �������� �����
	if(!user){
		user = new User({
			name: userName,
			token: sid,
			online: true,
		});
	}
	// �̹� �ִ� ������� �������� token���� �ٲ�����
	user.token = sid;
	user.online = true;
}

module.exports = userController;
