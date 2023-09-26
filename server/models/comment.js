const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    parentId: String,
    author: String,
    content: String,
    date: Date,
})

module.exports = mongoose.model("comment", commentSchema);