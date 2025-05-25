import express from "express";
import ReviewsController from "../controllers/ReviewsController.js";
import { authMiddleware } from "../middlewares/middlewares.js";

const routerReviews = express.Router();

// Criar avaliação (só logado)
routerReviews.post("/reviews", authMiddleware, ReviewsController.createReview);

// Buscar todas as avaliações do usuário logado
routerReviews.get("/reviews", authMiddleware, ReviewsController.getAllReviews);

// Buscar avaliações por nota (do usuário logado)
routerReviews.get("/reviews/nota/:nota", authMiddleware, ReviewsController.getReviewsByNota);

// Buscar avaliações por jogo (do usuário logado)
routerReviews.get("/reviews/jogo/:jogo", authMiddleware, ReviewsController.getReviewsByJogo);

// Buscar avaliação por id (do usuário logado)
routerReviews.get("/reviews/:id", authMiddleware, ReviewsController.getReviewById);

// Editar avaliação (só o dono pode)
routerReviews.put("/reviews/:id", authMiddleware, ReviewsController.updateReview);

// Excluir avaliação (só o dono pode)
routerReviews.delete("/reviews/:id", authMiddleware, ReviewsController.deleteReview);

export default routerReviews;