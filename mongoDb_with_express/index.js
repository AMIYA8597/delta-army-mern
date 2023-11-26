const express = require("express");
const app = express();
// getting-started.js
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js")
// module.exports = router;
const port = 5000;

app.set("views", path.join(__dirname ,"views"));
app.set("view engine" , "ejs");

main().then( () => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/cmd');

}

let chat1 = new Chat({
    from:"Pranab",
    to:"Me",
    message:"Send me your Location",
    created_at: new Date()
});

chat1.save().then((res) => {
  console.log(res);
})

// index route

app.get("/chats" , async (req, res) => {
   let chats = await Chat.find()
   console.log(chats);
   res.send("working");
})


app.get("/" , (req, res) => {
   res.send("root is working") 
})

app.listen(port, () => {
   console.log("server is listening on port 5000"); 
});