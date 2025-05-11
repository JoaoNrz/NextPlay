import express from 'express';
import UserController from '../controllers/userController.js';

const routerUser = express.Router();

routerUser.post("/user", UserController.createUser);
routerUser.get("/user", UserController.getAllUsers);
routerUser.get("/user/email/:email", UserController.getUserByEmail);
routerUser.get("/user/nome/:nome", UserController.getUserByNome);
routerUser.delete("/user/:id", UserController.deleteUser);
routerUser.put("/user/:id", UserController.updateUser);

routerUser.put("/user/:id/wishlist/:jogoId", UserController.addToWishlist);

routerUser.put("/user/remove/:id/wishlist/:jogoId", UserController.removeFromWishlist);
routerUser.put("/user/:id/biblioteca/:jogoId", UserController.addToBiblioteca);

export default routerUser;

