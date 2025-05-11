import mongoose from 'mongoose'; 

const ReviewsSchema = new mongoose.Schema({

    comentario: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    jogo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogos',
        required: true
    }
}, {
    timestamps: true
});

const ReviewsModel = mongoose.model('Reviews', ReviewsSchema);
export default ReviewsModel;
