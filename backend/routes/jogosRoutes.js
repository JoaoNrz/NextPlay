import express from "express";
import JogosController from "../controllers/JogosController.js";
import { uploadImageMiddleware } from "../middlewares/middlewares.js"; // importe o middleware

const routerJogos = express.Router();

// Adicione o middleware do multer na rota de criação
routerJogos.post("/jogos", uploadImageMiddleware.single('imagem'), JogosController.createJogo);

routerJogos.get("/jogos", JogosController.getAllJogos);
routerJogos.get("/jogos/titulo/:titulo", JogosController.getJogoByTitulo);
routerJogos.get("/jogos/categorias/:categorias", JogosController.getJogosByCategorias);
routerJogos.get("/jogos/plataformas/:plataformas", JogosController.getJogosByPlataformas);
routerJogos.get("/jogos/:id", JogosController.getJogoById);

routerJogos.put("/jogos/:id", uploadImageMiddleware.single('imagem'), JogosController.updateJogoById);

routerJogos.delete("/jogos/:id", JogosController.deleteJogoById);

export default routerJogos;

