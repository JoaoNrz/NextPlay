const moongose = require('mongoose');
const { prependListener } = require('./UserSchema');

const JogosSchema = new moongose.Schema({
    titulo:{
        type: String,
        required: true
    }
    ,
    descricao:{
        type: String,
    },
    imagemURL:{
        type: String,
    },
    dataLancamento:{
        type: Date,
    },
    preco:{
        type: Number,
        required: true
    },
    categorias:{
        type: [String],
    },
    desenvolvedores:{
        type: [String],
    },
    plataformas:{
        type: [String],
    },
    nota:{
        type: Number,
        default: 0
    },
    metacritic:{
        type: Number,
        default: 0
    },

    // Avaliações feitas pelos usuários
    avaliacoes: [{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Reviews'
    }]},
    {
        timestamps: true
    });

const Jogos = moongose.model('Jogos', JogosSchema);
module.exports = Jogos;
