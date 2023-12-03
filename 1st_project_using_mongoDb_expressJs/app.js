const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const listing = require("./models/listing")
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require("./utils/ExpressError")
const { listingSchema } = require("./schema")
const Joi = require('joi');

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

const validateListing = (req,res,next) => {
    let { error } = listingSchema.validate(req.body);
    console.log("result is :", result);
    if (result.error) {
        let errMsg = error.details.map( (el) => el.message).join(",");
       throw new ExpressError (400 , error)
    } else {
       next() 
    }
}

//  index route 

app.get("/listings", wrapAsync(async (req, res) => {
    let allListings = await listing.find({})
    res.render("listings/index.ejs", { allListings })
}));

//   new route  

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
})

// show routes

app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const idlisting = await listing.findById(id);
    res.render("listings/show.ejs", { idlisting });
}));

//   create Route

app.post("/listings", validateListing,  wrapAsync(async (req, res, next) => {
    // let { title, description, price, image ,country, location} = req.body;
    // let listing = req.body.listing;
    // try {
    //     const newListing = new listing(req.body.listing);
    //     await newListing.save()
    //     res.redirect("/listings");
    // } catch (error) {
    //     next(err)
    // }
    // if (!req.body.listing) {
    //     throw new ExpressError(400, "send valid data for listing")     
    // }
   
    const newListing = new listing(req.body.listing)

    // if (!newListing.title) {
    //     throw new ExpressError(400, "send valid data for title")     
    // }
    // if (!newListing.description) {
    //     throw new ExpressError(400, "send valid data for description")     
    // }
    // if (!newListing.location) {
    //     throw new ExpressError(400, "send valid data for location")     
    // }
    await newListing.save()
    // console.log("my new listing", listing);
    res.redirect("/listings");
    // res.redirect(`/listings/${newListing._id}`);
}))

// edit routing 

app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const idlisting = await listing.findById(id);
    res.render("listings/edit.ejs", { idlisting });
}))

// update Route 

app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    // if (!req.body.listing) {
    //     throw new ExpressError(400, "send valid data for listing")
    // }
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, { ...req.body.listing })
    res.redirect(`/listings/${id}`)
}))


// delete Route

app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deleteListings = await listing.findByIdAndDelete(id);
    console.log(deleteListings);
    res.redirect("/listings");
}));




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

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "page not found:"));
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong !" } = err;
    res.statusCode(statusCode).render("error.ejs", { message })
    // res.render("error.ejs", { err });
    res.render("error.ejs").status(statusCode);

})

app.listen(5002, (req, res) => {
    console.log("server is running on port 5002");

})