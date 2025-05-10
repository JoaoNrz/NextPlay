import UserModel from "./UserSchema.js";

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
        const novoUser = new UserModel({
            nome: this.nome,
            email: this.email,
            senha: this.senha,
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
