const moongose = require('mongoose');

const ReviewsSchema = new moongose.Schema({

    comentario:{
        type: String,
        required: true
    },
    nota:{
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    usuario:{
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    jogo:{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Jogos',
        required: true
    }},
    {
        timestamps: true
    });

const ReviewsModel = moongose.model('Reviews', ReviewsSchema);
module.exports = ReviewsModel;