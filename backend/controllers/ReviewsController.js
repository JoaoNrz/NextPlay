import path from 'path';
import __dirname from '../utils/pathUtils.js';
import Reviews from '../models/Reviews.js';

class ReviewsController {

    //criar uma nova avaliação
    static async createReview(req, res) {
        try {
            const { comentario,nota,usuario,jogo } = req.body;
            console.log('Dados recebidos para criar a avaliação:', { comentario, nota, usuario, jogo });
            const novaReview = new Reviews(comentario, nota, usuario, jogo);
            await novaReview.save();
            res.status(201).json({ message: 'Avaliação criada com sucesso!', review: novaReview });
            
        } catch (error) {
            console.error(error);
            console.log('Erro ao criar a avaliação:', error);
            res.status(500).json({ message: 'Erro ao criar a avaliação' });
        }
    }

    //buscar todas as avaliações
    static async getAllReviews(req, res) {
        try {
            const reviews = await Reviews.findAll();
            res.status(200).json(reviews);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar as avaliações' });
        }
    }

    //buscar por nota maiores
    static async getReviewsByNota(req, res) {
        try {
            const { nota } = req.params;
            const reviews = await Reviews.findByNota(nota);
            if (reviews.length === 0) {
                return res.status(404).json({ message: 'Nenhuma avaliação encontrada' });
            }
            res.status(200).json(reviews);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar as avaliações' });
        }
    }

    //buscar por jogo
    static async getReviewsByJogo(req, res) {
        try {
            const { jogo } = req.params;
            const reviews = await Reviews.findByJogo(jogo);
            if (reviews.length === 0) {
                return res.status(404).json({ message: 'Nenhuma avaliação encontrada' });
            }
            res.status(200).json(reviews);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar as avaliações' });
        }
    }

    //deletar uma avaliação
    static async deleteReview(req, res) {
        try {
            const { id } = req.params;
            const review = await Reviews.deleteById(id);
            if (!review) {
                return res.status(404).json({ message: 'Avaliação não encontrada' });
            }
            res.status(200).json({ message: 'Avaliação deletada com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao deletar a avaliação' });
        }
    }

    //atualizar uma avaliação
    static async updateReview(req, res) {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const review = await Reviews.updateById(id, updatedData);
            if (!review) {
                return res.status(404).json({ message: 'Avaliação não encontrada' });
            }
            res.status(200).json({ message: 'Avaliação atualizada com sucesso!', review });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar a avaliação' });
        }
    }

    //buscar avaliação por id
    static async getReviewById(req, res) {
        try {
            const { id } = req.params;
            const review = await Reviews.findById(id);
            if (!review) {
                return res.status(404).json({ message: 'Avaliação não encontrada' });
            }
            res.status(200).json(review);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar a avaliação' });
        }
    }
}

export default ReviewsController;