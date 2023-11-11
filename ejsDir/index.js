const express = require("express");
const app = express();
const path = require("path");



const port = 3000;

app.set("ciew enjine","ejs");
app.set("views", path.join(__dirname , "views"));
// app.use(express.static("public"));
app.use(express.static(path.join (__dirname ,"public/css")));
app.use(express.static(path.join (__dirname ,"public/js")));




app.get("/",(req,res)=>{
    // let prior = "we are here"
    // res.send(`HI ${prior}`)
    res.render("home.ejs")
})

app.get("/amiya",(req,res)=>{
    // let prior = "we are here"
    // res.send(`HI ${prior}`)
    res.render("amiya.ejs")
})


app.get("/rolldice",(req,res)=>{
    // let prior = "we are here"
    // res.send(`HI ${prior}`)
    // res.render("rolldice.ejs")
    let dice = Math.floor(Math.random() *6)+1 ;
    // res.render("rolldice.ejs", {num:dice})
    res.render("rolldice.ejs", {dice})
})



// app.get("/ig/:username",(req,res)=>{
//     let { username } = req.params
//     // console.log(username);
//     res.render("instagram.ejs", {username})
// })



// app.get("/ig/:username",(req,res)=>{
//     let followers = ["Pranab", "Krishna" , "Shuva" , "Samiran" , "Sangita" , "Pitu" , "Rakesh" , "Mala"]
//     let { username } = req.params
//     // console.log(username);
//     res.render("instagram.ejs", {username , followers})
// })



app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const instagramData = require("./data.json");
    // console.log[instagramData];
    const data = instagramData[username]
    console.log(data);
    if (data) {
        res.render("instagram.ejs" , { data }); 
    } else {
        res.render("error.ejs")
    }

})




// app.get("/amiya",(req,res)=>{
//     let prior = "Please do something"
//     res.send(`HI ${prior}`)
// })


app.listen(port , (req , res)=> {
    console.log(`listening on port ${port}`);
    
})