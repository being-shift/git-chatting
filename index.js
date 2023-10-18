// 웹서버 실행(setting은 app.js)
const {createServer} = require("http");	// protocol 제약
const app = require("./app");			// 환경변수,connection셋팅 등
const {Server} = require("socket.io");	
require('dotenv').config();
const httpServer = createServer(app);	
const io = new Server(httpServer, {		// 패킷 BUS: 3000번으로 27017과 통신
	cors: {
		origin: "http://localhost:3000",
	}
});

// 기능분리
require("./utils/io")(io);
// web <-> socket 연결
httpServer.listen(process.env.PORT,		// 5001 -> 3000 <-> 27017 
	() => { console.log("server listening on port", process.env.PORT); }
);
