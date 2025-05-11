import express from "express";
import ReviewsController from "../controllers/ReviewsController.js";

const routerReviews = express.Router();
routerReviews.post("/reviews", ReviewsController.createReview);
routerReviews.get("/reviews", ReviewsController.getAllReviews);
routerReviews.get("/reviews/nota/:nota", ReviewsController.getReviewsByNota);
routerReviews.get("/reviews/jogo/:jogo", ReviewsController.getReviewsByJogo);
routerReviews.delete("/reviews/:id", ReviewsController.deleteReview);
routerReviews.put("/reviews/:id", ReviewsController.updateReview);

export default routerReviews;