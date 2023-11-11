const express = require("express");
const app = express();
// console.log(app);
let port = 3000;
let samber = app.listen(port, () => {
    console.log(`this is the running port number ${port}`);
})
// console.log("samber is ", samber);
// console.log("samber is ",samber.listenerCount);

// app.use((req, res) => {
//     // console.log(req);
//     // console.log("this is a ");
//     console.log("connect success");
//     // res.send("response is send");

//     // res.send({
//     //     name : "amiya",
//     //     age: 22,
//     //     gender : "male",
//     //     location:"India"
//     // });
//     // let recomendation = "<h1>here is the recomendation</h1><ul><li>HE is here for doing something really extraordinary news</li><li>he is doing his job</li><li>Give him a chance</li></ul>"
//     // res.send(recomendation)

// });



app.get("/", (req, res) => {
    let root = ` <h1>this is root path</h1>`
    res.send(root);
    console.log("this is home page")
});


app.get("/amiya", (req, res) => {
    let root = ` <h1>this is Amiya path</h1>`
    res.send(root);
    console.log("this is amiya page")
    let newNote = {
        firstName: "Amiya",
        lastNmae: "Chowdhury",
        age: 23,
        gender: "male",
        location: "Barcelona"
    };
    console.log("this is Amiya r data", newNote);
});

app.get("/pranab", (req, res) => {
    let root = ` <h1>this is Pranab path</h1>`
    res.send(root);
    console.log("this is Pranab page")
    let newNote = {
        firstName: "Pranab",
        lastNmae: "Pradhan",
        age: 23,
        gender: "male",
        location: "Bombay"
    };
    console.log("this is Pranab r data", newNote);
});

app.get("/akash", (req, res) => {
    let root = ` <h1>this is Akash path</h1>`
    res.send(root);
    console.log("this is akash page")
    let newNote = {
        firstName: "Akash",
        lastNmae: "Paloi",
        age: 23,
        gender: "male",
        location: "Calcutta"
    };
    console.log("this is Akash r data", newNote);
});

app.get("/sovan", (req, res) => {
    let root = ` <h1>this is Sovan path</h1>`
    res.send(root);
    console.log("this is sovan page")
    let newNote = {
        firstName: "sovan",
        lastNmae: "Pandit",
        age: 23,
        gender: "male",
        location: "Bengal"
    };
    console.log("this is sovan r data", newNote);
});

app.get("/samiran", (req, res) => {
    let root = ` <h1>this is Samiran path</h1>`
    res.send(root);
    console.log("this is samiran page")
    let newNote = {
        firstName: "samiran",
        lastNmae: "Bardolai",
        age: 23,
        gender: "male",
        location: "Uttar Pradesh"
    };
    console.log("this is samiran r data", newNote);
});

app.get("/subha", (req, res) => {
    // console.log("hello world")
    root = ` <h1>this is Subha path</h1>`
    res.send(root);
    let newNote = {
        firstName: "Shuvadip",
        lastNmae: "Paloi",
        age: 23,
        gender: "male",
        location: "Telengana"
    };
    console.log("this is shuva r data", newNote);
    res.send(`<h1>Welcome to the page of mr.${newNote}.</h1>`);
})


// app.get(":/username",(req , res) =>{
//     console.log(req.params);
//     console.log("request send successfully");
// })

app.get(":/username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome to the page of @ ${username}.</h1>`
    res.send(htmlStr);
    // console.log(req.params);
    // console.log("request send successfully");
    // console.log(`welcome to the page of @ ${username}.`);
});

app.get("/search", (req, res) => {
    // console.log('request send successfully');
    let { q } = req.query;
    if (!q) {
        // console.log("not sending");
        let patha = `<h1>nothing serached</h1>`
        res.send(patha)

    }
    res.send(`<h1> Search results for query : ${q}</h1>`);
    // res.send('request send successfully');
})


