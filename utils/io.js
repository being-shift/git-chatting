const userController = require("../Controllers/user.controller");

module.exports = function (io){	
	io.on("connection", async(socket)=>{
		//console.group("socket");
		//console.log(socket);
		//console.groupEnd();
		console.log("client is connected : " + socket.id);		

		socket.on("login", async (userName, cb) => {
			console.log("backend login : ", userName);
			// 유저정보를 저장
			try{
				const user = await userController.saveUser(userName, socket.id);
				cb({ ok:true, data: user });
			}catch(error){
				cb({ ok:false, error: error.message });
			}
		});

		socket.on("disconnect", () => {
			console.log("user is disconnected");
		});

	});
}
