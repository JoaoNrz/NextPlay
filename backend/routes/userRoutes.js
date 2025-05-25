import express from 'express';
import UserController from '../controllers/UserController.js';

const routerUser = express.Router();

routerUser.post("/user", UserController.createUser);
routerUser.get("/user", UserController.getAllUsers);
routerUser.get("/user/email/:email", UserController.getUserByEmail);
routerUser.get("/user/nome/:nome", UserController.getUserByNome);
routerUser.get("/user/:id", UserController.getUserById);
routerUser.delete("/user/:id", UserController.deleteUser);
routerUser.put("/user/:id", UserController.updateUser);

routerUser.put("/user/:id/wishlist/:jogoId", UserController.addToWishlist);

routerUser.get('/user/:id/wishlist', UserController.getWishlist);

routerUser.put("/user/remove/:id/wishlist/:jogoId", UserController.removeFromWishlist);
routerUser.put("/user/:id/biblioteca/:jogoId", UserController.addToBiblioteca);
routerUser.get('/user/:id/biblioteca', UserController.getBiblioteca);


routerUser.get('/user/:id/avaliacoes', UserController.getAvaliacoes);
routerUser.post("/user/login", UserController.login);

export default routerUser;

