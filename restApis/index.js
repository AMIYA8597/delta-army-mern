const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

var methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")
app.set("views ", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

let we = [
    {
        id: uuidv4(),
        username: "Amiya",
        content: "You need to work hard🐐"
    },
    {
        id: uuidv4(),
        username: "Akash",
        content: "You need to get up early😊"
    },
    {
        id: uuidv4(),
        username: "Pranab",
        content: "You need to go for a vacation immedietly 😊"
    },
    {
        id: uuidv4(),
        username: "Sovan",
        content: "You need to come back home to reduceing your mom`s tension 😊"
    }
]

app.get("/posts", (req, res) => {
    console.log("server running under /posts url");
    res.render("index.ejs", { we });
});


app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


app.post("/posts", (req, res) => {
    // console.log(req.body);
    // res.send("post request subbmit")
    let { username, content } = req.body
    let id = uuidv4();
    we.push({ id, username, content })
    // res.send("post request submit");
    res.redirect("/posts");

});





app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let friends = we.find((f) => id === f.id)
    console.log(friends);

    // res.send("request working");
    res.render("show.ejs", { friends });

});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    //    console.log(id);
    let newContent = req.body.content;
    //    console.log(newContent);
    let friends = we.find((f) => id === f.id)
    friends.content = newContent;
    console.log(friends);
    res.redirect("/posts")
    res.send("Patch Request working");
})


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let friends = we.find((f) => id === f.id)
    res.render("edit.ejs")
    // res.redirect("edit.ejs")
})

app.delete("/posts/:id",(req,res) =>{
    console.log("delete working");
    let { id } = req.params;
    we = we.filter((f) => id !== f.id)
    res.send("delete successfully")
    res.redirect("/posts")
})



app.get("/", (req, res) => {
    console.log("server running under app.get");
    res.send("server running under app.get");
})


app.listen(port, () => {
    console.log(`port is listening in : ${port}`);
}) 