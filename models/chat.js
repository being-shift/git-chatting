const mongoose = requiere("mongoose");

// 스키마 추가
const chatSchema = new mongoose.Schema(
    {
        chat: string,
        user: {     // 이름
            id:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            name: string,
        },
    },
    { timestamps: true },
);
module.exports = mongoose.model("chat".userSchema);
