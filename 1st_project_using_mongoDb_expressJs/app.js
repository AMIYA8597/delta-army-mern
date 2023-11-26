const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const listing = require("./models/listing")
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");

main().then(() => {
    console.log("connection successful");
})
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => {
    console.log("root is working");
    res.send("root is working");
})

app.get("/listings", async (req, res) => {
    let allListings = await listing.find({})
    res.render("listings/index.ejs", { allListings })
});

//   new route  

app.get("/listings/new" , (req,res) => {
    res.render("listings/new.ejs")
})

// show routes

app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const idlisting = await listing.findById(id);
    res.render("listings/show.ejs", { idlisting });
  });

//   create Route

app.post("/listings" , async(req, res) => {
    // let { title, description, price, image ,country, location} = req.body;
    // let listing = req.body.listing;
    const newListing =new listing(req.body.listing);
    await newListing.save()
    // console.log("my new listing", listing);
    res.redirect("/listings");
    // res.redirect(`/listings/${newListing._id}`);
})

// edit routing 

app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const idlisting = await listing.findById(id);
    res.render("listings/edit.ejs", { idlisting });
})

// update Route 

app.put("/listings/:id" , async (req,res) => {
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, {...req.body.listing})
    res.redirect(`/listings/${id}`)
})


// delete Route

app.delete("/listings/:id" , async (req,res) => {
    let { id } = req.params;
   let deleteListings = await listing.findByIdAndDelete(id);
   console.log(deleteListings);
   res.redirect("/listings");
});




// app.get("/listings/:id", async (req, res) => {
//     let { id } = req.params;
//     let idListing = await listing.findById(id);
//     res.render("listings/show.ejs" , { idListing })
// })

// app.get("/test", async (req, res) => {
//     let sampleList = new listing({
//         title: "Random",
//         description: "Bird image",
//         price: 1290,
//         location: "Washinton",
//         country: "UIEvent.S"
//     })
//     await sampleList.save();
//     console.log("sample saved successfully");
//     res.send("test successful")


// })

app.listen(5002, (req, res) => {
    console.log("server is running on port 5002");

})