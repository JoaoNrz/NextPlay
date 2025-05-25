import JogosModel from "./JogosSchema.js";

class Jogos {
    constructor(titulo, descricao, imagemURL, dataLancamento, preco, categorias=[], desenvolvedores=[], plataformas=[], metacritic = 0, avaliacoes = []) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagemURL = imagemURL;
        this.dataLancamento = dataLancamento;
        this.preco = preco;
        this.categorias = categorias;
        this.desenvolvedores = desenvolvedores;
        this.plataformas = plataformas;
        this.metacritic = metacritic;
        this.avaliacoes = avaliacoes;
    }

    //CREATE
    async save(){
        const novoJogo = new JogosModel({
            titulo: this.titulo,
            descricao: this.descricao,
            imagemURL: this.imagemURL,
            dataLancamento: this.dataLancamento,
            preco: this.preco,
            categorias: this.categorias,
            desenvolvedores: this.desenvolvedores,
            plataformas: this.plataformas,
            metacritic: this.metacritic,
            avaliacoes: this.avaliacoes
        });
        return await novoJogo.save();
    }
    //BUSCAS
    //all
    static async findAll(){
        return await JogosModel.find();
    }

    //titulo
    static async findByTitulo(titulo){
        return await JogosModel.findOne({titulo: titulo});
    }

    //categorias
    static async findByCategorias(categorias){
        return await JogosModel.find({categorias: {$in: categorias}});
    }

    //plataformas
    static async findByPlataformas(plataformas){
        return await JogosModel.find({plataformas: {$in: plataformas}});
    }

    //buscar por id
    static async findById(id){
        return await JogosModel.findById(id);
    }

    //notas criticos maiores

    //DELETE
    static async deleteById(id){
        return await JogosModel.findByIdAndDelete(id);
    }

    //ATT
    static async updateJogo(id, updateData){
        return await JogosModel.findByIdAndUpdate(id, updateData, { new: true });
    }
}

export default Jogos;