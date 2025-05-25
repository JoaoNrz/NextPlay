import { ExplainVerbosity } from 'mongodb';
import ReviewsModel from './ReviewsSchema.js';
import User from './User.js';
import Jogos from './Jogos.js';

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
        
            await User.updateUser(this.usuario, { $push: { avaliacoes: novaReview._id } });

            await Jogos.updateJogo(this.jogo, { $push: { avaliacoes: novaReview._id } });

            return await novaReview.save();
        }

        //BUSCAS
        //all
        static async findAll() {
            return await ReviewsModel.find().populate('usuario').populate('jogo');
        }

        //notas maiores
        static async findByNota(nota) {
            return await ReviewsModel.find({ nota: { $gte: nota } });
        }

        //jogo
        static async findByJogo(jogo) {
            return await ReviewsModel.find({ jogo: jogo });
        }

        //buscar por id
        static async findById(id) {
            return await ReviewsModel.findById(id).populate('usuario').populate('jogo');
        }

        //DELETE
        static async deleteById(id) {
            return ReviewsModel.findByIdAndDelete(id);
        }

        //ATT
        static async updateById(id, updatedData) {
            return await ReviewsModel.findByIdAndUpdate(id, updatedData, { new: true });
        }
    }

    export default Reviews;
