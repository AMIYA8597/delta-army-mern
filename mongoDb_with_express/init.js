// const express = require("express");
// const app = express();
// // getting-started.js
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js")
// // module.exports = router;

// app.set("views", path.join(__dirname ,"views"));
// app.set("view engine" , "ejs");

main().then( () => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}

let allChats = [
    {
        from:"Pranab",
        to:"Me",
        message:"Send me your Location",
        createdAt: new Date()
    },
    {
        from:"Pranab",
        to:"Me",
        message:"Send me your Location",
        createdAt: new Date()
    },
    {
        from:"Pranab",
        to:"Me",
        message:"Send me your Location",
        createdAt: new Date()
    },
    {
        from:"Pranab",
        to:"Me",
        message:"Send me your Location",
        createdAt: new Date()
    },
    {
        from:"Sovan",
        to:"Me",
        message:"Send me your Location",
        createdAt: new Date()
    },
    {
        from:"Akash",
        to:"Me",
        message:"Send me your Location",
        createdAt: new Date()
    },
    {
        from:"Samiran",
        to:"Me",
        message:"Send me your Location",
        createdAt: new Date()
    }

]

 Chat.insertMany(allChats);

// chat1.save().then((res) => {
//   console.log(res);
// })


// app.get("/" , (req, res) => {
//    res.send("root is working") 
// })

// app.listen(3002, () => {
//    console.log("server is listening on port 3002"); 
// });