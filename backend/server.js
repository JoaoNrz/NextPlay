import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import __dirname from './utils/pathUtils.js';


//CARREGAR AS VARIAVEIS DO .ENV
dotenv.config();


const app = express();
const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
})

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head><title>NextPlay</title></head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `);
})



