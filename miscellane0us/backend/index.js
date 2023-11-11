const express = require("express")

const app = express();
// app.use(express.json())

const port = 3010;
app.use(express.urlencoded({extended:true}))

app.get("/register", (req,res) =>{
    let {user , pass} = req.query
    res.send(`send the get request in register and welcome our user and our username is ${user}`)
})
app.post("/register", (req,res) =>{
    let {user , pass} = req.body;
    // res.send (req.body);
    // console.log(data);
    res.send(`send the post request in register url ${user}`)
})

app.listen(port, () =>{
    console.log(`app is listen in ${port}`);
})