const mongoose = requiere("mongoose");

// 스키마 추가
const chatSchema = new mongoose.Schema(
    {
        chat: string,
        user: {
            id:{
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: string,
        },
    },
    { timestamp: true },
);
module.exports = mongoose.model("Chat".chatSchema);
