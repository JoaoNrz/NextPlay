import path from 'path';
import __dirname from '../utils/pathUtils.js';
import User from '../models/User.js';

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
}