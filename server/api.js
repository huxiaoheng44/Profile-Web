
const express = require("express");

const router = express.Router();

const Message = require("./models/message");

const Comment = require("./models/comment");

// API about message
router.get("/messages",(req,res) => {
    Message.find({}).then((messages) => {
        res.send(messages);
    });
})

router.post("/message",(req,res) => {
    console.log(req.body);
    const newMessage = new Message({
        messageId: req.body.messageId,
        author : req.body.author ,
        content: req.body.content,
        date: req.body.date,
    });

    newMessage.save().then((message) => {
        // console.log(message.date);
        res.send(message);
    });
});

// API about Comment
// find comments with the same parentId
router.get("/comments/:parentId",(req,res) => {
    Comment.find({parentId: req.params.parentId}).then((comments) => {
        console.log(comments);
        res.send(comments);
    });
});


router.post("/comment",(req,res) => {

    const newComment = new Comment({
        parentId: req.body.parentId,
        author : req.body.author ,
        content: req.body.content,
        date: req.body.date,
    });

    newComment.save().then((comment) => {
        res.send(comment);
    });
});


router.get("/test",(req,res) => {
    res.send('Congratulations you passed the test');
})

router.all("*", (req, res) => {
    console.log(`API route not found: ${req.method} ${req.url}`);
    res.status(404).send({ msg: "API route not found" });
});

  
  
  module.exports = router;