import { ExplainVerbosity } from 'mongodb';
import ReviewsModel from './ReviewsSchema.js';

    class Reviews {
        constructor(comentario, nota, usuario, jogo) {
            this.comentario = comentario;
            this.nota = nota;
            this.usuario = usuario;
            this.jogo = jogo;
        }

        //CREATE
        async save() {
            const novaReview = new ReviewsModel({
                comentario: this.comentario,
                nota: this.nota,
                usuario: this.usuario,
                jogo: this.jogo
            });
            return await novaReview.save();
        }

        //BUSCAS
        //all
        static async findAll() {
            return await ReviewsModel.find();
        }

        //notas maiores
        static async findByNota(nota) {
            return await ReviewsModel.find({ nota: { $gte: nota } });
        }

        //jogo
        static async findByJogo(jogo) {
            return await ReviewsModel.find({ jogo: jogo });
        }

        //DELETE
        deleteById(id) {
            return ReviewsModel.findByIdAndDelete(id);
        }

        //ATT
        async updateById(id, updatedData) {
            return await ReviewsModel.findByIdAndUpdate(id, updatedData, { new: true });
        }
    }

    export default Reviews;
