import path from 'path';
import __dirname from '../utils/pathUtils.js';
import Jogos from '../models/Jogos.js';

class JogosController {

    //criar um novo jogo
    static async createJogo(req, res) {
        try {
            // Se o upload de imagem foi feito, pega o caminho do arquivo
            const imagemURL = req.file ? `/uploads/${req.file.filename}` : null;

            // Os outros campos continuam vindo do body normalmente
            const { titulo, descricao, dataLancamento, preco, categorias, desenvolvedores, plataformas, metacritic, avaliacoes } = req.body;

            const novoJogo = new Jogos(
                titulo,
                descricao,
                imagemURL,
                dataLancamento,
                preco,
                categorias,
                desenvolvedores,
                plataformas,
                metacritic,
                avaliacoes
            );
            await novoJogo.save();
            res.status(201).json({ message: 'Jogo criado com sucesso!', jogo: novoJogo });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar o jogo' });
        }
    }

    //buscar todos os jogos
    static async getAllJogos(req, res) {
        try {
            const jogos = await Jogos.findAll();
            res.status(200).json(jogos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar os jogos' });
        }
    }

    //buscar por titulo
    static async getJogoByTitulo(req, res) {
        try {
            const { titulo } = req.params;
            const jogo = await Jogos.findByTitulo(titulo);
            if (!jogo) {
                return res.status(404).json({ message: 'Jogo não encontrado' });
            }
            res.status(200).json(jogo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar o jogo' });
        }
    }

    //buscar por categorias
    static async getJogosByCategorias(req, res) {
        try {
            const { categorias } = req.params;
            const jogos = await Jogos.findByCategorias(categorias.split(','));
            if (jogos.length === 0) {
                return res.status(404).json({ message: 'Nenhum jogo encontrado' });
            }
            res.status(200).json(jogos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar os jogos' });
        }
    }

    //buscar por plataformas
    static async getJogosByPlataformas(req, res) {
        try {
            const { plataformas } = req.params;
            const jogos = await Jogos.findByPlataformas(plataformas.split(','));
            if (jogos.length === 0) {
                return res.status(404).json({ message: 'Nenhum jogo encontrado' });
            }
            res.status(200).json(jogos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar os jogos' });
        }
    }

    //buscar jogo por id
    static async getJogoById(req, res) {
        try {
            const { id } = req.params;
            const jogo = await Jogos.findById(id);
            if (!jogo) {
                return res.status(404).json({ message: 'Jogo não encontrado' });
            }
            res.status(200).json(jogo);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar o jogo' });
        }
    }

    //atualizar jogo por id
    static async updateJogoById(req, res) {
        try {
            const { id } = req.params;
            const { titulo, descricao, imagemURL, dataLancamento, preco, categorias, desenvolvedores, plataformas, metacritic, avaliacoes } = req.body;
            const jogo = await Jogos.updateJogo(id, { titulo, descricao, imagemURL, dataLancamento, preco, categorias, desenvolvedores, plataformas, metacritic, avaliacoes }, { new: true });
            if (!jogo) {
                return res.status(404).json({ message: 'Jogo não encontrado' });
            }
            res.status(200).json({ message: 'Jogo atualizado com sucesso!', jogo });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar o jogo' });
        }
    }

    //deletar jogo por id
    static async deleteJogoById(req, res) {
        try {
            const { id } = req.params;
            const jogo = await Jogos.deleteById(id);
            if (!jogo) {
                return res.status(404).json({ message: 'Jogo não encontrado' });
            }
            res.status(200).json({ message: 'Jogo deletado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao deletar o jogo' });
        }
    }
}

export default JogosController;
