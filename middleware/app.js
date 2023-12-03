const express = require("express");
const app = express();

// app.use( (req,res) => {
//     console.log("middleware starting");
//     res.send("middleware work done")
// })


// using next 

// app.use((req,res,next) => {
//     console.log("Current time is " , Date.now());
//     res.send("Current time is " );
//     next()
// })

// creating utility middleware 


// loggers 

// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString()
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })

// app.use => callBack   

// app.use("/random", (req, res, next) => {
//    console.log(" hi i am random , now i am working for middleware");
//    next();

// })

// app.use("/random", (req, res, next) => {
//     setTimeout(() => {
//         if (Math.random() > .5) {
//             next('error');
//         } else {
//             next();
//         }
//     })

// })


// app.use("/api", (req,res,next) => {
//     let { token } =req.query;
//     if(token ==="giveaccess") {
//         next()
//     }
//     res.send("ACCESS DENIED")
    
// })

// app.get("/api", (req, res) => {
//     res.send("Hello API Page");
// })


// we can use middlearw in variable also  {

const checkToken =  (req,res,next) => {
    let { token } =req.query;
    if(token ==="giveaccess") {
        next()
    }
    res.send("ACCESS DENIED")
    
}

app.get("/api", checkToken, (req, res) => {
    res.send("Hello API Page");
})

// }




app.get("/", (req, res) => {
    res.send("Hello Home");
})

app.get("/random", (req, res) => {
    res.send("this is a random page");
})

// 404 

app.use( (req,res)=> {
    // res.send("page not found")
    res.status(404).send("page not found");

    console.log("page not found");
})

app.listen(4545, () => {
    console.log("server listening to port 4545");
})