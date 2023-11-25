const mongoose = require("mongoose");

// 스키마 추가
const chatSchema = new mongoose.Schema(
    {
        chat: String,
        user: {
            id:{
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String,
        },
    },
    { timestamp: true }
);

module.exports = mongoose.model("Chat",chatSchema);
