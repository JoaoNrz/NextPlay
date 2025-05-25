import express from 'express';
import __dirname from '../utils/pathUtils.js';
import path from 'path';
import fs from 'fs';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import multer from 'multer';

//middleware para carregar os arquivos estaticos/asstes
const staticMiddleware = express.static(path.join(__dirname,'assets'));


//middleware para trabalhar com arquivos json
const urlencodedMiddleware = express.urlencoded({ extended: true});
const jsonMiddleware = express.json();


//middleware de segurança helmet
const securityMiddleware = helmet();


//midlleware de compressao cabeçalho seg tambem
const compressionMiddlewware = compression();


//middleware de limite de acessos a aplicação por tempo
const rateLimitMiddleware = rateLimit({
    windowMs: 10 * 60 * 1000,  // 10 minutos
    max: 100,                  // Limita cada IP a 50 requisições por janela
    message: 'Muitas requisições, tente novamente em 10 minutos.'
});

const corsMiddleware = cors({
    origin: '*', // Permitir todas as origens
});


//middleware para guardar logs da aplicação
// const logFile = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags:'a'});
// const morganMiddleware = morgan('combined', { stream: logFile});


//middleware de autenticação
export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Token não fornecido.' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'minhaStringSecretaJWT123');
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido.' });
    }
}

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/uploads')); // pasta onde as imagens serão salvas
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const imageFileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Apenas arquivos de imagem são permitidos!'), false);
    }
};

const uploadImageMiddleware = multer({ storage, fileFilter: imageFileFilter });

//exportar todos os middlewares
export {
    staticMiddleware,
    urlencodedMiddleware,
    jsonMiddleware,
    securityMiddleware,
    compressionMiddlewware,
    rateLimitMiddleware,
    corsMiddleware,
    uploadImageMiddleware // exportando o multer
    // NÃO coloque authMiddleware aqui, pois já foi exportado acima
};
