const moongose = require('mongoose');

const UserSchema = new moongose.Schema({

    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    dataCadastro:{
        type: Date,
        default: Date.now
    },

    // Jogos que o usuário comprou
    biblioteca: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogos'
    }],
    // Jogos que o usuario deseja comprar
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogos'
    }],
    // Avaliações que o usuário fez
    avaliacoes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
    }],
    },
    {
        timestamps: true
    });

const User = moongose.model('User', UserSchema);
module.exports = User;