const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    id : String,
    author: String,
    content: String,
    date: Date,
});


module.exports = mongoose.model("message",messageSchema);