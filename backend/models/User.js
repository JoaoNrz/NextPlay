import UserModel from "./UserSchema.js";
import bcrypt from 'bcryptjs';

class User {

    constructor(nome, email, senha, isAdmin = false, dataCadastro = new Date(), biblioteca = [], wishlist = [], avaliacoes = []) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.isAdmin = isAdmin;
        this.dataCadastro = dataCadastro;
        this.biblioteca = biblioteca;
        this.wishlist = wishlist;
        this.avaliacoes = avaliacoes;
    }

    //CREATE
    async save(){
        const hashedSenha = await bcrypt.hash(this.senha, 10);
        const novoUser = new UserModel({
            nome: this.nome,
            email: this.email,
            senha: hashedSenha, // salva a senha criptografada
            isAdmin: this.isAdmin,
            dataCadastro: this.dataCadastro,
            biblioteca: this.biblioteca,
            wishlist: this.wishlist,
            avaliacoes: this.avaliacoes
        });
        return await novoUser.save();
    }

    //BUSCAS
    //all
    static async findAll(){
        return await UserModel.find();
    }

    //email
    static async findByEmail(email){
        return await UserModel.findOne({email: email});
    }

    //nome
    static async findByNome(nome){
        return await UserModel.findOne({nome: nome});
    }

    //buscar por id
    static async findById(id){
        return await UserModel.findById(id);
    }

    
    static async findByIdWithWishlist(id){
        return await UserModel.findById(id).populate('wishlist');
    }

    static async findByIdWithBiblioteca(id){
        return await UserModel.findById(id).populate('biblioteca');
    }

    //DELETE
    static async deleteById(id){
        return await UserModel.findByIdAndDelete(id);
    }

    //ATT
    static async updateUser(id, updateData){
        return await UserModel.findByIdAndUpdate(id, updateData, { new: true });
    }

}

export default User;
