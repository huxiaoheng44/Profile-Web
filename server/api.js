
const express = require("express");

const router = express.Router();

const Message = require("./models/message");

router.get("/messages",(req,res) => {
    Message.find({}).then((messages) => {
        res.send(messages);
    });
})

router.post("/message",(req,res) => {
    console.log(req.body);
    const newMessage = new Message({
        id: req.body._id,
        author : req.body.author ,
        content: req.body.content,
        date: req.body.date,
    });

    newMessage.save().then((message) => {
        // console.log(message.date);
        res.send(message);
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