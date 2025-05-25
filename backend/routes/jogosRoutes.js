import express from "express";
import JogosController from "../controllers/JogosController.js";

const routerJogos = express.Router();

routerJogos.post("/jogos", JogosController.createJogo);
routerJogos.get("/jogos", JogosController.getAllJogos);
routerJogos.get("/jogos/titulo/:titulo", JogosController.getJogoByTitulo);
routerJogos.get("/jogos/categorias/:categorias", JogosController.getJogosByCategorias);
routerJogos.get("/jogos/plataformas/:plataformas", JogosController.getJogosByPlataformas);
routerJogos.get("/jogos/:id", JogosController.getJogoById);
routerJogos.put("/jogos/:id", JogosController.updateJogoById);
routerJogos.delete("/jogos/:id", JogosController.deleteJogoById);

export default routerJogos;

