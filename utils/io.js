module.exports = function (io){	
	io.on("connnection", async(socket)=>{
		console.log("client is connecteds : " + socket.id);		
	});
}
