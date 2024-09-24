





import { OrderController } from  '../controllers/Order/OrderController.js';
import { Authorization } from '../controllers/MiddlewareController.js';
const authorization = new Authorization()
import express from 'express';
const orderRouter = express.Router();
const orderController = new OrderController()


// orderRouter.get("/users/:id",Authorization, userController.getone)
orderRouter.get("/allorder",authorization.checkUser, orderController.getall)
// orderRouter.delete("/users/:id",Authorization, userController.delete)
orderRouter.put("/detail/:id", orderController.update)
orderRouter.post('/create', orderController.create)
// orderRouter.post('/login', userController.login)
// orderRouter.get("/logout", userController.logout)
// orderRouter.get("/profile",Authorization ,userController.profile)



export {orderRouter}