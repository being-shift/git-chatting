const userController = require("../Controllers/user.controller");
const chatController = require("../Controllers/chat.Controller"); // chat.controller.js 파일명은 오류가 발생함

const { io } = require("socket.io-client");

module.exports = function (io){	
	io.on("connection", async (socket)=>{

		socket.on("login", async (userName, cb) => {
			console.log(new Date(), "backend login : ", userName);
			// 유저정보를 저장
			try{
				const user = await userController.saveUser(userName, socket.id);
				const welcomeMessage = {
					chat: `${user.name} was loged in`,
					user: {
						id: null,
						name: 'system',
					},
				};
				io.emit("message", welcomeMessage);
				cb({ ok:true, data: user });
			}catch(error){
				cb({ ok:false, error: error.message });
			}
		});

		socket.on("sendMessage", async(message, cb) => {
			try{
				await console.log(new Date(), "backend sendMessage : ", message);
				// socketid로 유저찾기 
				const user = await userController.checkUser(socket.id);
				// 메세지 저장
				const newMessage = await chatController.saveChat(message, user); 
				// 메세지 전송
				io.emit("message", newMessage);
				cb({ ok:true });
			}catch(error){		
				cb({ ok:false, error: error.message });
			}
		});

		socket.on("disconnect", () => {
			console.log(new Date(),"user is disconnected");
		});

	});
}