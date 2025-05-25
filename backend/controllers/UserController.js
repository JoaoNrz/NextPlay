import path from 'path';
import __dirname from '../utils/pathUtils.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import ReviewsModel from '../models/ReviewsSchema.js'; // ajuste o caminho se necessário

class UserController {

    //novo usuario
    static async createUser(req, res) {
        try {
            const { nome, email, senha, isAdmin, biblioteca, wishlist, avaliacoes } = req.body;
            const novoUsuario = new User(nome, email, senha, isAdmin, new Date(), biblioteca, wishlist, avaliacoes);
            await novoUsuario.save();
            res.status(201).json({ message: 'Usuário criado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar usuário.' });
        }
    }

    //buscar todos os usuarios
    static async getAllUsers(req, res) {
        try {
            const usuarios = await User.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar usuários.' });
        }
    }

    //busca por email
    static async getUserByEmail(req, res) {
        try {
            const { email } = req.params;
            const usuario = await User.findByEmail(email);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar usuário.' });
        }
    }

    //busca por nome
    static async getUserByNome(req, res) {
        try {
            const { nome } = req.params;
            const usuario = await User.findByNome(nome);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar usuário.' });
        }
    }

    //buscar usuário por id
    static async getUserById(req, res) {
        try {
            const { id } = req.params;
            const usuario = await User.findById(id);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar usuário.' });
        }
    }

    //deleter usuario
    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const usuarioDeletado = await User.deleteById(id);
            if (!usuarioDeletado) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
            res.status(200).json({ message: 'Usuário deletado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao deletar usuário.' });
        }
    }

    //atualizar usuario
    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const usuarioAtualizado = await User.updateUser(id, updateData);
            if (!usuarioAtualizado) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
            res.status(200).json(usuarioAtualizado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar usuário.' });
        }
    }

    //ADD WISHLIST
    static async addToWishlist(req, res) {

        try {
            const { id, jogoId } = req.params; // Obtendo userId e jogoId da URL
            console.log(id, jogoId);
            const updatedUser = await User.updateUser(
                id,
                { $addToSet: { wishlist: jogoId } },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            res.status(200).json({ message: 'Jogo adicionado à wishlist!', updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao adicionar jogo à wishlist.' });
        }
    }

    static async getWishlist(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByIdWithWishlist(id);
            if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });
            res.json(user.wishlist);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar wishlist.' });
        }
    }

    //REMOVE WISHLIST
    static async removeFromWishlist(req, res) {
        try {
            const { id, jogoId } = req.params; // Obtendo userId e jogoId da URL
            const updatedUser = await User.updateUser(
                id,
                { $pull: { wishlist: jogoId } },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            res.status(200).json({ message: 'Jogo removido da wishlist!', updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao remover jogo da wishlist.' });
        }
    }

    //ADD BIBLIOTECA
    static async addToBiblioteca(req, res) {
        try {
            const { id, jogoId } = req.params; // Obtendo userId e jogoId da URL
            const updatedUser = await User.updateUser(
                id,
                { $addToSet: { biblioteca: jogoId } },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }

            res.status(200).json({ message: 'Jogo adicionado à biblioteca!', updatedUser });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao adicionar jogo à biblioteca.' });
        }
    }

    // LOGIN
    static async login(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await User.findByEmail(email);
            if (!usuario) {
                return res.status(401).json({ message: 'Usuário não encontrado.' });
            }
            // console.log(usuario.senha,senha);
            const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
            if (!senhaCorreta) {
                return res.status(401).json({ message: 'Senha incorreta.' });
            }
            // Gera o token
            const token = jwt.sign(
                { userId: usuario._id, email: usuario.email },
                'minhaStringSecretaJWT123', // string secreta básica
                { expiresIn: '1d' }
            );
            res.status(200).json({ token, usuario });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao fazer login.' });
        }
    }

    static async getBiblioteca(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByIdWithBiblioteca(id);
            if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });
            res.json(user.biblioteca);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar biblioteca.' });
        }
    }

    static async getAvaliacoes(req, res) {
        try {
            const { id } = req.params;
            const avaliacoes = await ReviewsModel.find({ usuario: id }).populate('jogo');
            res.json(avaliacoes);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar avaliações.' });
        }
    }
}

export default UserController;