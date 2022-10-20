// const express = require("express");
// const router = express.Router({ mergeParams: true });

// const Campground = require("../models/campground");
// const Review = require("../models/review");

// const { reviewSchema } = require("../schemas.js");

// const ExpressError = require("../utils/ExpressError");
// const catchAsync = require("../utils/catchAsync");

// const { isLoggedIn } = require("../middleware");

// const validateReview = (req, res, next) => {
//   const { error } = reviewSchema.validate(req.body);
//   if (error) {
//     const msg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(msg, 400);
//   } else {
//     next();
//   }
// };

// router.post(
//   "/",
//   isLoggedIn,
//   validateReview,
//   catchAsync(async (req, res) => {
//     const campground = await Campground.findById(req.params.id);
//     const review = new Review(req.body.review);
//     review.author = req.user._id;
//     await review.save();
//     campground.reviews.push(review);
//     await campground.save();
//     req.flash("success", "Created new review!");
//     res.redirect(`/campgrounds/${campground._id}`);
//   })
// );

// router.delete(
//   "/:reviewId",
//   isLoggedIn,
//   catchAsync(async (req, res) => {
//     const { id, reviewId } = req.params;
//     await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
//     await Review.findByIdAndDelete(reviewId);
//     req.flash("success", "Successfully deleted review");
//     res.redirect(`/campgrounds/${id}`);
//   })
// );

// module.exports = router;

const express = require("express");
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const Campground = require("../models/campground");
const Review = require("../models/review");
const reviews = require("../controllers/reviews");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
