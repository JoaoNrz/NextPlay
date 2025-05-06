import express from 'express';
import __dirname from '../utils/pathUtils.js';
import path from 'path';
import fs from 'fs';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';

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


//middleware para guardar logs da aplicação
// const logFile = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags:'a'});
// const morganMiddleware = morgan('combined', { stream: logFile});


//exportar todos os middlewares
export {
    staticMiddleware,
    urlencodedMiddleware,
    jsonMiddleware,
    securityMiddleware,
    compressionMiddlewware,
    rateLimitMiddleware,
  
};
