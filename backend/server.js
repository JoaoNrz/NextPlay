import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import __dirname from './utils/pathUtils.js';
import {
    staticMiddleware,
    urlencodedMiddleware, jsonMiddleware,
    securityMiddleware, compressionMiddlewware,
    rateLimitMiddleware
} from './middlewares/middlewares.js';
import conectBD from './config/db.js';


//CARREGAR AS VARIAVEIS DO .ENV
dotenv.config();

conectBD();

const app = express();
const port = process.env.PORT;

//REGISTRANDO OS MIDDLEWARES
app.use(staticMiddleware);
app.use(urlencodedMiddleware);
app.use(jsonMiddleware);
app.use(securityMiddleware);
app.use(compressionMiddlewware);
//app.use(rateLimitMiddleware);

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
})

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head><title>NextPlay</title></head>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
    `);
})



