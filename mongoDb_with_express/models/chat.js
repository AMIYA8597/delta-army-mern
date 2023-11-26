// const express = require("express");
// const app = express();
// getting-started.js
const mongoose = require('mongoose');
// const path = require("path");

const chatSchema = new mongoose.Schema({
    from:{
        type :String,
        require:true
    },
    to:{
        type :String,
        require:true
    },
    message:{
        type :String,
        maxLength:50
    },
    created_at:{
        type:Date,
        require:true
    }
})

const Chat= mongoose.model("Chat", chatSchema);
module.exports = Chat;
