const express = require("express");
const app = express();
// getting-started.js
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js")
const ExpressError = require("./ExpressError");
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

app.get("chats/new", (req,res) => {
   throw new ExpressError(404, "page not found")
   res.render("new.ejs")
})

// function asyncWrap 

function asyncWrap (fn) {
   return function(req,res,next) {
      fn(req,res,next).catch(err=> next(err));
   }
}

// NEW Show routes 

// app.get("chats/:id", async (req,res,next) =>{
//    let { id } = req.params;
//    let chat = await Chat.findById(id);
//    if(!chat) {
//       // throw new ExpressError(404, "chat not found")
//       next( new ExpressError(404, "chat not found"))
//    }
//    res.render("edit.ejs" , {chat})
// });

// asyncWrap function 

app.get("chats/:id", asyncWrap (async (req,res,next) =>{
   let { id } = req.params;
   let chat = await Chat.findById(id);
   if(!chat) {
      // throw new ExpressError(404, "chat not found")
      next( new ExpressError(404, "chat not found"))
   }
   res.render("edit.ejs" , {chat})
}));




app.get("/" , (req, res) => {
   res.send("root is working") 
})

const handleValidationError = (err)=>{
   console.log("this is a validation error please folloe rules"); 
   console.dir(err);
   return err;
}

app.use( (req,res,err,next) =>{
   console.log(err.name);
   if (err.name === "ValidationError") {
      // console.log("this is a validation error please folloe rules"); 
      err = handleValidationError (err)   
   }
   next(err)
})

// error handling middleware 
app.use("err", (req,res) => {
   let { status = 500 , message= "Some Error occure" } = err;
   res.status(status).send(message);
})

app.listen(port, () => {
   console.log("server is listening on port 5000"); 
});