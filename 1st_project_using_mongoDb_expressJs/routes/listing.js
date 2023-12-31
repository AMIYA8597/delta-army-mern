const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema, reviewSchema } = require("../schema");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  console.log("result is :", result);
  if (result.error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};



//*************************index route******************************************

router.get(
  "/",
  wrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//****************************new route****************************************

router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// show routes

router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const idlisting = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { idlisting });
  })
);

//   create Route

router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    // let { title, description, price, image ,country, location} = req.body;
    // let listing = req.body.Listing;
    // try {
    //     const newListing = new Listing(req.body.listing);
    //     await newListing.save()
    //     res.redirect("/listings");
    // } catch (error) {
    //     next(err)
    // }
    // if (!req.body.Listing) {
    //     throw new ExpressError(400, "send valid data for listing")
    // }

    const newListing = new Listing(req.body.Listing);

    // if (!newListing.title) {
    //     throw new ExpressError(400, "send valid data for title")
    // }
    // if (!newListing.description) {
    //     throw new ExpressError(400, "send valid data for description")
    // }
    // if (!newListing.location) {
    //     throw new ExpressError(400, "send valid data for location")
    // }
    await newListing.save();
    // console.log("my new Listing", Listing);
    res.redirect("/listings");
    // res.redirect(`/listings/${newListing._id}`);
  })
);

//**********************edit routing**************************

router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const idlisting = await Listing.findById(id);
    res.render("listings/edit.ejs", { idlisting });
  })
);

// *********************update Route *****************************

router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    // if (!req.body.Listing) {
    //     throw new ExpressError(400, "send valid data for listing")
    // }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);

// **********************delete Route*******************************************

router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deleteListings = await Listing.findByIdAndDelete(id);
    console.log(deleteListings);
    res.redirect("/listings");
  })
);

module.exports = router;
