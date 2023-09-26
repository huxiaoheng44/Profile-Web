const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    messageId : String,
    author: String,
    content: String,
    date: Date,
});


module.exports = mongoose.model("message",messageSchema);