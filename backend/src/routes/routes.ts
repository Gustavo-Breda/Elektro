import passport from 'passport';
import { Router } from 'express';

import userController from '../controllers/user.controller';
import authController from '../controllers/auth.controller';
import { photoUpload } from '../config/multer';
import { messageController } from '../controllers/message.controller';
import { productController } from '../controllers/product.controller';
import { favoriteController } from '../controllers/favorite.controller';


const routes = Router();

/* ------------------------------------------------------------------------------------------------------------------ */

routes.post('/login', authController.login);

/* ------------------------------------------------------------------------------------------------------------------ */

routes.post('/user/create', photoUpload.single("image"), userController.create);
routes.get('/user/:id', userController.read);
routes.get('/user', userController.readAll);
routes.get('/userAuth', passport.authenticate('jwt', {session: false}), userController.readUser);
routes.put('/user/update', passport.authenticate('jwt', {session: false}), photoUpload.single("image"), userController.update);
routes.delete('/user/delete', userController.delete);

/* ------------------------------------------------------------------------------------------------------------------ */

routes.post("/product", passport.authenticate('jwt', {session: false}), photoUpload.single, productController.create);
routes.get("/product/:id", productController.read);
routes.get("/products", productController.readAll);
routes.put("/product/:id",passport.authenticate('jwt', {session: false}), productController.update);
routes.delete("/product",passport.authenticate('jwt', {session: false}), productController.delete);

/* ------------------------------------------------------------------------------------------------------------------ */

routes.post('/favorite', passport.authenticate('jwt', {session: false}), favoriteController.create);
routes.get('/favorite/:id', passport.authenticate('jwt', {session: false}), favoriteController.isFavorite);
routes.get('/favorites', passport.authenticate('jwt', {session: false}), favoriteController.readUserFavorites);
routes.delete('/favorite/:id', passport.authenticate('jwt', {session: false}), favoriteController.delete);

/* ------------------------------------------------------------------------------------------------------------------ */

routes.post('/message/create', passport.authenticate('jwt', {session: false}), messageController.create);

/* ------------------------------------------------------------------------------------------------------------------ */

export default routes;