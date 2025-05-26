import mongoose from 'mongoose'; 

const UserSchema = new mongoose.Schema({ // agora usa mongoose aqui também
    nome: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
    biblioteca: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogos'
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogos'
    }],
    avaliacoes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
    }]
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
